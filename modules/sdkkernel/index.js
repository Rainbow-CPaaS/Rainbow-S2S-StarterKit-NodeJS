'use strict';

const fs = require('fs');
const path = require('path');
const jwt = require("jwt-decode");
const moment = require('moment');
const HttpServer = require('./webhook');
const NgrokService = require('./services/ngrok-service');
const BasicAuthCredsHelper = require('./services/basicauthcredshelper');

var RainbowAdminPortal = require('./rest/client/rainbow_admin_portal/src');
var RainbowEnduserPortal = require('./rest/client/rainbow_enduser_portal/src');
var RainbowAuthentPortal = require('./rest/client/rainbow_authent_portal/src');
var S2SApi = require('./rest/client/s2s/src');

/*
 * defaine private methods
 */
const _extractResponseSchemaData = Symbol('extractResponseSchemaData');
const _initializeRESTApiAndServices = Symbol('initialize');
const _signin = Symbol('signin');
const _signout = Symbol('signout');
const _signinRequired = Symbol('signinRequired');
const _createConnection = Symbol('createConnection');
const _setupAuthBearer = Symbol('setupAuthBearer');
const _setupUrlBasePath = Symbol('setupUrlBasePath');
const _sendSelfPresence = Symbol('sendSelfPresence');
const _closeAllUserConnectons = Symbol('closeAllUserConnectons');
const _subscribeToRainbowEvents = Symbol('subsctibeToRainbowEvents');
const _validateJWT = Symbol('validateJWT');
const _extractErrorResponse = Symbol('extractErrorResponse');
const _startTokenWatcher = Symbol('startTokenWatcher');
const _renewAuthToken = Symbol('renewAuthToken');
const _stopTokenWatcher = Symbol('stopTokenWatcher');
const _unbscribeFromRainbowEvents = Symbol('_unbscribeFromRainbowEvents');
const _startAllServices = Symbol('startAllServices');
const _stopAllServices = Symbol('stopAllServices');

const BubbleService = require('./services/BubbleService');
//const NotificationService = require('./services/Notifications');
//const CompanyService = require('./services/CompanyService');
//const ContactService = require('./services/ContactService');
const ImService = require('./services/ImService');
const ConversationService = require('./services/ConversationService');
const PresenceService = require('./services/PresenceService');
const BotService = require('./services/BotsService');

class SdkCore {

    constructor(options, logger, sdkinfo, eventsModule, stateManager) {
        this._started = false;
        this._sdkinfo = sdkinfo;
        this._eventsModule = eventsModule;
        this._stateManager = stateManager;
        this._url = '';
        this._httpServer = null;
        this._ngrokService = null;
        this.options = options;
        this._callback_url = '';
        this.applicationToken = ''; // should te take from redis
        this._tokenRenewMaxCount = 0;

        this._endUserPortalClient = RainbowEnduserPortal.ApiClient.instance;
        this._s2sClient = S2SApi.ApiClient.instance;
        this._authPortalClient = RainbowAuthentPortal.ApiClient.instance;
        this._adminPortalClient = RainbowAdminPortal.ApiClient.instance;

        this.__bubbleService = null;
        this._notificationService = null;
        this._companyService = null;
        this._conversationService = null;
        this._contactService = null;
        this._imService = null;
        this._presenceService = null;
        this._botService = null;

        this._authApiInstance = null;
        this._endUserConversationApi = null;
        this._endUserUsersApi = null;
        this._endUserContactApi = null;
        this._endUserInvitationApi = null;
        this._endUserAvatarApi = null;

        this._endUserRoomsApi = null;
        this._endUserRoomsAvatarApi = null;
        this._endUserRoomsConferenceApi = null;
        this._endUserRoomsCustomDataApi = null;
        this._endUserRoomsInvitationApi = null;
        this._endUserRoomsOpenInviteApi = null;
        this._endUserRoomsUsersApi = null;


        this._adminUserNetworkApi = null;
        this._s2sConnectionApi = null;
        this._s2sMessageApi = null;
        this._s2sPresenceApi = null;
        this._s2sRoomApi = null;
        this._s2sConversationApi = null;

        this._accept = "application/json";
        this._authOpts = {};
        this.logger = logger;
        this._basicAuthCredsHelper = new BasicAuthCredsHelper(this.options);
        this._connectionInfo = null;
        this._connectedUserInfo = null;
        this._renewTokenInterval = '';
        this._renewingToken = false;
        this._httpSettings = {};

        this._ngrokService = new NgrokService(this.options, this._eventsModule, this.logger);
        this._httpServer = new HttpServer(this.options, this._eventsModule, this.logger);

        // auth API must initialized first, it is needed to get Bearer Token 
        this[_setupUrlBasePath](this._authPortalClient);
        this._authApiInstance = new RainbowAuthentPortal.AuthenticationApi(this._authPortalClient);
    }

