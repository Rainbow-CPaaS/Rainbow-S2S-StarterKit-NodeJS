(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/RoomStateService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleRoomStateReceivedCallback = (eventManager, logger, req, res, next) => {
        var body = req.body;
        logger.info('handleRoomStateReceivedCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});
        Service.handleRoomStateReceivedCallback(logger, body).then((response) => {
            eventManager.iee.emit(response.eventName, response.data);
        }, (error) => {
            eventManager.iee.emit(error.eventName, error.data);
        }).catch((err) => {
            logger.error('RoomStateCtrl.handleRoomStateReceivedCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));
