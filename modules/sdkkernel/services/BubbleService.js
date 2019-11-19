(function(factory) {
    module.exports = factory(require('./../rest/client/rainbow_enduser_portal/src'), require('./../rest/client/s2s/src'), require('./../../common/utils'));
}(function(RainbowEndUserPortal, S2SApi, Utils) {
    'use strict';
    //var RainbowEndUserPortal = require('./../rest/client/rainbow_enduser_portal/src');
    const _subscribeToEvents = Symbol('subscribeToEvents');
    const LOG_ID = "BUBBLE";
    /**
     * Rainbow Bubble Client API
     * This class aggregate all api related to Bubbles
     */
    class BubbleService {

        constructor(logger,
            connectedUserInfo,
            connectionInfo,
            accept,
            endUserPortalClient,
            s2sClient,
            eventEmitter) {
            this._accept = accept;
            this._logger = logger;
            this._connectedUserInfo = connectedUserInfo;
            this._connectionInfo = connectionInfo;
            this._eventEmitter = eventEmitter;
            this._bubbles = [];

            this._endUserRoomsApi = new RainbowEndUserPortal.RoomsApi(endUserPortalClient);
            this._endUserRoomsAvatarApi = new RainbowEndUserPortal.RoomsAvatarApi(endUserPortalClient);
            this._endUserRoomsConferenceApi = new RainbowEndUserPortal.RoomsConferenceApi(endUserPortalClient);
            this._endUserRoomsCustomDataApi = new RainbowEndUserPortal.RoomsCustomDataApi(endUserPortalClient);
            this._endUserRoomsInvitationApi = new RainbowEndUserPortal.RoomsInvitationApi(endUserPortalClient);
            this._endUserRoomsOpenInviteApi = new RainbowEndUserPortal.RoomsOpenInviteApi(endUserPortalClient);
            this._endUserRoomsUsersApi = new RainbowEndUserPortal.RoomsUsersApi(endUserPortalClient);
            this._s2sRoomApi = new S2SApi.RoomApi(s2sClient);
            this[_subscribeToEvents]();
        }

        [_subscribeToEvents]() {
            this._eventEmitter.on("rainbow_invitationreceived", this._onInvitationReceived.bind(this));
            this._eventEmitter.on("rainbow_affiliationchanged", this._onAffiliationChanged.bind(this));
            this._eventEmitter.on("rainbow_ownaffiliationchanged", this._onOwnAffiliationChanged.bind(this));
            this._eventEmitter.on("rainbow_customdatachanged", this._onCustomDataChanged.bind(this));
            this._eventEmitter.on("rainbow_topicchanged", this._onTopicChanged.bind(this));
            this._eventEmitter.on("rainbow_namechanged", this._onNameChanged.bind(this));
        }

        /**
         * @description
         * Starts Bubble Service
         */
        async start() {
            let that = this;
            this._logger.info('retreiving bubles ...');
            let userId = this._connectedUserInfo.id;
            let opts = { userId: userId, format: 'small' };
            await this._endUserRoomsApi.getRooms(this._accept, opts).then(function(responseBody) {
                try {
                    let bubbles = responseBody.data;
                    that._logger.info(`got ${bubbles.length} bubbles `);
                    that._bubbles = bubbles;
                } catch (ex) {
                    throw ex;
                }
            }, function(error) {
                that._logger.exitWithError('failed to get bubbles:' + JSON.stringify(error));
                throw error;
            }).catch((ex) => {
                that._logger.exitWithError('failed to get bubbles:', ex);
                throw ex;
            });
        }

        async stop() {
            that._bubbles = [];
        }

        /**
         * @description
         * room avatar api module
         */
        get avatars() {
                return this._endUserRoomsAvatarApi;
            }
            /**
             * @description
             * get room conference api module
             */
        get conference() {
            return this._endUserRoomsConferenceApi;
        }

        /**
         * get room custom data api module
         */
        get customData() {
            return this._endUserRoomsCustomDataApi;
        }

        /**
         * get room invitation api modules
         */
        get invitation() {
            return this._endUserRoomsInvitationApi;
        }

        /**
         * get room openinvite api modules
         */
        get openInvite() {
            return this._endUserRoomsOpenInviteApi;
        }

        /**
         * get room users api modules
         */
        get user() {
            return this._endUserRoomsUsersApi;
        }

        _updateBubleStatus(bubbleId, status) {
            let that = this;
            this._logger.enter(LOG_ID + "(_updateBubleStatus)");
            return new Promise((resolve, reject) => {
                var body = new RainbowEnduserPortal.UpdateUserData();
                body.status = status;
                that._endUserRoomsUsersApi.updateUserData(bubbleId, that._connectedUserInfo.id, body).then((data) => {
                    that._logger.debug(LOG_ID + "(_updateBubleStatus) called successfully : Returned data :" + JSON.stringify(data));
                    that.getBubble(bubbleId).then((bubbleUpdated) => {
                        // Update the existing local bubble stored
                        var foundIndex = that._bubbles.findIndex(bubbleItem => bubbleItem.id === bubbleUpdated.id);
                        if (foundIndex > -1) {
                            bubbleUpdated = Object.assign(that._bubbles[foundIndex], bubbleUpdated);
                            that._bubbles[foundIndex] = bubbleUpdated;
                        } else {
                            that._logger.warn(LOG_ID + "(_updateBubleStatus) bubble with id:" + bubbleUpdated.id + " is no more available");
                        }
                        resolve(bubbleUpdated);
                        that._logger.exit(LOG_ID + "(_updateBubleStatus)");
                    });
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(_updateBubleStatus) :" + JSON.stringify(error));
                    reject(error);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(_updateBubleStatus) error :" + JSON.stringify(error));
                    reject(err);
                });
            });
        }

        /**
         *  TODO comment envoyer la presence dans une bulle ?
         */
        sendInitialBubblePresence(bubbleJid) {
            let that = this;
            this._logger.enter('sendInitialBubblePresence :bubbleJid=' + bubbleJid);
            /*	
            //var body = new RainbowEnduserPortal.SendPresenceRequest();
            var userId = this._connectedUserInfo.id;

            var cnxId = that._connectionInfo.id
            var opts = {
                'presenceUpdate': new S2SApi.PresenceUpdate() // PresenceUpdate | Presence data
            };
            opts.presenceUpdate.presence.status = 'xa';
            that._sdkCore.presenceModule.s2SPhxWebPresenceControllerUpdate(cnxId, opts).then(function(data) {
                that._logger.exit('s2SPhxWebPresenceControllerUpdate');
                resolve(data);
            }, function(error) {
                that._logger.exitWithError('s2SPhxWebPresenceControllerUpdate :' + JSON.stringify(error));
                reject(err);
            });*/
            /*
                        body.toJid = bubbleJid;
                        return new Promise((resolve, reject) => {
                            that._sdkCore.presenceModule.sendPresenceRequest(userId, body).then((data) => {
                                that._logger.exit('sendInitialBubblePresence :bubbleJid=' + bubbleJid);
                                resolve(data);
                            }, (err) => {
                                that._logger.exitWithError('sendInitialBubblePresence');
                                reject(err);
                            });
                        });
            */
        }

        sendUnavailableBubblePresence(bubbleJid) {
            let that = this;
            this._logger.enter('sendUnavailableBubblePresence :bubbleJid=' + bubbleJid);
        }

        acceptInvitationToJoinBubble(bubbleId) {
            let that = this;
            this._logger.enter('acceptInvitationToJoinBubble :bubbleJid=' + bubbleId);
            return that._updateBubleStatus(bubbleId, 'accepted');
        }


        /**
         * @public
         * @method createBubble
         * @instance
         * @description
         *  Create a new bubble
         * @param {string} name  The name of the bubble to create
         * @param {string} description  The description of the bubble to create
         * @param {boolean} withHistory If true, a newcomer will have the complete messages history since the beginning of the bubble. False if omitted
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>} 
         * @fulfil {Bubble} - Bubble object, else an Error object
         * @category async
         */
        createBubble(name, description, withHistory) {
            let that = this;
            var body = new RainbowEnduserPortal.CreateRoom();
            body.name = name;
            body.topic = description;
            body.history = withHistory;
            return new Promise((resolve, reject) => {
                that._endUserRoomsApi.createRoom(body).then((data) => {
                    that._logger.exit('createBubble');
                    resolve(data);
                }, (err) => {
                    that._logger.exitWithError('createBubble ' + JSON.stringify(err));
                    reject(err);
                });
            });
        }

        /**
         * @public
         * @method isBubbleClosed
         * @instance
         * @param {Bubble} bubble  The bubble to check
         * @return {boolean} True if the bubble is closed 
         * @memberof Bubbles
         * @description
         *  Check if the bubble is closed or not.
         */
        isBubbleClosed(bubble) {
            this._logger.enter(LOG_ID + "(isBubbleClosed) _entering_");
            if (!bubble) {
                this._logger.warn(LOG_ID + "(isBubbleClosed) bad or empty 'bubble' parameter", bubble);
                this._logger.debug(LOG_ID + "(isBubbleClosed) _exiting_");
                throw new Error(`isBubbleClosed(bubble) as been givven a bad parameter`);
            } else {
                var activeUser = bubble.users.find((user) => {
                    return user.status === "invited" || user.status === "accepted";
                });
                this._logger.debug(LOG_ID + "(isBubbleClosed) _exiting_");
                if (activeUser) {
                    return false;
                }
                return true;
            }
        }

        /**
         * @public
         * @method
         * @instance
         * @description
         *    Delete all existing owned bubbles <br/>
         *    Return a promise
         * @return {Object} Nothing or an error object depending on the result
         */
        deleteAllBubbles() {
            let that = this;
            let N = 4;
            var deleteByN = this._bubbles.reduce(function(groups, bubble) {
                if (groups[groups.length - 1].length < N) {
                    groups[groups.length - 1].push(bubble);
                } else {
                    groups.push([bubble]);
                }
                return groups;
            }, [
                []
            ]);

            deleteByN.reduce(function(chain, group) {
                return chain.then(function() {
                    var tasks = group.map(function(bubble) {
                        return that.deleteBubble(bubble);
                    });
                    return Q.all(tasks);
                });
            }, Q()).done();
        };

        /**
         * @public
         * @method deleteBubble
         * @instance
         * @param {Bubble} bubble  The bubble to delete
         * @memberof Bubbles
         * @description
         *  Delete a owned bubble. When the owner deletes a bubble, the bubble and its content is no more accessible by all participants.
         * @async
         * @return {Promise<Bubble, Error>} 
         * @fulfil {Bubble} - The bubble removed, else an Error object
         * @category async
         */
        async deleteBubble(bubble) {
            var that = this;
            await that.closeBubble(bubble);
            await that._endUserRoomsApi.deleteRoom(bubble.id, this._accept).then((data) => {
                that._logger.exit('deleteBubble. Returned data: ' + data);
                return data;
            }, (error) => {
                that._logger.exitWithError('deleteBubble. Returned data: ' + JSON.stringify(error));
                throw new Error(error);
            });
        }

        /**
         * @public
         * @method closeBubble
         * @instance
         * @param {Bubble} bubble The Bubble to close
         * @memberof Bubbles
         * @description
         *  Close a owned bubble. When the owner closes a bubble, the bubble is archived and only accessible in read only mode for all participants.
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble closed, else an Error object
         * @category async
         */
        closeBubble(bubble) {
            var that = this;
            let unsubscribeParticipants = (participantsIDList) => {
                return new Promise((resolve, reject) => {
                    var participantID = participantsIDList.shift();
                    if (participantID) {
                        return that.removeContactFromBubble({ id: participantID }, bubble).then(() => {
                            that._logger.debug(LOG_ID + "(closeBubble) Participant " + participantID + " unsubscribed");
                            return unsubscribeParticipants(participantsIDList).then(() => {
                                resolve();
                            }).catch((err) => {
                                reject(err);
                            });
                        }).catch((err) => {
                            reject(err);
                        });
                    }
                    resolve();
                });
            };

            return new Promise(function(resolve, reject) {
                that._logger.debug(LOG_ID + "(closeBubble) _entering_");

                if (!bubble) {
                    that._logger.warn(LOG_ID + "(closeBubble) bad or empty 'bubble' parameter", bubble);
                    that._logger.debug(LOG_ID + "(closeBubble) _exiting_");
                    reject(ErrorCase.BAD_REQUEST);
                    return;
                } else if (that.isBubbleClosed(bubble)) {
                    that._logger.info(LOG_ID + "(closeBubble) bubble is already closed", bubble);
                    resolve(bubble);
                } else {
                    var queue = [];
                    bubble.users.forEach(function(user) {
                        if (user.userId !== that._rest.userId) {
                            // unsubscribe everyone except the connected user
                            queue.push(user.userId);
                        }
                    });

                    // unsubscribe the connected user
                    queue.push(that._rest.userId);

                    unsubscribeParticipants(queue).then(() => {
                        that._logger.info(LOG_ID + "(closeBubble) all users have been unsubscribed from bubble. Bubble is closed");
                        that._endUserRoomsApi.getRoomById(bubble.id, that._accept, { format: 'small' }).then(function(bubbleUpdated) {
                            // Update the existing local bubble stored
                            var foundIndex = that._bubbles.findIndex(bubbleItem => bubbleItem.id === bubbleUpdated.id);
                            if (foundIndex > -1) {
                                bubbleUpdated = Object.assign(that._bubbles[foundIndex], bubbleUpdated);
                                that._bubbles[foundIndex] = bubbleUpdated;
                            } else {
                                that._logger.warn(LOG_ID + "(closeBubble) bubble with id:" + bubbleUpdated.id + " is no more available");
                            }
                            that._logger.debug(LOG_ID + "(closeBubble) _exiting_");
                            resolve(bubbleUpdated);
                        });
                    }).catch((err) => {
                        reject(err);
                    });
                }
            });
        }

        /**
         * @public
         * @method leaveBubble
         * @instance
         * @param {Bubble} bubble  The bubble to leave
         * @memberof Bubbles
         * @description
         *  Leave a bubble. If the connected user is a moderator, an other moderator should be still present in order to leave this bubble.
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The operation result
         * @category async
         */
        leaveBubble(bubble) {
            var that = this;
            return new Promise(function(resolve, reject) {
                that._logger.enter(LOG_ID + "(leaveBubble)");
                var otherModerator = null;
                if (bubble) {
                    otherModerator = bubble.users.find((user) => {
                        return user.privilege === "moderator" && user.status === "accepted" && user.userId !== that._connectedUserInfo.id;
                    });
                }
                if (!bubble) {
                    that._logger.warn(LOG_ID + "(leaveBubble) bad or empty 'bubble' parameter", bubble);
                    that._logger.debug(LOG_ID + "(leaveBubble) _exiting_");
                    reject(ErrorCase.BAD_REQUEST);
                    return;
                } else if (!otherModerator) {
                    that._logger.warn(LOG_ID + "(leaveBubble) can't leave a bubble if no other active moderator");
                    that._logger.debug(LOG_ID + "(leaveBubble) _exiting_");
                    reject(ErrorCase.FORBIDDEN);
                    return;
                }

                var userId = that._connectedUserInfo.id;
                that._endUserRoomsUsersApi.removeUserFromRoom(bubble.id, userId, that._accept).then(function(responseBody) {
                    that._logger.exit('leaveBubble :' + JSON.stringify(responseBody.data));
                    resolve(responseBody.data);
                }, function(error) {
                    that._logger.error(LOG_ID + "(leaveBubble) :" + JSON.stringify(error));
                    reject(error);
                });
            });
        }

        /**
         * @public
         * @method inviteContactToBubble
         * @instance
         * @param {Contact} contact         The contact to invite
         * @param {Bubble} bubble           The bubble
         * @param {boolean} isModerator     True to add a contact as a moderator of the bubble
         * @param {boolean} withInvitation  If true, the contact will receive an invitation and will have to accept it before entering the bubble. False to force the contact directly in the bubble without sending an invitation.
         * @param {string} reason        The reason of the invitation (optional)
         * @memberof Bubbles
         * @description
         *  Invite a contact in a bubble
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble updated with the new invitation
         * @category async
         */
        inviteContactToBubble(contact, bubble, isModerator, withInvitation, reason) {
            let that = this;
            let that = this;
            return new Promise(function(resolve, reject) {
                that.logger.enter(LOG_ID + "(inviteContactToBubble)");
                let body = new RainbowEnduserPortal.UpdateUserData();
                body.privilege = asModerator ? "moderator" : "user";
                body.status = withInvitation ? "invited" : "accepted";
                that._endUserRoomsUsersApi.updateUserData(bubble.id, contact.id, body).then((data) => {
                    that.logger.exit(LOG_ID + "(inviteContactToBubble) successfull :" + JSON.stringify(data));
                    resolve(data);
                }, function(error) {
                    that.logger.exitWithError(LOG_ID + "(inviteContactToBubble) :" + JSON.stringify(error));
                    reject(error);
                }).catch(function(error) {
                    that.logger.exitWithError(LOG_ID + "(inviteContactToBubble) :" + JSON.stringify(error));
                    reject(error);
                });
            });
        }

        /**
         * @public
         * @method promoteContactInBubble
         * @instance
         * @param {Contact} contact         The contact to promote or downgraded
         * @param {Bubble} bubble           The bubble
         * @param {boolean} isModerator     True to promote a contact as a moderator of the bubble, and false to downgrade
         * @memberof Bubbles
         * @description
         *  Promote or not a contact in a bubble
         *  The logged in user can't update himself. As a result, a 'moderator' can't be downgraded to 'user'. 
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble updated with the modifications
         * @category async
         */
        promoteContactInBubble(contact, bubble, isModerator) {
            let that = this;
            return new Promise(function(resolve, reject) {
                that.logger.enter(LOG_ID + "(promoteContactInBubble)");
                let body = new RainbowEnduserPortal.UpdateUserData();
                body.privilege = isModerator ? "moderator" : "user";
                that._endUserRoomsUsersApi.updateUserData(bubble.id, contact.id, body).then((data) => {
                    that.logger.exit(LOG_ID + "(promoteContactInBubble) successfull :" + JSON.stringify(data));
                    resolve(data);
                }, function(error) {
                    that.logger.exitWithError(LOG_ID + "(promoteContactInBubble) :" + JSON.stringify(error));
                    reject(error);
                }).catch(function(error) {
                    that.logger.exitWithError(LOG_ID + "(promoteContactInBubble) :" + JSON.stringify(error));
                    reject(error);
                });
            });
        }

        /**
         * @public
         * @method changeBubbleOwner
         * @instance
         * @param {Contact} contact         The contact to set a new bubble owner
         * @param {Bubble} bubble           The bubble
         * @memberof Bubbles
         * @description
         *  Set a moderator contact as owner of a bubble
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble updated with the modifications
         * @category async
         */
        changeBubbleOwner(bubble, contact) {
            let that = this;
            return new Promise(function(resolve, reject) {
                var body = new RainbowEnduserPortal.UpdateRoomCustomData();
                body.customData = { "owner": contact.id };
                that._endUserRoomsCustomDataApi.updateRoomCustomData(bubble.id, body).then((data) => {
                    that._logger.exit('changeBubbleOwner called successfully. Returned data: ' + JSON.stringify(data));
                    resolve(data);
                }, (error) => {
                    that.logger.exitWithError(LOG_ID + "(changeBubbleOwner) :" + JSON.stringify(error));
                    reject(error);
                }).catch((error) => {
                    that.logger.exitWithError(LOG_ID + "(changeBubbleOwner) :" + JSON.stringify(error));
                    reject(error);
                });
            });
        }

        /**
         * @public
         * @method removeContactFromBubble
         * @instance
         * @param {Contact} contact The contact to remove
         * @param {Bubble} bubble   The destination bubble
         * @memberof Bubbles
         * @description
         *    Remove a contact from a bubble
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble object or an error object depending on the result
         * @category async
         */
        removeContactFromBubble(contact, bubble) {
            var that = this;
            that._logger.enter(LOG_ID + "(removeContactFromBubble)");
            return new Promise(function(resolve, reject) {

                if (!contact) {
                    that._logger.warn(LOG_ID + "(removeContactFromBubble) bad or empty 'contact' parameter", contact);
                    that._logger.exit(LOG_ID + "(removeContactFromBubble)");
                    reject(ErrorCase.BAD_REQUEST);
                    return;
                } else if (!bubble) {
                    that._logger.warn(LOG_ID + "(removeContactFromBubble) bad or empty 'bubble' parameter", bubble);
                    that._logger.exit(LOG_ID + "(removeContactFromBubble)");
                    reject(ErrorCase.BAD_REQUEST);
                    return;
                }

                var contactStatus = "";

                bubble.users.forEach(function(user) {
                    if (user.userId === contact.id) {
                        contactStatus = user.status;
                    }
                });

                that._logger.info(LOG_ID + "(removeContactFromBubble) remove contact with status", contactStatus);
                switch (contactStatus) {
                    case "rejected":
                    case "invited":
                    case "unsubscribed":
                        that._endUserRoomsUsersApi.removeUserFromRoom(bubble.id, contact.id, that._accept).then((data) => {
                            console.log('User successfully removed from room : ' + JSON.stringify(data));
                            that._endUserRoomsApi.getRoomById(bubble.id, that._accept, { format: 'full' }).then((roomData) => {
                                // Update the existing local bubble stored
                                let foundIndex = that._bubbles.findIndex(bubbleItem => bubbleItem.id === roomData.id);
                                if (foundIndex > -1) {
                                    roomData = Object.assign(that._bubbles[foundIndex], roomData);
                                    that._bubbles[foundIndex] = roomData;
                                } else {
                                    that._logger.warn(LOG_ID + "(removeContactFromBubble) bubble with id:" + roomData.id + " is no more available");
                                }
                                that._logger.exit(LOG_ID + "(removeContactFromBubble)");
                                resolve(roomData);
                            });
                        }, (error) => {
                            console.error(error);
                        }).catch(function(err) {
                            that._logger.log("error", LOG_ID + "(removeContactFromBubble) error", err);
                            that._logger.debug(LOG_ID + "(removeContactFromBubble) _exiting_");
                            reject(err);
                        });
                        break;
                    case "accepted":
                        that._logger.debug(LOG_ID + "(removeContactFromBubble) unsubcribing user ...");
                        that._updateBubleStatus(bubble.id, 'unsubscribed').then((data) => {
                            resolve(data);
                        }, (error) => {
                            that._logger.exitWithError(LOG_ID + "(removeContactFromBubble) :" + JSON.stringify(error));
                        }).catch(function(err) {
                            that._logger.exitWithError(LOG_ID + "(removeContactFromBubble) :" + JSON.stringify(error));
                            that._logger.debug(LOG_ID + "(removeContactFromBubble) _exiting_");
                            reject(err);
                        });
                        break;
                    default:
                        that._logger.warn(LOG_ID + "(removeContactFromBubble) contact not found in that bubble");
                        that._logger.exit(LOG_ID + "(removeContactFromBubble)");
                        resolve(bubble);
                        break;
                }
            });
        }

        /**
         * @private
         * @description
         *      Internal method
         */
        getBubbles() {
            var that = this;
            this._logger.enter('getBubbles');
            return this.getAll();
        }

        /**
         * @public
         * @method getAll
         * @instance
         * @return {Bubble[]} The list of existing bubbles
         * @memberof Bubbles
         * @description
         *  Return the list of existing bubbles
         */
        getAll() {
            var that = this;
            let getSetOfBubbles = (page, max, bubbles) => {
                return new Promise((resolve, reject) => {
                    let userId = this._connectedUserInfo.id;
                    let opts = { offset: page, limit: max, userId: userId, format: 'small' };
                    this._endUserRoomsApi.getRooms(this._accept, opts).then(function(responseBody) {
                        bubbles = bubbles.concat(responseBody.data);
                        that._logger.info(`got ${bubbles.length} bubbles `);
                        resolve({ bubbles: bubbles, finished: bubbles.length === responseBody.total });
                    }, function(error) {
                        that._logger.exitWithError('failed to get bubbles:' + JSON.stringify(error));
                        reject(error);
                    }).catch(function(err) {
                        reject(err);
                    });
                });
            };

            let getAllBubbles = function(page, limit, bubbles) {
                let that = this;
                return new Promise((resolve, reject) => {
                    getSetOfBubbles(page, limit, bubbles).then((data) => {
                        if (data.finished) {
                            //that._logger.info(LOG_ID + "(getAllBubbles) no need to loop again. All bubbles retrieved...");
                            return resolve(data.bubbles);
                        }
                        page += limit;
                        //that._logger.info(LOG_ID + "(getAllBubbles) need another loop to get more bubbles... [" + data.bubbles.length + "]");
                        getAllBubbles(page, limit, data.bubbles).then((bubbles) => {
                            resolve(bubbles);
                        }).catch((err) => {
                            reject(err);
                        });
                    }).catch((err) => {
                        reject(err);
                    });
                });
            };

            return new Promise(function(resolve, reject) {
                //let that = this;
                //that._logger.debug(LOG_ID + "(getBubbles)");
                let page = 0;
                let limit = 100;
                getAllBubbles(page, limit, []).then((json) =>  {
                    //that._logger.exit(LOG_ID + "(getBubbles) received " + json.length + " bubbles");
                    resolve(json);
                }).catch((err) => {
                    //that._logger.error(LOG_ID, "(getBubbles) error", err);
                    reject(err);
                });
            });
        }

        /**
         * @public
         * @method getAllBubbles
         * @instance
         * @return {Bubble[]} The list of existing bubbles
         * @memberof Bubbles
         * @description
         *  Return the list of existing bubbles
         */
        getAllBubbles() {
            return this.getAll();
        }

        /**
         * @public
         * @method getAllOwnedBubbles
         * @instance
         * @description
         *    Get the list of bubbles created by the user <br/>
         * @return {Bubble[]} An array of bubbles restricted to the ones owned by the user
         */
        getAllOwnedBubbles() {
            let that = this;
            that._logger.enter(LOG_ID + "(getAllOwnedBubbles) ");
            var res = that._bubbles.filter(function(room) {
                return (room.creator === that._connectedUserInfo.id);
            });
            that._logger.exit(LOG_ID + "(getAllOwnedBubbles)");
        }

        /**
         * @public
         * @method getBubbleById
         * @instance
         * @param {string} id the id of the bubble
         * @async
         * @return {Promise<Bubble>}  return a promise with {Bubble} The bubble found or null
         * @memberof Bubbles
         * @description
         *  Get a bubble by its ID in memory and if it is not found in server.
         */
        getBubbleById(id) {
            let that = this;
            return new Promise((resolve, reject) => {
                that._endUserRoomsApi.getRoomById(id, that._accept, { format: 'full' }).then((roomData) => {
                    // Update the existing local bubble stored                
                    that._logger.exit(LOG_ID + "(getBubbleById)");
                    resolve(roomData);
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(getBubbleById)");
                    reject(error);
                }).catch((error) => {
                    that._logger.exitWithError(LOG_ID + "(getBubbleById) :" + JSON.stringify(error));
                    reject(error);
                });
            });
        }

        /**
         * @public
         * @method getBubbleByJid
         * @instance
         * @param {string} jid the JID of the bubble
         * @async
         * @return {Promise<Bubble>}  return a promise with {Bubble} The bubble found or null
         * @memberof Bubbles
         * @description
         *  Get a bubble by its JID in memory and if it is not found in server.
         */
        getBubbleByJid(jid) {
            let that = this;
            return new Promise((resolve, reject) => {
                that._endUserRoomsApi.getRoomByJid(jid, that._accept, { format: 'full' }).then((roomData) => {
                    // Update the existing local bubble stored                
                    that._logger.exit(LOG_ID + "(getBubbleByJid)");
                    resolve(roomData);
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(getBubbleByJid)");
                    reject(error);
                }).catch((error) => {
                    that._logger.exitWithError(LOG_ID + "(getBubbleByJid) :" + JSON.stringify(error));
                    reject(error);
                });
            });
        }

        /**
         * @public
         * @method getAllPendingBubbles get all bubles in witch use is invited and invitation not accepted
         * @instance
         * @return {Bubble[]} An array of Bubbles not accepted or declined
         * @description
         *  Get the list of Bubbles that have a pending invitation not yet accepted of declined
         * @memberof Bubbles
         */
        getAllPendingBubbles() {
            let that = this;
            let pendingBubbles = this._bubbles.filter((bubble) => {
                let invitation = bubble.users.filter((user) => {
                    return (user.userId === that._connectedUserInfo.id && user.status === "invited");
                });
                return invitation;
            });
            return pendingBubbles;
        }

        /**
         * @public
         * @method getAllActiveBubbles
         * @since 1.30
         * @instance
         * @return {Bubble[]} An array of Bubbles that are "active" for the connected user
         * @description
         *  Get the list of Bubbles where the connected user can chat
         * @memberof Bubbles
         */
        getAllActiveBubbles() {
            let that = this;
            let activeBubbles = this._bubbles.filter((bubble) => {
                let amIActive = bubble.users.find((user) => {
                    return (user.userId === that._connectedUserInfo.id && user.status === "accepted");
                });
                return amIActive;
            });
            return activeBubbles;
        }

        /**
         * @public
         * @method getAllClosedBubbles
         * @since 1.30
         * @instance
         * @return {Bubble[]} An array of Bubbles that are closed for the connected user
         * @description
         *  Get the list of Bubbles where the connected user can only read messages
         * @memberof Bubbles
         */
        getAllClosedBubbles() {
            let that = this;
            let closedBubbles = this._bubbles.filter((bubble) => {
                let amIAway = bubble.users.find((user) => {
                    return (user.userId === that._connectedUserInfo.id && user.status === "unsubscribed");
                });
                return amIAway;
            });
            return closedBubbles;
        }

        /**
         * @public
         * @method acceptInvitationToJoinBubble
         * @instance
         * @param {Bubble} bubble The Bubble to join
         * @description
         *  Accept an invitation to join a bubble
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble updated or an error object depending on the result
         * @category async
         */
        acceptInvitationToJoinBubble(bubble) {
            let that = this;
            this._logger.enter(LOG_ID + "(acceptInvitationToJoinBubble)");
            if (!bubble) {
                this._logger.debug(LOG_ID + "(acceptInvitationToJoinBubble) bad or empty 'bubble' parameter", bubble);
                return Promise.reject(ErrorCase.BAD_REQUEST);
            }

            return new Promise((resolve, reject) => {
                that._updateBubleStatus(bubble, 'accepted').then((data) => {
                    that._logger.debug(LOG_ID + "(acceptInvitationToJoinBubble) called successfully : Returned data :" + JSON.stringify(data));
                    that.getBubble(bubble.id).then((bubbleUpdated) => {
                        // Update the existing local bubble stored
                        var foundIndex = that._bubbles.findIndex(bubbleItem => bubbleItem.id === bubbleUpdated.id);
                        if (foundIndex > -1) {
                            bubbleUpdated = Object.assign(that._bubbles[foundIndex], bubbleUpdated);
                            that._bubbles[foundIndex] = bubbleUpdated;
                        } else {
                            that._logger.warn(LOG_ID + "(acceptInvitationToJoinBubble) bubble with id:" + bubbleUpdated.id + " is no more available");
                        }
                        resolve(bubbleUpdated);
                        that._logger.exit(LOG_ID + "(acceptInvitationToJoinBubble)");
                    });
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(acceptInvitationToJoinBubble) :" + JSON.stringify(error));
                    reject(error);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(acceptInvitationToJoinBubble) error :" + JSON.stringify(error));
                    reject(err);
                });
            });
        }

        /**
         * @public
         * @method declineInvitationToJoinBubble
         * @instance
         * @param {Bubble} bubble The Bubble to decline
         * @description
         *  Decline an invitation to join a bubble
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble updated or an error object depending on the result
         * @category async
         */
        declineInvitationToJoinBubble(bubble) {
            let that = this;
            return new Promise((resolve, reject) => {
                that._updateBubleStatus(bubble.id, 'decine').then((bubbleUpdated) => {
                    resolve(bubbleUpdated);
                    that._logger.exit(LOG_ID + "(declineInvitationToJoinBubble)");
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(declineInvitationToJoinBubble) :" + JSON.stringify(error));
                    reject(error);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(declineInvitationToJoinBubble) error :" + JSON.stringify(error));
                    reject(err);
                });
            });
        }

        /**
         * @public
         * @method setBubbleCustomData
         * @instance
         * @param {Bubble} bubble The Bubble
         * @param {Object} customData Bubble's custom data area. key/value format. Maximum and size are server dependent
         * @description
         *  Modify all custom data at once in a bubble
         *  To erase all custom data, put {} in customData
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The bubble updated with the custom data set or an error object depending on the result
         * @category async
         */
        setBubbleCustomData(bubble, customData) {
            let that = this;
            that._logger.enter(LOG_ID + "(setBubbleCustomData) customData=" + JSON.stringify(customData));
            return new Promise((resolve, reject) => {
                var body = new RainbowEnduserPortal.UpdateRoomCustomData(); // UpdateRoomCustomData ;
                body.customData = customData;
                return that._endUserRoomsCustomDataApi.updateRoomCustomData(bubble.id, body).then((data) => {
                    that._logger.exit(LOG_ID + "(setBubbleCustomData) " + JSON.stringify(data));
                    resolve(data);
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleCustomData) error :" + JSON.stringify(error));
                    reject(err);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleCustomData) error :" + JSON.stringify(err));
                    reject(err);
                });
            });
        }

        /**
         * @private
         * @method setBubbleVisibilityStatus
         * @instance
         * @param {Bubble} bubble The Bubble
         * @param {string} visibility Bubble's public/private group visibility for search.  Either "private" (default) or "public"
         * @description
         *  Set the Bubble's visibility
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The Bubble full data or an error object depending on the result
         * @category async
         */
        setBubbleVisibilityStatus(bubble, visibility) {
            let that = this;
            that._logger.enter(LOG_ID + "(setBubbleVisibilityStatus) visibility=" + visibility);
            return new Promise((resolve, reject) => {
                var body = new RainbowEnduserPortal.UpdateRoom(); // UpdateRoom | 
                body.visibility = visibility;
                that._endUserRoomsApi.updateRoom(bubble.id, body).then(function(data) {
                    that._logger.exit(LOG_ID + "(setBubbleVisibilityStatus) " + JSON.stringify(data));
                    resolve(data);
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleVisibilityStatus) error :" + JSON.stringify(error));
                    reject(err);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleVisibilityStatus) error :" + JSON.stringify(err));
                    reject(err);
                });
            });
        }

        /**
         * @public
         * @method setBubbleTopic
         * @instance
         * @param {Bubble} bubble The Bubble
         * @param {string} topic Bubble's topic
         * @description
         *  Set the Bubble's topic
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The Bubble full data or an error object depending on the result
         * @category async
         */
        setBubbleTopic(bubble, topic) {
            let that = this;
            that._logger.enter(LOG_ID + "(setBubbleTopic) topic=" + topic);
            return new Promise((resolve, reject) => {
                var body = new RainbowEnduserPortal.UpdateRoom(); // UpdateRoom | 
                body.topic = topic;
                that._endUserRoomsApi.updateRoom(bubble.id, body).then(function(data) {
                    that._logger.exit(LOG_ID + "(setBubbleTopic) " + JSON.stringify(data));
                    resolve(data);
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleTopic) error :" + JSON.stringify(error));
                    reject(err);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleTopic) error :" + JSON.stringify(err));
                    reject(err);
                });
            });
        }

        /**
         * @public
         * @method setBubbleName
         * @instance
         * @param {Bubble} bubble The Bubble
         * @param {string} topic Bubble's name
         * @description
         *  Set the Bubble's name
         * @memberof Bubbles
         * @async
         * @return {Promise<Bubble, Error>}
         * @fulfil {Bubble} - The Bubble full data or an error object depending on the result
         * @category async
         */
        setBubbleName(bubble, name) {
            let that = this;
            that._logger.enter(LOG_ID + "(setBubbleName) name=" + name);
            return new Promise((resolve, reject) => {
                var body = new RainbowEnduserPortal.UpdateRoom(); // UpdateRoom | 
                body.name = name;
                that._endUserRoomsApi.updateRoom(bubble.id, body).then(function(data) {
                    that._logger.exit(LOG_ID + "(setBubbleName) " + JSON.stringify(data));
                    resolve(data);
                }, (error) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleName) error :" + JSON.stringify(error));
                    reject(err);
                }).catch((err) => {
                    that._logger.exitWithError(LOG_ID + "(setBubbleName) error :" + JSON.stringify(err));
                    reject(err);
                });
            });
        }

        /**
         * @private
         * @method _sendInitialBubblePresence
         * @instance
         * @param {Bubble} bubble The Bubble
         * @memberof Bubbles
         * @description
         *      Method called when receiving an invitation to join a bubble
         */
        _sendInitialBubblePresence(bubble) {}

        /**
         * @private
         * @method _onInvitationReceived
         * @instance
         * @param {Object} invitation contains informations about bubble and user's jid
         * @memberof Bubbles
         * @description
         *      Method called when receiving an invitation to join a bubble
         */
        _onInvitationReceived(invitation) {
            let that = this;
        }

        /**
         * @private
         * @method _onAffiliationChanged
         * @instance
         * @param {Object} affiliation contains information about bubble and user's jid
         * @memberof Bubbles
         * @description
         *      Method called when affilitation to a bubble changed
         */
        _onAffiliationChanged(affiliation) {
            let that = this;
        }

        /**
         * @private
         * @method _onOwnAffiliationChanged
         * @instance
         * @param {Object} affiliation contains information about bubble and user's jid
         * @memberof Bubbles
         * @description
         *      Method called when the user affilitation to a bubble changed
         */
        _onOwnAffiliationChanged(affiliation) {
            let that = this;
        }

        /**
         * @private
         * @method _onCustomDataChanged
         * @instance
         * @param {Object} data contains information about bubble and new custom data received
         * @memberof Bubbles
         * @description
         *      Method called when custom data have changed for a bubble
         */
        _onCustomDataChanged(data) {
            let that = this;

            this.getBubbleById(data.bubbleId).then((bubbleUpdated) => {
                that._logger.debug(LOG_ID + "(_onCustomDataChanged) Custom data changed for bubble", bubbleUpdated.name + " | " + data.customData);
                // Update the existing local bubble stored
                var foundIndex = that._bubbles.findIndex(bubbleItem => bubbleItem.id === bubbleUpdated.id);
                if (foundIndex > -1) {
                    bubbleUpdated = Object.assign(that._bubbles[foundIndex], bubbleUpdated);
                    that._bubbles[foundIndex] = bubbleUpdated;
                } else {
                    bubbleUpdated = Object.assign(new Bubble(), bubbleUpdated);
                    that._bubbles.push(bubbleUpdated);
                }
                that._eventEmitter.emit("rainbow_bubblecustomDatachanged", bubbleUpdated);
            });
        }

        /**
         * @private
         * @method _onTopicChanged
         * @instance
         * @param {Object} data contains information about bubble new topic received
         * @memberof Bubbles
         * @description
         *      Method called when the topic has changed for a bubble
         */
        _onTopicChanged(data) {
            let that = this;
        }

        /**
         * @private
         * @method _onNameChanged
         * @instance
         * @param {Object} data contains information about bubble new name received
         * @memberof Bubbles
         * @description
         *      Method called when the name has changed for a bubble
         */
        _onNameChanged(data) {
            let that = this;
        }

        /**
         * @private
         * @method _onbubblepresencechanged
         * @instance
         * @param {Object} data contains information about bubble
         * @memberof Bubbles
         * @description
         *      Method called when the name has changed for a bubble
         */
        _onbubblepresencechanged(bubbleInfo) {
            let that = this;
            that._logger.debug(LOG_ID + "(_onbubblepresencechanged) bubble presence received for : ", bubbleInfo.jid);
            // Find the bubble in service list, and else retrieve it from server.
            that.getBubbleByJid(bubbleInfo.jid).then((bubbleInfo) => {
                that._logger.debug(LOG_ID + "(_onbubblepresencechanged) bubble found in memory : ", bubbleInMemory.jid);
                if (bubbleInfo.statusCode === "resumed") {
                    that.sendInitialBubblePresence(bubbleInfo.jid).then(() => {
                        bubbleInMemory.isActive = true;
                        that._eventEmitter.emit("rainbow_onbubblepresencechanged", bubbleInMemory);
                    });
                }
                if (bubbleInfo.statusCode === "deactivated") {
                    bubbleInMemory.isActive = false;
                    that._eventEmitter.emit("rainbow_onbubblepresencechanged", bubbleInMemory);
                }
            }, (error) => {
                that._logger.exitWithError(LOG_ID + "(_onbubblepresencechanged) bubble presence received for : " + JSON.stringify(error));
            }).catch((error) => {
                that._logger.exitWithError(LOG_ID + "(_onbubblepresencechanged) bubble presence received for : " + JSON.stringify(error));
            });
        }
    }
    return BubbleService;
}));