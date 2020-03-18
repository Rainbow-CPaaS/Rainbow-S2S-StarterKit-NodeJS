'use strict';

/**
 *
 * body CbConversation 
 * no response value expected for this operation
 **/
exports.handleConversationReceivedCallback = function(logger, body) {
    logger.info('ConversationService handleConversationReceivedCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'webhook_rainbow_onconversationreceived', data: body });
    }).catch((e) => {
        logger.error('ConversationService:handleConversationReceivedCallback failed', e);
        throw e;
    });
}
