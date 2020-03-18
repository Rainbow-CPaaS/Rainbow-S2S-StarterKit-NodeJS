"use strict";

const EventEmitter = require('events');
const LOG_ID = "EVENTS - ";
const ZmqEventPublisher = require('./ZmqEventPublisher');
/**
 * @class
 * @name Events
 * @description
 *      This module fires every events that come from Rainbow.<br/>
 *      To receive them, you need to subscribe individually to each of the following events<br/>
 * @fires Events#rainbow_onmessagereceiptreadreceived
 * @fires Events#rainbow_onmessagereceived
 * @fires Events#rainbow_onmessagereceiptreceived
 * @fires Events#rainbow_onmessageserverreceiptreceived
 * @fires Events#rainbow_onallmessagereceiptreceived
 * @fires Events#rainbow_onallmessagereceiptsent
 *
 * @fires Events#rainbow_onconversationchanged
 * @fires Events#rainbow_onconversationcreated
 * @fires Events#rainbow_onconversationupdated
 * @fires Events#rainbow_onconversationremoved
 *
 * @fires Events#rainbow_onreceipt
 *
 * @fires Events#rainbow_onconnectionerror
 * @fires Events#rainbow_onconnectioncreated
 *
 * @fires Events#rainbow_onbubblenamechanged (not found)
 * @fires Events#rainbow_onbubbleinvitationreceived
 * @fires Events#rainbow_onbubblepresencechanged (not found )
 * @fires Events#rainbow_onbubblestatechanged
 * @fires Events#rainbow_onbubbleaffiliationchanged
 * @fires Events#rainbow_onbubblecustomdatachanged (not found)
 * @fires Events#rainbow_onbubbleownaffiliationchanged
 * @fires Events#rainbow_onbubbletopicchanged (not found )
 *
 * @fires Events#rainbow_onfailed
 * @fires Events#rainbow_onstopped
 * @fires Events#rainbow_onconnected
 * @fires Events#rainbow_onreconnecting
 * @fires Events#rainbow_onerror
 * @fires Events#rainbow_onstarted
 * @fires Events#rainbow_onready
 * @fires Events#rainbow_ondisconnected
 *
 * @fires Events#rainbow_onpresencechanged
 *
 * @fires Events#rainbow_onchatstate
*/
class Events {

