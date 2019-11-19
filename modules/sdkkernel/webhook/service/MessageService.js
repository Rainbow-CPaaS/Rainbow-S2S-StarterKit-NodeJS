'use strict';

/**
 *
 * body CbMessage 
 * no response value expected for this operation
 **/
exports.handleMessageReceivedCallback = function(logger, body) {
    //logger.info('MessageService :' + JSON.stringify(body));
    logger.info('MessageService handleMessageReceivedCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'rainbow_onmessagereceived', data: body });
    }).catch((e) => {
        logger.error('MessageService.handleMessageReceivedCallback failed', e);
        throw e;
    });
}