(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/AllReceiptService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handleAllReceiptReceivedCallback = (eventManager, logger, req, res, next) => {
        var body = req.body;
        logger.info('AllReceiptCtrl :' + JSON.stringify(body));
        res.status(200).json({});
        Service.handleAllReceiptReceivedCallback(logger, body).then((response) => {
            try {
                eventManager.iee.emit(response.eventName, response.data);
            } catch (e) {
                console.log(e);
                throw e;
            }
        }, (error) => {
            eventManager.iee.emit(error.eventName, error.data);
        }).catch((err) => {
            logger.error('AllReceiptCtrl.handleAllReceiptReceivedCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onallreceipt', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
    };
    return exports;
}));