    constructor(_logger, options, _filterCallback) {
        var that = this;
        //this.core = _sdkengine;
        this._logger = _logger;
        this._filterCallback = _filterCallback;

        this._evReceiver = new EventEmitter();

        this._evPublisher = new EventEmitter();

        this._zmqEventPublisher = new ZmqEventPublisher(this._logger, options);

        /*
        External event from webhook
        webhook_rainbow_onconnectioncreated will be transformed to internal event rainbow_onconnectioncreated
        Rainbow server (webhook_rainbow_onconnectioncreated)-->[S2S starterkit]-->(rainbow_onconnectioncreated)
        */
        this._evReceiver.on("webhook_rainbow_onconnectioncreated", function(connectionCreatedData) {
            /**
             * @event Events#rainbow_onconnectioncreated
             * @public
             * @param {connectionCreatedData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onconnectioncreated : Fired when a connection with rainbow is created
             */
            that.publishEvent("connectioncreated",connectionCreatedData);
        });
	    
        this._evReceiver.on("webhook_rainbow_onreceipt", function(receipt) {
            if (_filterCallback && _filterCallback(receipt.fromJid)) {
                that._logger.log("warn", `${LOG_ID} filtering event rainbow_onreceipt for jid: ${receipt.fromJid}`);
                return;
            }
            if (receipt.entity === "server") {
                /**
                 * @public
                 * @event Events#rainbow_onmessageserverreceiptreceived
                 * @param {Object} receipt The receipt received by the server
                 * @param {string} receipt.event The type of receipt. Can be `read` or `received`. Should be `received` in that case
                 * @param {string} receipt.entity The entity who sent the receipt. Can be `server` or `client`. Should be `server` in that case
                 * @param {string} receipt.type The type of the message. Can be `chat` or `groupchat`.
                 * @param {string} receipt.id The id of the message sent (linked to that receipt)
                 * @memberof Events
                 * @description
                 *      Fired when the message has been received by the server
                 */
                that.publishEvent("messageserverreceiptreceived", receipt);
            } else {
                if (receipt.event === "received") {
                    /**
                     * @public
                     * @event Events#rainbow_onmessagereceiptreceived
                     * @param {Object} receipt The receipt received by the server
                     * @param {string} receipt.event The type of receipt. Can be `read` or `received`. Should be `received` in that case
                     * @param {string} receipt.entity The entity who sent the receipt. Can be `server` or `client`. Should be `client` in that case
                     * @param {string} receipt.type The type of the message. Can be `chat` or `groupchat`
                     * @param {string} receipt.id The id of the message sent (linked to that receipt)
                     * @param {string} receipt.fromJid The Bare JID of the recipient who sent this receipt,
                     * @param {string} receipt.resource The resource JID of the recipient who sent this receipt
                     * @description
                     *      Fired when the message has been received by the recipient
                     */
                    that.publishEvent("messagereceiptreceived", receipt);
                } else {
                    /**
                     * @public
                     * @event Events#rainbow_onmessagereceiptreadreceived
                     * @param {Object} receipt The receipt received by the server
                     * @param {string} receipt.event The type of receipt. Can be `read` or `received`. Should be `read` in that case
                     * @param {string} receipt.entity The entity who sent the receipt. Can be `server` or `client`. Should be `client` in that case
                     * @param {string} receipt.type The type of the message. Can be `chat` or `groupchat`
                     * @param {string} receipt.id The id of the message sent (linked to that receipt)
                     * @param {string} receipt.fromJid The Bare JID of the recipient who sent this receipt,
                     * @param {string} receipt.resource The resource JID of the recipient who sent this receipt
                     * @description
                     *      Fired when the message has been read by the recipient
                     */
                    that.publishEvent("messagereceiptreadreceived", receipt);
                }
            }
        });

        this._evReceiver.on("webhook_rainbow_onmessagereceived", function(message) {
            if (_filterCallback && _filterCallback(message.fromJid)) {
                that._logger.log("warn", `${LOG_ID} filtering event rainbow_onmessagereceived for jid: ${message.fromJid}`);
                return;
            }

            /**
             * @event Events#rainbow_onmessagereceived
             * @public
             * @param {Message} message The message received
             * @description 
             *      Fired when a chat message is received (in a one-to-one conversation or in a Bubble conversation)
             */
            that.publishEvent("messagereceived", message);
        });
	    
        /*
        External event from webhook
        webhook_rainbow_onallreceiptrecived will be transformed to internal event rainbow_onallreceiptrecived
        Rainbow server (webhook_rainbow_onallreceiptrecived)-->[S2S starterkit]-->(rainbow_onallreceiptrecived)
        */	    
        this._evReceiver.on("webhook_rainbow_onallreceiptrecived", function(allReceiptData) {
            /**
             * @event Events#rainbow_onallreceiptrecived
             * @public
             * @param {allReceiptData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onallreceiptrecived : Fired when all receipt are recieved
             */
	    if(allReceiptData['all-receipt']['id']==='all-received'){
                that.publishEvent('allmessagereceiptreceived',allReceiptData);
	    }else if(allReceiptData['all-receipt']['id']==='all-sent'){
                that.publishEvent('allmessagereceiptsent',allReceiptData);
	    }
		
        });

        /*
        External event from webhook
        webhook_rainbow_onconversationreceived will be transformed to internal event rainbow_onconversationchanged or rainbow_onconversationremoved
        Rainbow server (webhook_rainbow_onconversationrecieved)-->[S2S starterkit]-->(rainbow_onconversationchanged)
        */
        this._evReceiver.on("webhook_rainbow_onconversationreceived", function(conversationChangedData) {
            /**
             * @event Events#rainbow_onconversationchanged
             * @public
             * @param {conversationChangedData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onconversationchanged : Fired when a change accurs in a conversation  
             */
		if(conversationChangedData.conversation.action==='created'){
                	that.publishEvent('conversationcreated',allReceiptData);
		}else if(conversationChangedData.conversation.action==='update'){
                	that.publishEvent('conversationupdate',allReceiptData);
		}else if(conversationChangedData.conversation.action==='deleted'){
                	that.publishEvent('conversationremoved',allReceiptData);
		}else{
            	 	that.publishEvent("conversationchanged",conversationChangedData);
		}
        });
	    
	/*
	External event from webhook
	webhook_rainbow_onbubblenamechanged will be transformed to internal event rainbow_onbubblenamechanged
	Rainbow server (webhook_rainbow_onbubblenamechanged)-->[S2S starterkit]-->(rainbow_onbubblenamechanged)
	*/
        this._evReceiver.on("webhook_rainbow_onbubblenamechanged", function(bubbleNameChangeData) {
            /**
             * @event Events#rainbow_onbubblenamechanged
             * @public
             * @param {bubbleNameChangeData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubblenamechanged : When a moderator changes the name of a bubble, this event is fired to all the members of the bubble (including the one who did the change)  
             */
            that.publishEvent("bubblenamechanged",bubbleNameChangeData);
        });

	/*
	External event from webhook
	webhook_rainbow_onbubbleinvitationreceived will be transformed to internal event rainbow_onbubbleinvitationreceived
	Rainbow server (webhook_rainbow_onbubbleinvitationreceived)-->[S2S starterkit]-->(rainbow_onbubbleinvitationreceived)
	*/
        this._evReceiver.on("webhook_rainbow_roominvitationreceived", function(bubbleInvitationReceiveData) {
            /**
             * @event Events#rainbow_onbubbleinvitationreceived
             * @public
             * @param {bubbleInvitationReceiveData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubbleinvitationreceived : Fired when an invitation to join a bubble is received  
             */
            that.publishEvent("bubbleinvitationreceived",bubbleInvitationReceiveData);
        });

	/*
	External event from webhook
	webhook_rainbow_onbubblepresencechanged will be transformed to internal event rainbow_onbubblepresencechanged
	Rainbow server (webhook_rainbow_onbubblepresencechanged)-->[S2S starterkit]-->(rainbow_onbubblepresencechanged)
	*/
        this._evReceiver.on("webhook_rainbow_onbubblepresencechanged", function(bubblePresenceData) {
            /**
             * @event Events#rainbow_onbubblepresencechanged
             * @public
             * @param {bubblePresenceData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubblepresencechanged : Fired when a bubble presence changes. It is also raised when a bubble changes isActive from true to false (and reverse)  
             */
            that.publishEvent("bubblepresencechanged",bubblePresenceData);
        });

	/*
	External event from webhook
	webhook_rainbow_onroommemberreceived will be transformed to internal event rainbow_onbubbleaffiliationchanged
	Rainbow server (webhook_rainbow_onroommemberreceived)-->[S2S starterkit]-->(rainbow_onbubbleaffiliationchanged)
	*/
        this._evReceiver.on("webhook_rainbow_onroommemberreceived", function(bubbleAffiliationData) {
            /**
             * @event Events#rainbow_onbubbleaffiliationchanged
             * @public
             * @param {bubbleAffiliationData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubbleaffiliationchanged : Fired when a user changes his affiliation with a bubble  
             */
            that.publishEvent("bubbleaffiliationchanged",bubbleAffiliationData);
        });

        /*
        External event from webhook
        webhook_rainbow_onroomstate will be transformed to internal event rainbow_onbubblestatechanged
        Rainbow server (webhook_rainbow_onroomstate)-->[S2S starterkit]-->(rainbow_onbubblestatechanged)
        */
        this._evReceiver.on("webhook_rainbow_onroomstate", function(bubbleStateData) {
	
	    if(bubbleStateData['room-state']['event']==='deleted'){
              that.publishEvent("bubbleremoved",bubbleStateData);
	    }else{
              /**
               * @event Events#rainbow_onbubblestatechanged
               * @public
               * @param {bubbleCustomData} the event data
               * @description
               *   S2S starterkit internal event rainbow_onbubblestatechanged :  Fired when bubble state changed 
               */
              that.publishEvent("bubblestatechanged",bubbleStateData);
	    }
        });


	/*
	External event from webhook
	webhook_rainbow_onbubblecustomdatachanged will be transformed to internal event rainbow_onbubblecustomdatachanged
	Rainbow server (webhook_rainbow_onbubblecustomdatachanged)-->[S2S starterkit]-->(rainbow_onbubblecustomdatachanged)
	*/
        this._evReceiver.on("webhook_rainbow_onbubblecustomdatachanged", function(bubbleCustomData) {
            /**
             * @event Events#rainbow_onbubblecustomdatachanged
             * @public
             * @param {bubbleCustomData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubblecustomdatachanged : When a moderator changes the custom data of a bubble, this event is fired to all the members of the bubble (including the one who did the change)  
             */
            that.publishEvent("bubblecustomdatachanged",bubbleCustomData);
        });

	/*
	External event from webhook
	webhook_rainbow_onmessagereceiptreceived will be transformed to internal event rainbow_onmessagereceiptreceived
	Rainbow server (webhook_rainbow_onmessagereceiptreceived)-->[S2S starterkit]-->(rainbow_onmessagereceiptreceived)
	*/
        this._evReceiver.on("webhook_rainbow_onmessagereceiptreceived", function(messageReceiteReceivedData) {
            /**
             * @event Events#rainbow_onmessagereceiptreceived
             * @public
             * @param {messageReceiteReceivedData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onmessagereceiptreceived : Fired when the message has been received by the recipient  
             */
            that.publishEvent("messagereceiptreceived",messageReceiteReceivedData);
        });

	/*
	External event from webhook
	webhook_rainbow_onconversationremoved will be transformed to internal event rainbow_onconversationremoved
	Rainbow server (webhook_rainbow_onconversationremoved)-->[S2S starterkit]-->(rainbow_onconversationremoved)
	*/
        this._evReceiver.on("webhook_rainbow_onconversationremoved", function(conversationRemovedData) {
            /**
             * @event Events#rainbow_onconversationremoved
             * @public
             * @param {conversationRemovedData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onconversationremoved : Fired when a conversation is deleted  
             */
            that.publishEvent("conversationremoved",conversationRemovedData);
        });

	/*
	External event from webhook
	webhook_rainbow_onbubbleownaffiliationchanged will be transformed to internal event rainbow_onbubbleownaffiliationchanged
	Rainbow server (webhook_rainbow_onbubbleownaffiliationchanged)-->[S2S starterkit]-->(rainbow_onbubbleownaffiliationchanged)
	*/
        this._evReceiver.on("webhook_rainbow_onbubbleownaffiliationchanged", function(bubbleAffiliationData) {
            /**
             * @event Events#rainbow_onbubbleownaffiliationchanged
             * @public
             * @param {bubbleAffiliationData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubbleownaffiliationchanged : Fired when a user changes the user connected affiliation with a bubble  
             */
            that.publishEvent("bubbleownaffiliationchanged",bubbleAffiliationData);
        });

	/*
	External event from webhook
	webhook_rainbow_onmessageserverreceiptreceived will be transformed to internal event rainbow_onmessageserverreceiptreceived
	Rainbow server (webhook_rainbow_onmessageserverreceiptreceived)-->[S2S starterkit]-->(rainbow_onmessageserverreceiptreceived)
	*/
        this._evReceiver.on("webhook_rainbow_onmessageserverreceiptreceived", function(messageServerReceiptReadReceivedData) {
            /**
             * @event Events#rainbow_onmessageserverreceiptreceived
             * @public
             * @param {messageServerReceiptReadReceivedData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onmessageserverreceiptreceived : Fired when the message has been received by the server  
             */
            that.publishEvent("messageserverreceiptreceived",messageServerReceiptReadReceivedData);
        });

	/*
	External event from webhook
	webhook_rainbow_onbubbletopicchanged will be transformed to internal event rainbow_onbubbletopicchanged
	Rainbow server (webhook_rainbow_onbubbletopicchanged)-->[S2S starterkit]-->(rainbow_onbubbletopicchanged)
	*/
        this._evReceiver.on("webhook_rainbow_onbubbletopicchanged", function(bubbleTopicData) {
            /**
             * @event Events#rainbow_onbubbletopicchanged
             * @public
             * @param {bubbleTopicData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onbubbletopicchanged : When a moderator changes the topic data of a bubble, this event is fired to all the members of the bubble (including the one who did the change)  
             */
            that.publishEvent("bubbletopicchanged",bubbleTopicData);
        });

	/*
	External event from webhook
	webhook_rainbow_onpresencechanged will be transformed to internal event rainbow_onpresencechanged
	Rainbow server (webhook_rainbow_onpresencechanged)-->[S2S starterkit]-->(rainbow_onpresencechanged)
	*/
        this._evReceiver.on("webhook_rainbow_onpresencechanged", function(presenceData) {
            /**
             * @event Events#rainbow_onpresencechanged
             * @public
             * @param {presenceData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onpresencechanged : fired when the presence of the connected user changes  
             */
            that.publishEvent("presencechanged",presenceData);
        });

	/*
	External event from webhook
	webhook_rainbow_onchatstate will be transformed to internal event rainbow_onchatstate
	Rainbow server (webhook_rainbow_onchatstate)-->[S2S starterkit]-->(rainbow_onchatstate)
	*/
        this._evReceiver.on("webhook_rainbow_onchatstate", function(chatstateData) {
            /**
             * @event Events#rainbow_onchatstate
             * @public
             * @param {chatstateData} the event data
             * @description
             *   S2S starterkit internal event rainbow_onchatstate : Fired when a chat state change occurs in a conversation  
             */
            that.publishEvent("chatstate",chatstateData);
        });
    }

