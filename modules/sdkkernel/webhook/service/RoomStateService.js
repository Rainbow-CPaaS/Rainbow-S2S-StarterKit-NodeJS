'use strict';

/**
 *
 * body CbRoomState 
 * no response value expected for this operation
 **/

exports.handleRoomStateReceivedCallback = function(logger, body) {
    //logger.info('RoomStateService :' + JSON.stringify(body));
    logger.info('RoomStateService handleRoomStateReceivedCallback :' + JSON.stringify(body, null, 4));
    return new Promise(function(resolve, reject) {
        resolve({ eventName: 'webhook_rainbow_onroomstate', data: body });
    }).catch((e) => {
        logger.error('ReceiptService.handleRoomStateReceivedCallback failed');
        throw e;
    });
}