    /**
     * @private
     * configure default values [host] for the givven S2S API client.
     * @param {*} clientApi a client API to configure
     */
    [_setupUrlBasePath](clientApi) {
        var _this = this;
        clientApi.basePath = this.options.rainbow.host;
    }

    /**
     * @private
     * set authentication Bearer token for the givven client API.
     * @param {} clientApi 
     */
    [_setupAuthBearer](clientApi) {
        var that = this;
        var Bearer = clientApi.authentications['Bearer'];
        Bearer.apiKey = that.applicationToken;
        Bearer.apiKeyPrefix = 'Bearer';
    }

    /**
     * @private
     * extract useful data from http response body
     * @param {*} responseBody is the http response
     * @returns responseBody.data if the payload data is attached responseBody.data or retunrs responseBody itself.
     */
    [_extractResponseSchemaData](responseBody) {
        let res = {};
        try {
            this.logger.enter(this, '_unbscribeFromRainbowEvents', responseBody);
            res = (responseBody !== null && responseBody !== 'undefined' && responseBody.hasOwnProperty('data')) ? responseBody.data : responseBody;
        } catch (ex) {
            this.logger.error(this, '_extractResponseSchemaData :', ex);
        }
        return res;
    }

    [_extractErrorResponse](error) {
        return (error && (typeof error !== 'undefined')) ? { status: error.response.status, text: error.response.text } : {};
    }
    /**
     * Initialize all needed components
     */
    [_initializeRESTApiAndServices]() {
        var that = this;
        try {
            this._authOpts = {
                'xRainbowClient': that._sdkinfo.name, // String | the app used
                'xRainbowClientVersion': that._sdkinfo.version // String | 1.10.7
            };

            this._endUserConversationApi = new RainbowEnduserPortal.ConversationsApi(this._endUserPortalClient);
            this._endUserUsersApi = new RainbowEnduserPortal.UsersApi(this._endUserPortalClient);
            this._endUserContactApi = new RainbowEnduserPortal.ContactsApi(this._endUserPortalClient);
            this._endUserAvatarApi = new RainbowEnduserPortal.UsersAvatarApi(this._endUserPortalClient);
            this._endUserInvitationApi = new RainbowEnduserPortal.InvitationsApi(this._endUserPortalClient);

            this._botsApi = new RainbowEnduserPortal.BotsApi(this._endUserPortalClient);

            this._adminUserNetworkApi = new RainbowAdminPortal.UsersNetworksApi(this._adminPortalClient);

            this._s2sMessageApi = new S2SApi.MessageApi(this._s2sClient);
            this._s2sPresenceApi = new S2SApi.PresenceApi(this._s2sClient);
            this._s2sRoomApi = new S2SApi.RoomApi(this._s2sClient);
            this._s2sConversationApi = S2SApi.ConversationApi(this._s2sClient);

            this._bubbleService = new BubbleService(this.logger,
                this._connectedUserInfo,
                this._connectionInfo,
                this._accept,
                this._endUserPortalClient,
                this._s2sClient,
                this._eventsModule.iee
            );

            //this._notificationService = new NotificationService(this._endUserPortalClient);

            //this._companyService = new CompanyService(this._endUserPortalClient);
            this._conversationService = new ConversationService(this.logger,
                this._connectedUserInfo,
                this._connectionInfo,
                this._eventsModule.iee,
                this._accept,
                this._endUserConversationApi,
                this._s2sConversationApi
            );
            /*
                        this._contactService = new ContactService(
                            this._connectecUserInfo,
                            this._connectionInfo,
                            this._eventsModule.iee,
                            this.logger,
                            this._accept,
                            this._endUserUsersApi,
                            this._enUserContactApi,
                            this._endUserAvatarApi,
                            this._endUserInvitationApi,
                            this._adminUserNetworkApi
                        );
            */
            this._imService = new ImService(this._eventsModule.iee,
                this.logger,
                this._s2sMessageApi,
                this._connectedUserInfo,
                this._connectionInfo,
            );

            this._presenceService = new PresenceService(this._connectionInfo,
                this._connectedUserInfo,
                this._s2sPresenceApi,
                this._eventsModule.iee,
                this.logger);

            this._botService = new BotService(this._connectionInfo,
                this._connectedUserInfo,
                this._eventsModule.iee,
                this.logger,
                this._accept,
                this._botsApi);
        } catch (ex) {
            this.logger.exitWithError('_initializeRESTApiAndServices', ex);
            throw ex;
        }
    }