    async start() {
        this._zmqEventPublisher.start();
    }

    async stop() {
        this._zmqEventPublisher.stop();
    }

    get iee() {
        return this._evReceiver;
    }

    get eee() {
        return this._evPublisher;
    }

    /**
     * @method on
     * @public
     * @memberof Events
     * @instance
     * @param {string} event The event name to subscribe
     * @param {function} callback The function called when the even is fired
     * @return {Object} The events instance to be able to chain subscriptions
     * @description
     *      Subscribe to an event
     */
    on(event, callback) {
        return this._evPublisher.on(event, callback);
    }

    /**
     * @method once
     * @public
     * @memberof Events
     * @instance
     * @param {string} event The event name to subscribe
     * @param {function} callback The function called when the even is fired
     * @return {Object} The events instance to be able to chain subscriptions
     * @description
     *      Subscribe to an event only one time (fired only the first time)
     */
    once(event, callback) {
        return this._evPublisher.once(event, callback);
    }

    removeListener(event, callback) {
        try {
            this._logger.enter(`Events:removeListener : removing ${event} listener ...`);
            //this._evPublisher.removeListener(event, callback);
            this._evPublisher.removeAllListeners(event);
            this._logger.enter(`Events:removeListener : event listener ${event} removed !`);
        } catch (ex) {
            throw ex;
        }
    }

