(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/ConversationService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleConversationReceivedCallback = (eventManager, logger, req, res, next) => {
        var body = req.body;
        logger.info('handleConversationReceivedCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});
        Service.handleConversationReceivedCallback(logger, body).then((response) => {
            //logger.info('handleConversationReceivedCallback : '+JSON.stringify(body));
            try {
                eventManager.publish(response.eventName, response.data);
            } catch (e) {
                console.log(e);
                throw e;
            }
        }, (err) => {
            eventManager.publish(err.eventName, err.data);
            logger.error('handleConversationReceivedCallback : ' + JSON.stringify(err));
        }).catch((err) => {
            logger.error('handleConversationReceivedCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));
