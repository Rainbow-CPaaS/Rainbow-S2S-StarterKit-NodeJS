'use strict';

const RainbowS2sStarterKit = require('rainbow-s2s-starterkit-nodejs');
const s2sStarterkitConfig = require('./config/config.json');
const loaderConfig = require('./config/bot-loader-params.json');

var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn,
    out = fs.openSync('./s2s-zmq-loader.log', 'a'),
    err = fs.openSync('./s2s-zmq-loader.log', 'a');

if (!fs.existsSync(loaderConfig.interpreter)) {
    console.log('Interpreter ' + loaderConfig.interpreter + ' doesn\'t exists !');
    process.exit(1);
}

if (!fs.existsSync(loaderConfig.program)) {
    console.log('Programm ' + loaderConfig.program + ' doesn\'t exists !');
    process.exit(1);
}

let cmdLineArgs = require('node-getopt').create([
    ['L', 'protocol=ARG', 'http protocol [http or https]'],
    ['L', 'port=ARG', 'http port'],
    ['L', 'jwt=ARG', 'json web token for authentication'],
    ['h', 'help', 'display this help'],
    ['v', 'version', 'show version']
]) // create Getopt instance
    .bindHelp() // bind option 'help' to default action
    .parseSystem(); // parse command line

console.log(cmdLineArgs.options);

var pidfilename = `${__dirname}${path.sep}s2s-zmq-php.pid`;
const myRainbowS2sStarterKit = new RainbowS2sStarterKit(s2sStarterkitConfig);
(async () => {
    await myRainbowS2sStarterKit.start().then((callback_url) => {
        let params = [loaderConfig.program].concat([callback_url]);
        const args = params.concat(loaderConfig.args);
	    
        let detach = (loaderConfig.isblocking) ? true : false;
        console.log('*******************************************************************************');
        console.log(args);
        console.log('*******************************************************************************');
        var child = spawn(loaderConfig.interpreter, args, {
            stdio: 'ignore',
            detached: detach
        });
        var fd = fs.openSync(pidfilename, 'w');
        fs.appendFileSync(fd, child.pid, 'utf8');
        fs.closeSync(fd);
        console.log(child);
        child.unref();
    }).catch((e) => {
        console.error(e);

        (async () => {
            await myRainbowS2sStarterKit.stop().then((data) => {
            }).catch((e) => {
                console.log(e);
            });
            if (fs.existsSync(pidfilename)) {
                fs.unlinkSync(pidfilename);
            }
        })();

    });
})();

process.on('SIGINT', () => {
    console.log('Got SIGINT signal.');
    (async () => {
        await myRainbowS2sStarterKit.stop().then((data) => {
            console.log('SIGINT signal : data :' + data);
        }).catch((e) => {
            console.log('SIGINT signal : error :' + e);
        });
        if (fs.existsSync(pidfilename)) {
            var pid = fs.readFileSync(pidfilename, "utf8");
            console.log(pid);
            process.kill(pid);
            fs.unlinkSync(pidfilename);
        }
        process.exit(0);
    })();
});

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    process.exit(0);
});

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
}).on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    //process.exit(1);
});