    [_startAllServices]() {}

    [_stopAllServices]() {

        /*
        this._bubbleService.stop();
        this._notificationService.stop();
        this._companyService.stop();
        this._conversationService.stop();
        this._contactService.stop();
        this._imService.stop();
        */
        this._conversationService.stop();
        this._presenceService.stop();

        //delete this._bubbleService;
        //delete this._notificationService;
        //delete this._companyService;
        //delete this._conversationService;
        //delete this._contactService;
        delete this._imService;
        delete this._presenceService;
        delete this._conversationService;

        delete this._endUserConversationApi;
        delete this._endUserUsersApi;
        delete this._endUserContactApi;
        delete this._endUserAvatarApi;
        delete this._endUserInvitationApi;

        delete this._adminUserNetworkApi;
        delete this._s2sConnectionApi;
        delete this._s2sMessageApi;
        delete this._s2sPresenceApi;
        delete this._s2sRoomApi;
        delete this._s2sConversationApi;
    }

    _rainbow_signinrequired_handler() {
        this.logger.info(this, 'SDKKernel -> rainbow_signinrequired received.');
        this[_signinRequired]();
    }

    _rainbow_application_token_updated_handler(token) {
        this.applicationToken = token; // shoud be taken from redis
        this.logger.info(this, 'SDKKernel -> rainbow_application_token_updated :', token);
    }

    _rainbow_onconnected_handler(data) {
        this.logger.info(this, 'SDKKernel -> rainbow_onconnected :', data);
    }

    _rainbow_onpresencechanged_handler(data) {
        this.logger.info(this, 'SDKKernel -> rainbow_onpresencechanged received :' + JSON.stringify(data));
    }

    _rainbow_tokenexpired_handler() {
        this._eventsModule.iee.emit("rainbow_signinrequired");
        this[_stopTokenWatcher]();
    }

    _rainbow_tokenrenewed_handler() {
        this._renewingToken = false;
    }

    /**
     * subscribe to all rainbow events
     */
    async [_subscribeToRainbowEvents]() {
        var that = this;
        try {
            this.logger.enter(this, '_subscribeToRainbowEvents');
            this._eventsModule.on("rainbow_signinrequired", this._rainbow_signinrequired_handler.bind(this));
            this._eventsModule.on("rainbow_application_token_updated", this._rainbow_application_token_updated_handler.bind(this));
            this._eventsModule.once("rainbow_onconnected", this._rainbow_onconnected_handler.bind(this));
            this._eventsModule.on("rainbow_onpresencechanged", this._rainbow_onpresencechanged_handler.bind(this));
            this._eventsModule.on("rainbow_tokenexpired", this._rainbow_tokenexpired_handler.bind(this));
            this._eventsModule.on("rainbow_tokenrenewed", this._rainbow_tokenrenewed_handler.bind(this));
            /*
            this._eventsModule.on("rainbow_signinrequired", function() {
                that.logger.info(this,'SDKKernel -> rainbow_signinrequired received.');
                that[_signinRequired]();
            });
            this._eventsModule.on("rainbow_application_token_updated", function(token) {
                that.applicationToken = token; // shoud be taken from redis
                that.logger.info(this,'SDKKernel -> rainbow_application_token_updated :', token);
            });
            this._eventsModule.once("rainbow_onconnected", function(data) {
                that.logger.info(this,'SDKKernel -> rainbow_onconnected :', data);
            });
            this._eventsModule.on("rainbow_onpresencechanged", function(data) {
                that.logger.info(this,'SDKKernel -> rainbow_onpresencechanged received :' + JSON.stringify(data));
            });
            this._eventsModule.on("rainbow_tokenexpired", function() {
                this._eventsModule.iee.emit("rainbow_signinrequired");
                [_stopTokenWatcher]();
            });
            this._eventsModule.on("rainbow_tokenrenewed", function() {
                that._renewingToken = false;
            });
            */
        } catch (ex) {
            that.logger.exit(this, '_subscribeToRainbowEvents', ex);
        }
        that.logger.exit(this, '_subscribeToRainbowEvents');
    }

