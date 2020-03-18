'use strict';
var zmq = require("zeromq");

class ZmqEventPublisher {

    constructor(logger, options) {
        this._pubSock = zmq.socket("pub");
        this._logger = logger;
        this._options = options;
    }

    async start() {
        let that = this;
        that._logger.enter('starting zmq publisher connection on tcp://' + that._options.rainbow_notification_service.zmq.host + ':' + that._options.rainbow_notification_service.zmq.port);
        try {
            this._pubSock.bindSync("tcp://" + that._options.rainbow_notification_service.zmq.host + ":" + that._options.rainbow_notification_service.zmq.port);
            that._logger.exit("tcp://" + that._options.rainbow_notification_service.zmq.host + ":" + that._options.rainbow_notification_service.zmq.port + ' started!');
        } catch (e) {
            that._logger.error('failed to start zmq publisher connecton', e);
        }
        return true;
    }

    async stop() {
        let that = this;
        try {
            that._logger.enter('closing zmq publisher connecton...');
	    that.publish('zmq-stop',{msg:'stop signal received'});
            this._pubSock.unbindSync("tcp://" + that._options.rainbow_notification_service.zmq.host + ":" + that._options.rainbow_notification_service.zmq.port);
            that._logger.exit('zmq publisher connecton closed !');
        } catch (e) {
            that._logger.error('failed to close zmq publisher connecton', e);
        }
        return true;
    }

    async publish(eventName, eventData) {
        let that = this;
        let data = JSON.stringify(eventData);
        that._logger.enter(`publishing ${eventName} with data :${data}`);
        this._pubSock.send([eventName, JSON.stringify(data)]);
        that._logger.exit(`${eventName} published`);
        return true;
    }
}
module.exports = ZmqEventPublisher;
