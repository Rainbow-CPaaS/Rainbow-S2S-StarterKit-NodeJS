(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/MessageService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleMessageReceivedCallback = (eventManager, logger, req, res, next) => {

        var body = req.body;
        logger.info('handleMessageReceivedCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});
        Service.handleMessageReceivedCallback(logger, body).then((response) => {
            try {
                eventManager.iee.emit(response.eventName, response.data);
            } catch (e) {
                console.log(e);
                throw e;
            }
        }, (error) => {
            eventManager.iee.emit(error.eventName, error.data);
        }).catch((err) => {
            logger.error('MessageCtrl.handleMessageReceivedCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));