    [_unbscribeFromRainbowEvents]() {
        var that = this;
        this.logger.enter(this, '_unbscribeFromRainbowEvents');
        try {
            this._eventsModule.removeListener("rainbow_signinrequired", this._rainbow_signinrequired_handler);
            this._eventsModule.removeListener("rainbow_application_token_updated", this._rainbow_application_token_updated_handler);
            this._eventsModule.removeListener("rainbow_onconnected", this._rainbow_onconnected_handler);
            this._eventsModule.removeListener("rainbow_onpresencechanged", this._rainbow_onpresencechanged_handler);
            this._eventsModule.removeListener("rainbow_tokenexpired", this._rainbow_tokenexpired_handler);
            this._eventsModule.removeListener("rainbow_tokenrenewed", this._rainbow_tokenrenewed_handler);
            this.logger.exit(this, '_unbscribeFromRainbowEvents');
        } catch (ex) {
            this.logger.exitWithError(this, '_unbscribeFromRainbowEvents', ex);
        }
    }
    async [_validateJWT]() {
        var that = this;
        that.logger.enter(this, '_validateJWT');
        await this._authPortalClient.getApiRainbowAuthenticationV10Validator(that._accept).then((responseData) => {
            let data = [_extractResponseSchemaData](responseData);
            that.logger.exit(this, '_validateJWT successfully. Returned data: ' + data);
        }, (error) => {
            that.logger.exitWithError(this, 'JWT validation failed ! Returned error: ' + JSON.stringify(error, null, 4));
            throw new Error('JWT validation failed');
        });
    }

    /**
     * @private
     * connect sdk engine to rainbow plateforme using provided token
     */
    async [_signin]() {
        var that = this;
        try {
            this.logger.enter(this, '[_signin]()');
            let authHeaders = this._basicAuthCredsHelper.genAuthParams4Header(this.options.credentials.login, this.options.credentials.password);
            this.logger.info(this, `authHeaders => ${JSON.stringify(authHeaders,null,4)}`);

            await this._authApiInstance.getBasicLogin(authHeaders.authorization, authHeaders.xRainbowAppAuth, that._accept, that._authOpts).then((data) => {
                that._connectedUserInfo = data.loggedInUser;
                //that.logger.debug(this,'Connected user info ', that._connectedUserInfo);
                that.logger.debug(this, 'Connected user info Token', that.applicationToken);
                that.applicationToken = data.token;
                that[_startTokenWatcher]();
                that.logger.debug(this, 'setting up Auth Portal Client ...');
                that[_setupAuthBearer](that._authPortalClient); // for later use
                that.logger.debug(this, 'setting up End User Portal Client ...');
                that[_setupUrlBasePath](that._endUserPortalClient);
                that[_setupAuthBearer](that._endUserPortalClient);
                that.logger.debug(this, 'setting up S2S Portal Client ...');
                that[_setupUrlBasePath](that._s2sClient);
                that[_setupAuthBearer](that._s2sClient);
                that.logger.debug(this, 'setting up Admin Portal Client ...');
                that[_setupUrlBasePath](that._adminPortalClient);
                that[_setupAuthBearer](that._adminPortalClient);
                //that.logger.exit(this,'_signin :login succeeded ! Returned data: ' + JSON.stringify(that._connectedUserInfo, null, 4));
                that.logger.exit(this, '_signin :login succeeded !');
                //that._stateManager.transitTo(that._stateManager.CONNECTED);
            }, (error) => {
                that.logger.exitWithError(this, 'login failed ! Returned error: ' + JSON.stringify(error, null, 4));
                //that.logger.exitWithError(this,'login failed !');
                throw new Error('signing failed');
            });
        } catch (e) {
            this.logger.exit(this, '[_signin]()', e);
            throw e;
        }
        this.logger.exit(this, '[_signin]()');
    }

