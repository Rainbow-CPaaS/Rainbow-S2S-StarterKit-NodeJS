'use strict';
/*=============================================================*
 * File: start-s2snode-core.js
 * Description : Rainbow-S2S-Starterkit-NodeJS launcher file
 *=============================================================*/
const S2sStarterkit = require('../../rainbow-s2s-starterkit-nodejs');
const sdkConfig = require('../config/config.json');

let cmdLineArgs = require('node-getopt').create([
        ['L', 'protocol=ARG', 'http protocol [http or https]'],
        ['L', 'port=ARG', 'http port'],
        ['L', 'jwt=ARG', 'json web token for authentication'],
        ['h', 'help', 'display this help'],
        ['v', 'version', 'show version']
    ]) // create Getopt instance
    .bindHelp() // bind option 'help' to default action
    .parseSystem(); // parse command line

const myS2sStarterkit = new S2sStarterkit(sdkConfig);
(async() => {
        await myS2sStarterkit.start().then((data) => {
		// data contains the callback_url
		// so your bot startup script can be called here if the bot is implemented in another language
        }).catch((e) => {
            console.error(e);
            (async() => { 
		    myS2sStarterkit.stop().then((data)=>{
			    console.log(data);
		    }).catch((e) => {
			    console.log(e);
		    });
		    process.exit(0);
	    })();
        });
})();

process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.');
});

process.on('SIGINT', () => {
    console.log('Got SIGINT signal.');
    console.log('SIGINT signal : calling myS2sStarterkit.stop()');
    (async() => {
        await myS2sStarterkit.stop().then((data)=>{
           console.log('SIGINT signal : data :'+data);
	}).catch((e) => {
           console.log('SIGINT signal : error :'+e);
	});
        process.exit(0);
    })();
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  process.exit(0);
});

myS2sStarterkit.events.on('rainbow_onmessageserverreceiptreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessageserverreceiptreceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onmessagereceiptreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessagereceiptreceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onmessagereceiptreadreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessagereceiptreadreceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onmessagereceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessagereceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_oncontactpresencechanged', (data) => {
    console.log('S2sStarterkit : rainbow_oncontactpresencechanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onpresencechanged', (data) => {
    console.log('S2sStarterkit : rainbow_onpresencechanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onconversationremoved', (data) => {
    console.log('S2sStarterkit : rainbow_onconversationremoved : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onconversationchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onconversationchanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onchatstate', (data) => {
    console.log('S2sStarterkit : rainbow_onchatstate : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_oncontactinformationchanged', (data) => {
    console.log('S2sStarterkit : rainbow_oncontactinformationchanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onuserinvitereceived', (data) => {
    console.log('S2sStarterkit : rainbow_onuserinvitereceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onuserinviteaccepted', (data) => {
    console.log('S2sStarterkit : rainbow_onuserinviteaccepted : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onuserinvitecanceled', (data) => {
    console.log('S2sStarterkit : rainbow_onuserinvitecanceled : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onbubbleaffiliationchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbleaffiliationchanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onbubbleownaffiliationchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbleownaffiliationchanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onbubbleinvitationreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbleinvitationreceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onbubblecustomDatachanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubblecustomDatachanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onbubbletopicchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbletopicchanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onbubblenamechanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubblenamechanged : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_ongroupcreated', (data) => {
    console.log('S2sStarterkit : rainbow_ongroupcreated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_ongroupdeleted', (data) => {
    console.log('S2sStarterkit : rainbow_ongroupdeleted : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_ongroupupdated', (data) => {
    console.log('S2sStarterkit : rainbow_ongroupupdated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onuseraddedingroup', (data) => {
    console.log('S2sStarterkit : rainbow_onuseraddedingroup : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onuserremovedfromgroup', (data) => {
    console.log('S2sStarterkit : rainbow_onuserremovedfromgroup : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onstarted', (data) => {
    console.log('S2sStarterkit : rainbow_onstarted : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onstopped', (data) => {
    console.log('S2sStarterkit : rainbow_onstopped : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onready', (data) => {
    console.log('S2sStarterkit : rainbow_onready : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onerror', (data) => {
    console.log('S2sStarterkit : rainbow_onerror : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onconnected', (data) => {
    console.log('S2sStarterkit : rainbow_onconnected : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onconnectionerror', (data) => {
    console.log('S2sStarterkit : rainbow_onconnectionerror : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_ondisconnected', (data) => {
    console.log('S2sStarterkit : rainbow_ondisconnected : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onreconnecting', (data) => {
    console.log('S2sStarterkit : rainbow_onreconnecting : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onfailed', (data) => {
    console.log('S2sStarterkit : rainbow_onfailed : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_oncallupdated', (data) => {
    console.log('S2sStarterkit : rainbow_oncallupdated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onvoicemessageupdated', (data) => {
    console.log('S2sStarterkit : rainbow_onvoicemessageupdated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_oncallforwarded', (data) => {
    console.log('S2sStarterkit : rainbow_oncallforwarded : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onchannelmessagereceived', (data) => {
    console.log('S2sStarterkit : rainbow_onchannelmessagereceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onchannelmessagedeletedreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onchannelmessagedeletedreceived : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onprofilefeatureupdated', (data) => {
    console.log('S2sStarterkit : rainbow_onprofilefeatureupdated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onfilecreated', (data) => {
    console.log('S2sStarterkit : rainbow_onfilecreated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onfileupdated', (data) => {
    console.log('S2sStarterkit : rainbow_onfileupdated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onfiledeleted', (data) => {
    console.log('S2sStarterkit : rainbow_onfiledeleted : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onthumbnailcreated', (data) => {
    console.log('S2sStarterkit : rainbow_onthumbnailcreated : ' + JSON.stringify(data));
});

myS2sStarterkit.events.on('rainbow_onchannelcreated', (data) => {
    console.log('S2sStarterkit : rainbow_onchannelcreated : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onroommemberreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onroommemberreceived : ' + JSON.stringify(data));
});

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  }).on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});
