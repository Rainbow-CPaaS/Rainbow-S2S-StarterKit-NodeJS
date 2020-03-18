'use strict';

/**
 *
 * body CbConnection 
 * no response value expected for this operation
 **/
exports.handleConnectionCreateCallback = function(logger, body) {
    logger.info('ConnectionService handleConnectionCreateCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'webhook_rainbow_onconnectioncreated', data: body });
    }).catch((e) => {
        logger.error('ConnectionService:handleConnectionCreateCallback failed', e);
        throw e;
    });
}
