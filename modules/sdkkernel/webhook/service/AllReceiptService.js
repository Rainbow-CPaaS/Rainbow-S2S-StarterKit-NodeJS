'use strict';

/**
 *
 * body CbAllReceipt 
 * no response value expected for this operation
 **/
exports.handleAllReceiptReceivedCallback = function(logger, body) {
    logger.info('AllReceiptService :' + JSON.stringify(body));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'webhook_rainbow_onallreceiptrecived', data: body });
    }).catch((e) => {
        logger.error('AllReceiptService:handleAllReceiptReceivedCallback failed');
        throw e;
    });
}