    async [_signinRequired]() {
        await that[_signin]();
    }

    async [_signout]() {
        var that = this;
        that.logger.enter(this, '_signout');
        await this._authApiInstance.getLogout(this._accept).then(function(data) {
            that.logger.exit(this, '_signout');
        }, function(error) {
            that.logger.exitWithError(this, '_signout :logout failed ! Returned error: ' + JSON.stringify(error, null, 4));
            throw new Error(JSON.stringify(error));
        });
    }

    async [_sendSelfPresence]() {
        var that = this;
        that.logger.enter(this, '_sendSelfPresence');
        var cnxId = that._connectionInfo.id;
        var presence = S2SApi.Presence.constructFromObject({ status: "", show: "" });
        var opts = {
            'presenceUpdate': new S2SApi.PresenceUpdate() // PresenceUpdate | Presence data
        };
        opts.presenceUpdate.presence = presence;
        await this._s2sPresenceApi.presenceUpdate(cnxId, opts).then(function() {
            that.logger.exit(this, '_sendSelfPresence successfull.');
            that._stateManager.transitTo(that._stateManager.READY);
        }, function(error) {
            that.logger.exitWithError(this, '_sendSelfPresence :' + JSON.stringify(error, null, 4));
            throw new Error(JSON.stringify(error));
        });
    }

    async [_createConnection](callback_url) {
        var that = this;
        this.logger.enter(this, `[_createConnection](${callback_url})`);
        var connection = new S2SApi.Connection(callback_url);
        var opts = {
            'connectionCreate': new S2SApi.ConnectionCreate(connection) // ConnectionCreate | Connection creation data
        };
        await this._s2sConnectionApi.connectionCreate(opts).then((responseBody) => {
            that._connectionInfo = that[_extractResponseSchemaData](responseBody);
            that.logger.exit(this, '[_createConnection]() : connection created OK :' + JSON.stringify(responseBody, null, 4));
            that.logger.exit(this, '[_createConnection]() : connection created OK ');
            that._stateManager.transitTo(that._stateManager.CONNECTED);
        }, (error) => {
            that.logger.exitWithError(this, '[_createConnection]() : connection creation failed KO :' + JSON.stringify(error, null, 4));
            that._eventsModule.publish('connectionerror', that[_extractErrorResponse](error));
            throw new Error(JSON.stringify(error));
        });
    }

    async [_closeAllUserConnectons]() {
        var that = this;
        that.logger.enter(this, '_closeAllUserConnectons');
        let connectionList = [];
        try {
            await this._s2sConnectionApi.connectionIndex().then(function(responseBody) {
                connectionList = that[_extractResponseSchemaData](responseBody);
            }, function(error) {
                that.logger.exitWithError(this, '[_closeAllUserConnectons]() : connection closing failed KO :', error);
                throw new Error(JSON.stringify(error));
            });
        } catch (ex) {
            that.logger.error(this, '_closeAllUserConnectons :', ex);
            throw ex;
        }
        that.logger.info(this, '_closeAllUserConnectons all old connections: ' + JSON.stringify(connectionList, null, 4));
        if (connectionList) {
            try {
                for (var i = 0; i < connectionList.length; i++) {
                    that.logger.info(this, '_closeAllUserConnectons closing ' + JSON.stringify(connectionList[i]) + '...');
                    await that._s2sConnectionApi.connectionDelete(connectionList[i].id).then((responseData) => {
                            that.logger.info(this, '_closeAllUserConnectons : connection ' + JSON.stringify(connectionList[i]) + ' closed OK.');
                        },
                        (error) => {
                            that.logger.error(this, '_closeAllUserConnectons : connection ' + JSON.stringify(connectionList[i]) + ' closing KO.');
                        });
                }
                that.logger.exit(this, '_closeAllUserConnectons : all connection closed !');
            } catch (e) {
                that.logger.exitWithError(this, '_closeAllUserConnectons : connection ' + JSON.stringify(e) + ' closing KO.');
                throw e;
            }
        }
    }