/* uncomment to see events console for debugging
// Fired when the connection with rainbow is created (not yet sign-in)
myRainbowS2sStarterKit.events.on('rainbow_onconnectioncreated', (data) => {
    console.log('S2sStarterkit : rainbow_onconnectioncreated : ' + JSON.stringify(data));
});
//Fired when the connection can't be done with Rainbow (ie. issue on sign-in)
myRainbowS2sStarterKit.events.on('rainbow_onconnectionerror', (data) => {
    console.log('S2sStarterkit : rainbow_onconnectionerror : ' + JSON.stringify(data));
});
// When a moderator changes the name of a bubble, this event is fired to all the members of the bubble (including the one who did the change)
myRainbowS2sStarterKit.events.on('rainbow_onbubblenamechanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubblenamechanged : ' + JSON.stringify(data));
});
// Fired when a user changes the user connected affiliation with a bubble
myRainbowS2sStarterKit.events.on('rainbow_onbubbleownaffiliationchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbleownaffiliationchanged : ' + JSON.stringify(data));
});
// Fired when the message has been read by the recipient
myRainbowS2sStarterKit.events.on('rainbow_onmessagereceiptreadreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessagereceiptreadreceived : ' + JSON.stringify(data));
});
// Fired when the message has been received by the server
myRainbowS2sStarterKit.events.on('rainbow_onmessageserverreceiptreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessageserverreceiptreceived : ' + JSON.stringify(data));
});
// When a moderator changes the topic data of a bubble, this event is fired to all the members of the bubble (including the one who did the change)
myRainbowS2sStarterKit.events.on('rainbow_onbubbletopicchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbletopicchanged : ' + JSON.stringify(data));
});
// Fired when S2S starterkit is connected to Rainbow and ready to be used
myRainbowS2sStarterKit.events.on('rainbow_onready', (data) => {
    console.log('S2sStarterkit : rainbow_onready : ' + JSON.stringify(data));
});
// Fired when the SDK tries to reconnect
myRainbowS2sStarterKit.events.on('rainbow_onreconnecting', (data) => {
    console.log('S2sStarterkit : rainbow_onreconnecting : ' + JSON.stringify(data));
});
// Fired when the S2S starterkit has successfully started (not yet signed in)
myRainbowS2sStarterKit.events.on('rainbow_onstarted', (data) => {
    console.log('S2sStarterkit : rainbow_onstarted : ' + JSON.stringify(data));
});
// Fired when a one-to-one message is received
myRainbowS2sStarterKit.events.on('rainbow_onmessagereceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessagereceived : ' + JSON.stringify(data));
});
// Fired when the message has been received by the recipient
myRainbowS2sStarterKit.events.on('rainbow_onmessagereceiptreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onmessagereceiptreceived : ' + JSON.stringify(data));
});
// Fired when a receipt notification occurs
myRainbowS2sStarterKit.events.on('rainbow_onreceipt', (data) => {
    console.log('S2sStarterkit : rainbow_onreceipt : ' + JSON.stringify(data));
});
// Fired when something goes wrong (ie: bad 'configurations' parameter, impossible to connect or reconnect, etc...)
myRainbowS2sStarterKit.events.on('rainbow_onerror', (data) => {
    console.log('S2sStarterkit : rainbow_onerror : ' + JSON.stringify(data));
});

//Fired when an invitation to join a bubble is received
myRainbowS2sStarterKit.events.on('rainbow_onbubbleinvitationreceived', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbleinvitationreceived : ' + JSON.stringify(data));
});
// Fired when the connection is successfull with Rainbow (signin complete)
myRainbowS2sStarterKit.events.on('rainbow_onconnected', (data) => {
    console.log('S2sStarterkit : rainbow_onconnected : ' + JSON.stringify(data));
});
// Fired when the connection has stopped
myRainbowS2sStarterKit.events.on('rainbow_onstopped', (data) => {
    console.log('S2sStarterkit : rainbow_onstopped : ' + JSON.stringify(data));
});
// Fired when a user changes his affiliation with a bubble
myRainbowS2sStarterKit.events.on('rainbow_onbubbleaffiliationchanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubbleaffiliationchanged : ' + JSON.stringify(data));
});
// Fired when a chat state change occurs in a conversation
myRainbowS2sStarterKit.events.on('rainbow_onchatstate', (data) => {
    console.log('S2sStarterkit : rainbow_onchatstate : ' + JSON.stringify(data));
});
// Fired when a conversation is deleted
myRainbowS2sStarterKit.events.on('rainbow_onconversationremoved', (data) => {
    console.log('S2sStarterkit : rainbow_onconversationremoved : ' + JSON.stringify(data));
});
// Fired when the presence of the connected user changes
myRainbowS2sStarterKit.events.on('rainbow_onpresencechanged', (data) => {
    console.log('S2sStarterkit : rainbow_onpresencechanged : ' + JSON.stringify(data));
});
// When a moderator changes the custom data of a bubble, this event is fired to all the members of the bubble (including the one who did the change)
myRainbowS2sStarterKit.events.on('rainbow_onbubblecustomdatachanged', (data) => {
    console.log('S2sStarterkit : rainbow_onbubblecustomdatachanged : ' + JSON.stringify(data));
});
// Fired when the SDK didn't succeed to reconnect and stop trying
myRainbowS2sStarterKit.events.on('rainbow_onfailed', (data) => {
    console.log('S2sStarterkit : rainbow_onfailed : ' + JSON.stringify(data));
});
*/
