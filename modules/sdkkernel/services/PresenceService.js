"use strict";

var StatusCode = require("../common/Error");
let RainbowPresence = require("../common/models/Settings").RainbowPresence;

var S2SApi = require('./../rest/client/s2s/src');
const LOG_ID = "PRES - ";

/**
 * @class
 * @name PresenceService
 * @description
 *      This module manages the presence of the connected user.
 *      <br><br>
 *      The main methods proposed in that module allow to: <br>
 *      - Change the connected user presence
 */
class PresenceService {

    constructor(_connectionInfo, _connectedUserInfo, _s2sPresenceApi, _eventEmitter, _logger) {
        let that = this;
        this._connectionInfo = _connectionInfo;
        this._connectedUserInfo = _connectedUserInfo;
        this._s2sPresenceApi = _s2sPresenceApi;
        this._eventEmitter = _eventEmitter;
        this._logger = _logger;

        that.manualState = false;
        that._currentPresence = { status: "online", show: "" };

        that.RAINBOW_PRESENCE_ONLINE = RainbowPresence.ONLINE;
        that.RAINBOW_PRESENCE_DONOTDISTURB = RainbowPresence.DND;
        that.RAINBOW_PRESENCE_AWAY = RainbowPresence.AWAY;
        that.RAINBOW_PRESENCE_INVISIBLE = RainbowPresence.INVISIBLE;
        try {
            //that._eventEmitter.on("rainbow_usersettingschanged", that._onUserSettingsChanged.bind(that));
            that._eventEmitter.on("rainbow_onpresencechanged", that._onPresenceChanged.bind(that));
        } catch (ex) {
            this._logger.error(this, "Presence", ex);
        }
    }

    /**
     * Start presence service
     */
    async start() {
        let that = this;
        try {
            that._logger.enter(this, LOG_ID + "Presence (start)");
            this._s2sPresenceApi.presence
            var cnxId = that._connectionInfo.id; // String | Connection id
            var userId = this._connectedUserInfo.id;
            //await that.setPresence('', '');
            await that._s2sPresenceApi.presenceShow(cnxId, userId).then(function(data) {
                that._logger.enter(this, LOG_ID + ' presenceShow :' + JSON.stringify(data, null, 4));
            }, function(error) {
                that._logger.exit(this, "get current user presence error", error);
            });
        } catch (ex) {
            that._logger.exit(this, LOG_ID + "Presence (start)", ex);
        }
        that._logger.exit(this, LOG_ID + "Presence (start)");
    }

    /**
     * Stop presence service
     */
    stop() {
        var that = this;
        that._logger.enter(this, LOG_ID + "Presence (stop)");
        try {
            that._eventEmitter.removeListener("rainbow_onpresencechanged", that._onPresenceChanged);
            //that._eventEmitter.removeListener("rainbow_usersettingschanged", that._onUserSettingsChanged);
        } catch (ex) {
            that._logger.exit(this, LOG_ID + "Presence (stop)", ex);
        }
        that._logger.exit(this, LOG_ID + "Presence (stop)");
    }

    /**
     * change current user presence
     * @param {*} show is the presence value [online, xa, dnd]
     * @param {*} status is the status message ( online, away, or "")
     */
    async setPresence(show, status) {
        let that = this;
        that._logger.enter(this, LOG_ID + "setPresence(" + show + "," + status + ")");
        return new Promise((resolve, reject) => {
            var cnxId = that._connectionInfo.id;
            var presence = S2SApi.Presence.constructFromObject({ status: status, show: show });
            var opts = {
                'presenceUpdate': new S2SApi.PresenceUpdate() // PresenceUpdate | Presence data
            };
            opts.presenceUpdate.presence = presence;
            this._s2sPresenceApi.presenceUpdate(cnxId, opts).then(() => {
                that._logger.exit(this, 'setPresence successfull.');
                resolve();
            }, (error) => {
                that._logger.exitWithError(this, 'setPresence :', error);
                reject(error);
            }).catch((error) => {
                that._logger.exitWithError(this, 'setPresence :', error);
                reject(error);
            });
        });
    }

    /**
     * @private
     * @method sendInitialPresence
     * @instance
     * @description
     *  Send the initial presence (online)
     * @return {StatusCode.Ok} A promise containing the result
     * @memberof Presence
     */
    sendInitialPresence() {
        var that = this;
        that._logger.enter(this, 'sendInitialPresence');
        return that.setPresence("", "");
    }