    async [_renewAuthToken]() {
        var that = this;
        if (!this._renewingToken) {
            that._renewingToken = true;
            that.logger.enter(this, '_renewAuthToken : renewing token ...');
            await this._authApiInstance.getRenew(that._accept).then((responseData) => {
                that.logger.info(this, '_renewAuthToken : ' + JSON.stringify(responseData));
                that.applicationToken = responseData.token;
                that._eventsModule.iee.emit("rainbow_tokenrenewed");
                that.logger.exit(this, '_renewAuthToken : token renew OK');
            }, (error) => {
                that.logger.exitWithError(this, '_renewAuthToken : ' + JSON.stringify(error));
                let jwtObj = jwt(that.applicationToken);
                that.logger.info(this, `_renewAuthToken : ${JSON.stringify(jwtObj)}`);
                that.logger.info(this, `_renewAuthToken : countRenewed=${jwtObj.countRenewed}`);
                that.logger.info(this, `_renewAuthToken : maxTokenRenew=${jwtObj.maxTokenRenew}`);
                that.logger.info(this, `_renewAuthToken : exp=${jwtObj.exp}`);
                that.logger.info(this, `_renewAuthToken : iat=${jwtObj.iat}`);
                if (jwtObj.countRenewed >= jwtObj.maxTokenRenew) {
                    that.logger.warn(this, `_renewAuthToken : ${that.applicationToken} token as expired !`);
                    that._eventsModule.iee.emit("rainbow_tokenexpired");
                    that._eventsModule.publish('error', that[_extractErrorResponse](error));
                }
            });
        }
    }

    [_stopTokenWatcher]() {
        this.logger.enter(this, 'sdkkernel _stopTokenWatcher');
        if (this._renewTokenInterval !== null) {
            this.logger.debug(this, 'sdkkernel _stopTokenWatcher : clearing timer..');
            clearTimeout(this._renewTokenInterval);
            this._renewTokenInterval = null;
            this.logger.debug(this, 'sdkkernel _stopTokenWatcher : timer cleared');
        }
        this.logger.exit(this, 'sdkkernel _stopTokenWatcher');
    }

    async [_startTokenWatcher]() {
        let that = this;
        that.logger.enter(this, `_startTokenWatcher`);
        let dformat = 'DD/MM/YYYY HH:mm:ss';
        let jwtObj = jwt(that.applicationToken);
        this._tokenRenewMaxCount = jwtObj.maxTokenRenew;
        that.logger.info(this, `_startTokenWatcher : ${JSON.stringify(jwtObj)}`);
        that.logger.info(this, `_startTokenWatcher : countRenewed=${jwtObj.countRenewed}`);
        that.logger.info(this, `_startTokenWatcher : maxTokenRenew=${jwtObj.maxTokenRenew}`);
        that.logger.info(this, `_startTokenWatcher : exp=${jwtObj.exp}`);
        that.logger.info(this, `_startTokenWatcher : iat=${jwtObj.iat}`);
        const currentDate = moment();
        const startDate = moment(jwtObj.iat * 1000);
        const endDate = moment(jwtObj.exp * 1000);
        const endDateSaved = moment(jwtObj.exp * 1000);
        const midDate = moment(jwtObj.iat * 1000).add((jwtObj.exp - jwtObj.iat) / 2, 'seconds');
        that.logger.info(this, `_startTokenWatcher : now =${currentDate.format(dformat)}`);
        that.logger.info(this, `_startTokenWatcher : start date=${startDate.format(dformat)}`);
        that.logger.info(this, `_startTokenWatcher : mid date=${midDate.format(dformat)}`);
        that.logger.info(this, `_startTokenWatcher : end date=${endDate.format(dformat)}`);
        const fiveMinutesBeforeExpireryDate = endDate.subtract(5, 'minutes');
        that.logger.info(this, `_startTokenWatcher : 5 minutes before expirery date=${fiveMinutesBeforeExpireryDate.format(dformat)}`);
        if (currentDate.isAfter(endDate) || currentDate.isAfter(fiveMinutesBeforeExpireryDate)) {
            that.logger.info(this, `_startTokenWatcher : token has expires or will expire in 5 minutes =${endDate.format(dformat)}, so renew it now !`);
            that[_renewAuthToken]();
        } else {
            const oneHourBeforExpireryDate = endDateSaved.subtract(1, 'hours');
            let duration = moment.duration(oneHourBeforExpireryDate.diff(currentDate));
            let expireryDateInMillisecondes = duration.as('milliseconds');
            that.logger.info(this, `_startTokenWatcher : token will be checked one hour before ${endDate.format(dformat)} at ${oneHourBeforExpireryDate.format(dformat)} (in ${expireryDateInMillisecondes} ms)`);
            if (that._renewTokenInterval) {
                clearTimeout(that._renewTokenInterval);
            }
            that._renewTokenInterval = setTimeout(function() {
                that[_renewAuthToken]();
            }, expireryDateInMillisecondes);
        }
        that.logger.exit(this, `_startTokenWatcher`);
    }

