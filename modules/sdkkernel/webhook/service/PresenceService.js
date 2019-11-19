'use strict';

/**
 *
 * body CbPresence 
 * no response value expected for this operation
 **/
exports.handlePresenceUpdateCallback = function(logger, body) {
    //console.log('PresenceService handlePresenceUpdateCallback' + JSON.stringify(body));    
    logger.info('PresenceService handlePresenceUpdateCallback :' + JSON.stringify(body, null, 4));
    return new Promise((resolve, reject) => {
        resolve({ eventName: 'rainbow_onpresencechanged', data: body });
    }).catch((errot) => {
        logger.error("PresenceService :", error);
    });
};