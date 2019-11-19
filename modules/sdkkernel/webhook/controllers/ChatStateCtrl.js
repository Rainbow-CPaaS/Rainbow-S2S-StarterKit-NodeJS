(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/ChatStateService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleChatStateUpdateCallback = (eventManager, logger, req, res, next) => {
        var body = req.body;
        logger.info(this, 'handleChatStateUpdateCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});
        Service.handleChatStateUpdateCallback(logger, body).then((response) => {
            try {
                eventManager.iee.emit(response.eventName, response.data);
            } catch (e) {
                console.log(e);
                throw e;
            }
        }, (error) => {
            eventManager.iee.emit(error.eventName, error.data);
        }).catch((err) => {
            logger.error('ChatStateCtrl.handleChatStateUpdateCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));
