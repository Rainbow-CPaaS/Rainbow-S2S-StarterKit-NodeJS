'use strict';

/**
 *
 * body CbReceipt 
 * no response value expected for this operation
 **/
exports.handleReceiptReceivedCallback = function(logger, body) {
    //logger.info('ReceiptService :' + JSON.stringify(body));
    logger.info('ReceiptService handleReceiptReceivedCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'rainbow_onreceipt', data: body });
    }).catch((e) => {
        logger.error('ReceiptService.handleReceiptReceivedCallback failed');
        throw e;
    });
}