    /**
     * @public
     * @method setPresenceTo
     * @instance
     * @description
     *    Allow to change the presence of the connected user <br/>
     *    Only the following values are authorized: 'dnd', 'away', 'xa' (invisible) or 'online'
     * @param {String} presence The presence value to set i.e: 'dnd', 'away', 'xa' (invisible) or 'online'
     * @memberof Presence
     * @async
     * @return {Promise<StatusCode>}
     * @fulfil {StatusCode} - StatusCode object depending on the result (StatusCode.OK in case of success)
     * @category async
     */
    setPresenceTo(presence) {
        var that = this;
        var show = "online";
        var status = "";
        that._logger.enter(this, `${LOG_ID} setPresence(${presence})`);
        return new Promise((resolve, reject) => {
            switch (presence) {
                case "online":
                    show = "online";
                    status = "";
                    break;
                case "away":
                    show = "xa";
                    status = "away";
                    break;
                case "dnd":
                    show = "dnd";
                    status = "";
                    break;
                case "invisible":
                    show = "xa";
                    status = "";
                    break;
                default:
                    that._logger.log(this, "warn", LOG_ID + "(setPresenceTo) Bad or empty 'presence' parameter", presence);
                    reject(StatusCode.BAD_REQUEST);
                    break;
            }
            that._eventEmitter.once("rainbow_onpresencechanged", function fn_onpresencechanged(_presence) {
                that._logger.info(this, LOG_ID + "(setPresenceTo) received", _presence);
                that._logger.debug(this, LOG_ID + "(setPresenceTo) - _exiting_");
                that._eventEmitter.removeListener("rainbow_onpresencechanged", fn_onpresencechanged);
                resolve(StatusCode.OK);
            });
            that.setPresence(show, status).then(() => {
                resolve(StatusCode.OK);
            }, (error) => {
                that._logger.exit(this, LOG_ID + "(setPresenceTo) " + JSON.stringify(error));
                resolve(error);
            });
        });
    }

    /**
     * @private
     * @method _setUserPresenceStatus
     * @instance
     * @memberof Presence
     * @description
     *      Send user presence status and message to xmpp.
     */
    _setUserPresenceStatus(status, message) {
        let that = this;
        that._logger.enter(this, LOG_ID + "(setUserPresenceStatus)");
        return new Promise((resolve, reject) => {

            if (status === "online") {
                that.manualState = false;
                that._eventEmitter.once("rainbow_onpresencechanged", function fn_onpresencechanged(presence) {
                    that._logger.info(this, LOG_ID + "(_setUserPresenceStatus) received", presence);
                    that._logger.debug(this, LOG_ID + "(_setUserPresenceStatus)");
                    that._eventEmitter.removeListener("rainbow_onpresencechanged", fn_onpresencechanged);
                    resolve();
                });
                that.setPresence(null, status);
            } else {
                that.manualState = true;
                if (status === "away") {
                    that._eventEmitter.once("rainbow_onpresencechanged", function fn_onpresencechanged(presence) {
                        that._logger.info(this, LOG_ID + "(_setUserPresenceStatus) received", presence);
                        that._logger.debug(this, LOG_ID + "(_setUserPresenceStatus) - _exiting_");
                        that._eventEmitter.removeListener("rainbow_onpresencechanged", fn_onpresencechanged);
                        resolve(StatusCode.OK);
                    });
                    that.setPresence("away", message);
                } else if (status === "dnd") {
                    that._eventEmitter.once("rainbow_onpresencechanged", function fn_onpresencechanged(presence) {
                        that._logger.info(this, LOG_ID + "(_setUserPresenceStatus) received", presence);
                        that._logger.debug(this, LOG_ID + "(_setUserPresenceStatus) - _exiting_");
                        that._eventEmitter.removeListener("rainbow_onpresencechanged", fn_onpresencechanged);
                        resolve(StatusCode.OK);
                    });
                    that.setPresence("dnd", message);
                } else if (status === "xa") {
                    that._eventEmitter.once("rainbow_onpresencechanged", function fn_onpresencechanged(presence) {
                        that._logger.info(this, LOG_ID + "(_setUserPresenceStatus) received", presence);
                        that._logger.debug(this, LOG_ID + "(_setUserPresenceStatus) - _exiting_");
                        that._eventEmitter.removeListener("rainbow_onpresencechanged", fn_onpresencechanged);
                        resolve(StatusCode.OK);
                    });
                    that.setPresence("xa", message);
                } else {
                    let error = StatusCode.BAD_REQUEST();
                    reject(error);
                }
            }
            that._logger.exit(this, LOG_ID + "(setUserPresenceStatus)");
        });
    }


    /**
     * @private
     * @method _onPresenceChanged
     * @instance
     * @memberof Presence
     * @description
     *      Method called when receiving an update on user presence
     */
    _onPresenceChanged(presenceInfo) {
        let that = this;
        that._logger.enter(this, LOG_ID + "(_onPresenceChanged)", presenceInfo.presence.from);
        that._logger.enter(this, LOG_ID + "(_onPresenceChanged) : currentPresence", that._currentPresence);
        if (presenceInfo.presence.from === that._connectedUserInfo.id) {
            that._logger.info(this, LOG_ID + "(_onPresenceChanged) : current presence updated.");
            that._logger.enter(this, LOG_ID + "(_onPresenceChanged) : currentPresence", that._currentPresence);
            if (presenceInfo.presence.hasOwnProperty('status')) {
                that._currentPresence.status = presenceInfo.presence.status;
                that._currentPresence.show = presenceInfo.presence.show;
            }
        } else {
            that._logger.info(this, '(_onPresenceChanged) : ' + presenceInfo.presence.from + '!= ' + that._connectedUserInfo.id);
        }
        that._logger.exit(this, LOG_ID + "(_onPresenceChanged)");
    }
}

module.exports = PresenceService;
