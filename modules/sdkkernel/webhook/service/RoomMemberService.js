'use strict';

/**
 *
 * body CbRoomMember 
 * no response value expected for this operation
 **/
exports.handleRoomMemberReceivedCallback = function(logger, body) {
    //logger.info('RoomMemberService :' + JSON.stringify(body));
    logger.info('RoomMemberService handleRoomMemberReceivedCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'rainbow_onroommemberreceived', data: body });
    }).catch((e) => {
        logger.error('ReceiptService.handleRoomMemberReceivedCallback failed');
        throw e;
    });
}