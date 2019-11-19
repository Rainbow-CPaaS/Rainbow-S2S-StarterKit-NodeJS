(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/RoomInviteService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleRoomInviteReceivedCallback = (eventManager, logger, req, res, next) => {
        var body = req.body;
        logger.info('handleRoomInviteReceivedCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});
        Service.handleRoomInviteReceivedCallback(logger, body).then((response) => {
            eventManager.iee.emit(response.eventName, response.data);
        }, (error) => {
            eventManager.iee.emit(error.eventName, error.data);
        }).catch((err) => {
            logger.error('RoomInviteCtrl.handleRoomInviteReceivedCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));