    publish(event, data) {

        let info = data || { code: 1, label: "SUCESSFULL", msg: "" };

        /**
         * @event Events#rainbow_onstarted
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the SDK has successfully started (not yet signed in)
         */

        /**
         * @event Events#rainbow_onstopped
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the SDK has been successfully stopped (all services have been stopped)
         */

        /**
         * @event Events#rainbow_onconnected
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the connection is successfull with Rainbow (signin complete)
         */

        /**
         * @event Events#rainbow_onconnectionerror
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the connection can't be done with Rainbow (ie. issue on sign-in)
         */

        /**
         * @event Events#rainbow_ondisconnected
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the SDK lost the connection with Rainbow
         */

        /**
         * @event Events#rainbow_onreconnecting
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the SDK tries to reconnect
         */
        /**
         * @event Events#rainbow_onfailed
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the SDK didn't succeed to reconnect and stop trying
         */

        /**
         * @event Events#rainbow_onready
         * @public
         * @param { Object } status The event status
         * @description
         *      Fired when the SDK is connected to Rainbow and ready to be used
         */

        /**
         * @event Events#rainbow_onerror
         * @public
         * @param {Object} error The error received
         * @description
         *      Fired when something goes wrong (ie: bad 'configurations' parameter...). Used by application to stop, start the sdk again.
         */

        //this._logger.log("info", LOG_ID + "(publish) event " + this._logger.colors.events("rainbow_on" + event) + " : ", info);
        //this._evPublisher.emit("rainbow_on" + event, info);
        this.publishEvent(event, info);
    }

    /**
     * @method publishEvent
     * @private
     * @memberof Events
     * @instance
     * @param {string} event The event name to raise
     * @param {...*} ...args all arguments for the event
     * @return nothing
     * @description
     *      Add "rainbow_on" prefix to event name, print it human readable, and raises it.
     */
    publishEvent(...args) {
        let event;
        let params;
        let that = this;
        [event, ...params] = args;

        let eventName = "rainbow_on" + event;

        that._logger.log("info", LOG_ID + "(publishEvent) event " + that._logger.colors.events(eventName));
        //that._logger.log("internal", LOG_ID + "(publishEvent) event " + that._logger.colors.events("rainbow_on" + event1) , that._logger.colors.data(data1));
        //that._logger.log("internal", LOG_ID + "(publishEvent) event1 : ", event1);

        let iter = 0;
        params.forEach((dataIter) => {
            that._logger.log("internal", LOG_ID + "(publishEvent) param ", iter++, " for event ", that._logger.colors.events(eventName), " data : ", that._logger.colors.data(dataIter));

        });
        this._evPublisher.emit(eventName, ...params);
        this._zmqEventPublisher.publish('rainbow_on' + event, ...params);
    }
}
module.exports = Events;
