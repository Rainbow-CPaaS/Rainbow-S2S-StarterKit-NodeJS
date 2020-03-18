(function(factory) {
    module.exports = factory(require('./../rest/client/s2s/src'), require('./../../common/utils'));
}(function(S2SApi, Utils) {
    'use strict';
    //var RainbowEndUserPortal = require('./../rest/client/rainbow_enduser_portal/src');
    const _subscribeToEvents = Symbol('subscribeToEvents');
    const _onInvitationReceived = Symbol('onInvitationReceived');
    const _onMemberChanged = Symbol('onMemberChanged');
    const _onStateChanged = Symbol('onStateChanged');
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
            s2sClient,
            eventModule) {
            this._accept = accept;
            this._logger = logger;
            this._connectedUserInfo = connectedUserInfo;
            this._connectionInfo = connectionInfo;
            this._eventModule = eventModule;
            this._bubbles = [];
            this._s2sRoomApi = new S2SApi.RoomApi(s2sClient);
            //this[_subscribeToEvents]();
        }

        [_subscribeToEvents]() {
            let that = this;
            this._logger.enter(that, '_subscribeToEvents');
            this._eventModule.on("rainbow_onbubbleinvitationreceived", this[_onInvitationReceived].bind(this));
            this._eventModule.on("rainbow_onbubblememberchanged", this[_onMemberChanged].bind(this));
            this._eventModule.on("rainbow_onbubblestatechanged", this[_onStateChanged].bind(this));
            this._logger.exit(that, '_subscribeToEvents');
            /*
            this._eventEmitter.on("rainbow_invitationreceived", this._onInvitationReceived.bind(this));
            this._eventEmitter.on("rainbow_affiliationchanged", this._onAffiliationChanged.bind(this));
            this._eventEmitter.on("rainbow_ownaffiliationchanged", this._onOwnAffiliationChanged.bind(this));
            this._eventEmitter.on("rainbow_customdatachanged", this._onCustomDataChanged.bind(this));
            this._eventEmitter.on("rainbow_topicchanged", this._onTopicChanged.bind(this));
            this._eventEmitter.on("rainbow_namechanged", this._onNameChanged.bind(this));
            */
        }

        /**
         * Starts Bubble Service
         */
        async start() {
            let that = this;
            this[_subscribeToEvents]();
            return true;
        }

        /**
         * Stop bubble servce
         */
        async stop() {
            that._bubbles = [];
            return true;
        }

        /**
         * Join a room givvenits Id
         * @param {string} roomId the room Id
         * @return {RoomStatus} a data of type {@link module:model/RoomStatus} or false in case of failure
         */
        async joinRoom(roomId){            
            let that = this;
            this._logger.enter(that,`joinRoom(${roomId})`);
            var cnxId = this._connectionInfo.id;
            await this._s2sRoomApi.roomJoin(cnxId, roomId).then(function(data) {
              var roomStatus = Utils.getJsonData(data);
              that._logger.enter(that,`joinRoom(${roomId})`,JSON.stringify(roomStatus,null,4));
              that._bubbles.push(roomId);
              return roomStatus;
            }, function(error) {
              console.error(error);
              that._logger.exitWithError(that, "joinRoom", JSON.stringify(ex, null, 4));
            }).catch((ex) =>{
                that._logger.exitWithError(that, "joinRoom", JSON.stringify(ex, null, 4));
            });
            return false;
        }

        async [_onInvitationReceived](data) {
            let that = this; 
            var invitation = Utils.getJsonData(data);    
            that._logger.enter(that, "_onInvitationReceived", JSON.stringify(invitation, null, 4));
            await that.joinRoom(invitation['room-invite']['id']);
        }

        [_onMemberChanged](memberData){
            let that = this;
            that._logger.info(that, "_onMemberChanged", JSON.stringify(memberData, null, 4));
        }

        [_onStateChanged](room){
            let that = this;
            that._logger.info(that, "_onStateChanged", JSON.stringify(room, null, 4));
        }        
    }
    return BubbleService;
}));
