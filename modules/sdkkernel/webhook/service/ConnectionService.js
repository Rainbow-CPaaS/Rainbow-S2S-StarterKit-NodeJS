'use strict';

/**
 *
 * body CbConnection 
 * no response value expected for this operation
 **/
exports.handleConnectionCreateCallback = function(logger, body) {
    logger.info('ConnectionService handleConnectionCreateCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'connected', data: body });
        //reject({eventName:'rainbow_onconnectionerror',data:body});
    }).catch((e) => {
        logger.error('ConnectionService:handleConnectionCreateCallback failed', e);
        throw e;
    });
}