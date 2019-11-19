'use strict';

/**
 *
 * body CbRoomInvite 
 * no response value expected for this operation
 **/
exports.handleRoomInviteReceivedCallback = function(logger, body) {
    //logger.info('RoominviteService :' + JSON.stringify(body));
    logger.info('RoominviteService handleRoomInviteReceivedCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        //resolve({ eventName: 'rainbow_onroominvite', data: body });
        resolve({ eventName: 'rainbow_onbubbleinvitationreceived', data: body });
    }).catch((e) => {
        logger.error('ReceiptService.handleRoomInviteReceivedCallback failed');
        throw e;
    });
}