    async start() {
        let that = this;
        that.logger.enter(this, 'starting sdk engine service ...');
        try {
            if (!that._started) {
                that.logger.info(this, 'starting statemanager...');
                await that._stateManager.start();
                that.callback_url = await that._ngrokService.start();
                await that._httpServer.start();
                that[_subscribeToRainbowEvents]();
                await that[_signin]();
                this._s2sConnectionApi = new S2SApi.ConnectionApi(this._s2sClient);
                await that[_closeAllUserConnectons]();
                that.logger.info(this, 'creating connection ...');
                await that[_createConnection](that.callback_url);
                that[_initializeRESTApiAndServices]();
                that._stateManager.transitTo(that._stateManager.STARTED);
                await that[_sendSelfPresence]();
                that._started = true;
                //await that._bubbleService.start();
                //await that._contactService.start();
                await that._conversationService.start();
                //await that._companyService.start();
                //let conversations = that._conversationService.getServerConversations();
                //let bubbles = that._bubbleService.getBubbles();
                await that._imService.start();
                await this._presenceService.start();
                await this._botService.start();
                that.logger.exit(this, 'sdk engine started.');
                return this._botService.getAll(); // must contains the list of bots jids
            } else {
                that.logger.exit(this, 'sdk engine already started');
            }
            return false;
        } catch (e) {
            that._started = false;
            that.logger.exitWithError(this, 'SdkCore :start()', e);
            that.stop();
            throw e;
        }
    }

    async stop() {
        let that = this;
        that.logger.enter(this, 'stopping sdkengine ...');
        try {
            this[_stopTokenWatcher]();

            if (that._connectionInfo !== null) {
                await that[_closeAllUserConnectons]();
            }
            if (that._connectedUserInfo !== null) {
                await that[_signout]();
            }
            await that._ngrokService.stop();
            await that._httpServer.stop();
            that[_unbscribeFromRainbowEvents]();
            that._started = false;
            that._stateManager.stop();
            return true;
        } catch (e) {
            that.logger.exitWithError(this, 'sdkengine stop :', e);
            return false;
            //throw e;
        }
    }

    get accept() {
        return _accept;
    }

    get loggerModule() {
        return this.logger;
    }

    get connectionInfo() {
        return this._connectionInfo;
    }

    get connectedUser() {
        return this._connectedUserInfo;
    }

    get authModule() {
        return this._authApiInstance;
    }

    get eventsModule() {
        return this._eventsModule;
    }

    get endUserModule() {
        return this._endUserApi;
    }

    get connectionModule() {
        return this._s2sConnectionApi;
    }

    get ImService() {
        return this._imService;
    }

    get PresenceService() {
        return this._presenceService;
    }

    get roomModule() {
        return this._s2sRoomApi;
    }

    get BubbleService() {
        return this.__bubbleService;
    }

    /*
        get companyModule() {
            return this._companyService;
        }

        get contactModule() {
            return this._contactService;
        }

    */
    get Conversationservice() {
        return this._conversationService;
    }
}
module.exports = SdkCore;