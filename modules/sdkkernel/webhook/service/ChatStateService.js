'use strict';

/**
 *
 * body CbChatState 
 * no response value expected for this operation
 **/
exports.handleChatStateUpdateCallback = function(logger, body) {
    logger.info('ChatStateService handleChatStateUpdateCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'rainbow_onchatstate', data: body });
    }).catch((e) => {
        logger.error('ChatStateService.handleChatStateUpdateCallback failed');
        throw e;
    });
}