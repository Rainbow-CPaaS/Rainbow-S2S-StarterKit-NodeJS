(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('../service/PresenceService'));
    }
}(this, function(Service) {
    'use strict';

    var exports = function() {};

    exports.handlePresenceUpdateCallback = (eventManager, logger, req, res, next) => {
        try{	    
        var body = req.body;
        logger.info('handlePresenceUpdateCallback : ' + JSON.stringify(body, null, 4));
        res.status(200).json({});

        Service.handlePresenceUpdateCallback(logger, body).then((response) => {
            try {
                logger.enter(this,`PresenceCtrl handlePresenceUpdateCallback emitting ${response.eventName}: `, response);
                eventManager.iee.emit(response.eventName, response.data);
            } catch (ex) {
                logger.error('PresenceCtrl handlePresenceUpdateCallback : ', ex);
                throw ex;
            }
        }).catch((err) => {
            logger.error('PresenceCtrl handlePresenceUpdateCallback : ' + JSON.stringify(err));
            eventManager.iee.emit('rainbow_onerror', JSON.stringify(err));
            throw new Error(JSON.stringify(err));
        });
	}catch(e){
            logger.error('PresenceCtrl handlePresenceUpdateCallback : ' + JSON.stringify(e));
            throw new Error(JSON.stringify(e));
	}
    };
    return exports;
}));
