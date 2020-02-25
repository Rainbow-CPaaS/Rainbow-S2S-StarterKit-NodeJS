(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/ConnectionService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleConnectionCreateCallback = (eventManager, logger, req, res, next) => {
        var body = req.body;
        logger.info('handleConnectionCreateCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});
        Service.handleConnectionCreateCallback(logger, body).then((response) => {
            //logger.info('handleConnectionCreateCallback : '+JSON.stringify(body));
            try {
                eventManager.publish(response.eventName, response.data);
            } catch (e) {
                console.log(e);
                throw e;
            }
        }, (err) => {
            eventManager.publish(err.eventName, err.data);
            logger.error('handleConnectionCreateCallback : ' + JSON.stringify(err));
        }).catch((err) => {
            logger.error('handleConnectionCreateCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));