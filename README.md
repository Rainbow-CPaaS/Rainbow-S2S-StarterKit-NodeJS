Rainbow-S2S-StarterKit-NodeJS
================================

Welcome to the Alcatel-Lucent Enterprise Rainbow Software **S2S Starterkit (Rainbow-S2S-StarterKit-NodeJS) for NodeJS and other languages**.

The Alcatel-Lucent Enterprise (ALE) Rainbow Software Rainbow-S2S-StarterKit-NodeJS is a nodejs tool provided to help user building server backend applications (bot, agents) based on **Rainbow S2S API modules**  to interact with Rainbow server system without directly implementing the underlaying REST protocol and callback notifications mechanism.

## Preanble

This starter guide will help you :

- Understand Rainbow S2S API
- Setup Rainbow-S2S-StarterKit-NodeJS  in a linux server environnement (for other environnements,the tools used here are the same, you will have to refer to installation process for your OS)
- Subscribe to Rainbow server callback notifications and build your own server application in your chosen languange

## Beta disclaimer

Please note that this is a Beta version of the Rainbow-S2S-StarterKit-NodeJS which is still undergoing final testing before its official release. The SDK for Node.js and the documentation are provided on a "as is" and "as available" basis. Before releasing the official release, all these content can change depending on the feedback we receive in one hand and the developpement of the Rainbow official product in the other hand.

Alcatel-Lucent Enterprise will not be liable for any loss, whether such loss is direct, indirect, special or consequential, suffered by any party as a result of their use of the Rainbow SDK for Node.js, the application sample software or the documentation content.

If you encounter any bugs, lack of functionality or other problems regarding the Rainbow-S2S-StarterKit-NodeJS, the application samples or the documentation, please let us know immediately so we can rectify these accordingly. Your help in this regard is greatly appreciated.

## Prerequisites

To use the Rainbow-S2S-StarterKit-NodeJS you need an `applicationID` and a `secretKey` from the [openrainbow hub](https://hub.openrainbow.com/). These information allow you to identify your application and allow you to use the Rainbow platform. For more information, see [Applications lifecycle](https://hub.openrainbow.com/#/documentation/doc/hub/application-lifecycle) which explains what is the purpose, how to create an application and how to get the application ID and the secret key.

The `hostname` is also necessary to know which server is used: [the sandbox](https://hub.openrainbow.com/#/documentation/doc/hub/developer-sandboxed-platform) or [the production server](https://hub.openrainbow.com/#/documentation/doc/hub/get-ready-for-production)

As Rainbow-S2S-StarterKit-NodeJS is intended to be used on a server, it is recommended to have a Linux OS with those minimum components installed:

- NodeJS (see [https://nodejs.org/en/download/](https://nodejs.org/en/download/) for other OS)
- npm package manager (see [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm) for other OS)
- @openapitools/openapi-generator-cli (node component) (as an npm package the installation is the same for all OS [https://openapi-generator.tech/docs/installation/](https://openapi-generator.tech/docs/installation/))

It is also recommened to have a minimum knowlegde on OAS standard [(Open API Specification)](https://www.openapis.org/).

## What are S2S API modules used in Rainbow-S2S-StarterKit-NodeJS

Rainbow S2S module are based on REST APIs description over OpenAPI standard (via **swagger files** [openapi.yaml or openapi.json]) so user can generate client implementations in various languages and hide REST calls by manipulating objects.

User can still make direct REST calls to Rainbow S2S platform,and implement callbacks events over webhook (web server that will received POST events messages from Rainbow system) but it's not recommended.

Rainbow-S2S-StarterKit-NodeJS uses S2S generated nodejs API from S2S swagger definition and provides chat and presence communication features between server side program and Rainbow system.

### Rainbow OpenAPI Specifications files (swagger files)

Rainbow server exposes various RESTfull enpoints to help users intergrating communication features in their own applications.

Those RESTfull API endpoints are described in OAS swagger definition files.

| OAS specifications       | Description       |
|------------------|----------------------|
|  [Rainbow Authentication Portal](https://hub.openrainbow.com/api/authentication/) |         Authentication API      |
| [S2S Portal]()|           Server to server API. For the moment it is essentially used for Instant messaging communication         |
Each swagger file can be used to generate client APIs that hide all REST protocol and data consistency check.

## Rainbow-S2S-StarterKit-NodeJS composition

![S2S NodeJS Starter Kit composition](./doc4hub/images/s2s-starterkit-zmq.jpg)

S2S NodeJS StarterKit implements S2S client APIs in NodeJS to interact with Rainbow and a local REST server (to handle webhook events via callback url).
Rainbow acts as a client for the REST server (by POSTING events data on a public endpoint defined by the callbak url).

<a name="configuration-file"></a>

### Configuration file

| Configuration file |  Description |
|--------------|-----------------|
| rainbow-s2s-starterkit-nodejs/config/StarterKitConfig.json.sample | starter kit main configuration file (to rename .json and update according to your Rainbow registration params). It defines bot credentials, localhost server settings. |

Rainbow-S2S-Starterkit-NodeJS  configuration file is used to confiure 6 main entities.

| Configuration file entity |  Description |
|-----------------------|-----------------|
| rainbow | Configures the Rainbow server host we are connecting to and tells Rainbow who we are |
| credentials | contains registered account credentials |
| application | contains the application registration keys appID and appSecret |
| logs | contains logs enablement config |
| im | enables or disables automatic IM read acknowledgement |
| rainbow_notification_service | configure each component (Rainbow-S2S-Starterkit-NodeJS internal proxy named ngrok or your own reverse proxy and zmq ) involved in webhook event notification |

```json

[ config.json]
{
    "rainbow": {
        "host": "sandbox",
    },
    "credentials": {
        "login": "bot@mycompany.com",  // To replace by your developer credendials
        "password": "xxxxxxx"  // To replace by your developer credentials
    },
    // Application identifier
    "application": {
        "appID": "", // To repmace with your applicationID
        "appSecret": "", // To replace with your app secret key
    },
    // Logs options
    "logs": {
        "enableConsoleLogs": true,
        "enableFileLogs": false,
        "file": {
            "path": '/var/tmp/rainbowsdk/',
            "level": 'debug'
        }
    },
    // IM options
    "im": {
        "sendReadReceipt": false
    },
     "rainbow_notification_service": {
        "description":"Configure Rainbow notification receiver.Possible values are [ngrok,reverse_proxy,default]. If endpoint==default, sdk internal default values will be used (ngrok :{proto:http,port:8080})",
        "endpoint":"ngrok",
        "ngrok":{
            "proto":"http",
            "port":8080,
            "description":"This Ngrok configuraton must reflect the port and protocol configured in sdkrouter"
        },
        "reverse_proxy": {
            "url":"",
            "description":"The url will be used as callback endpoint if endpoint=reverse_proxy. Its up to the administrator to configure reverse proxy to forward requests to sdkrouter."
        },
        "sdkrouter": {
           "port":8080,
           "protocol":"http",
           "certificates": {
                "key": "./app/certificates/s2s-sdk-key.pem",
                "cert": "./app/certificates/s2s-sdk-cert.pem"
           },
           "description":"sdkrouter Event service is the SDK http server receiving event callbacks (webhook events)"
        },
        "zmq":{
          "description" : "zmq is a module used by sdkrouter Event service to relay (using socket) all event callbacks (webhook events) receive from Rainbow server"
          "port":3000,
          "host":"127.0.0.1"
        }
    }
}

```
### Client API (Authentication and S2S portal API )

Composed by 6 main modules ( 1 from Authentication Portal and 5 from S2S Portal) :

- Authentication (Authent Portal)
- Connection (S2S Portal)
- Conversation (S2S Portal)
- Message (S2S Portal)
- Presence (S2S Portal)
- Room (S2S Portal)

### Webhook event handler (REST server)

As automatic callbacks handling is not yet supported by OpenAPI Generators, a REST server for callback notification events must be implemented.

To do this, a new swagger file is created by extracting all callbacks specification (endpoints definition and schema) from S2S Portal.
The REST server implementation is automatically done in NodeJS using openapi-backend module.

This module validates all received data according to contract defined in swagger file and fires them in predefined events using nodejs Event core.

#### Rainbow-S2S-StarterKit-NodeJS webhook s2s events

| S2S events | Description |
| ------------------------------------- | ------------------------------------- |
| **rainbow_onconnectioncreated** | Fired when the connection with rainbow is created bot not sign in |
| **rainbow_onconnectionerror** | Fired when the connection can't be done with Rainbow (ie. issue on sign-in) |
| **rainbow_onmessagereceived** | Fired when a one-to-one message is received |
| **rainbow_onmessageserverreceiptreceived** | Fired when the message has been received by the server |
| **rainbow_onmessagereceiptreceived** | Fired when the message has been received by the recipient |
| **rainbow_onmessagereceiptreadreceived** | Fired when the message has been read by the recipient |
| **rainbow_onallmessagereceiptreceived** | Fired when the all message has been received by the recipient |
| **rainbow_onallmessagereceiptsent** | Fired when the all message has been sent to the recipient |
| **rainbow_onpresencechanged** | fired when the presence of the connected user changes |
| **rainbow_onerror** |  Fired when something goes wrong (ie: bad 'configurations' parameter, impossible to connect or reconnect, etc...) |
| **rainbow_onbubbleremoved** | Fired when a bubble the connected user is member of is deleted |
| **rainbow_onbubbleinvitationreceived** | Fired when an invitation to join a bubble is received |
| **rainbow_onready** | Fired when S2S starterkit is connected to Rainbow and ready to be used |
| **rainbow_onstarted** | Fired when the S2S starterkit has successfully started (not yet signed in) |
| **rainbow_onconnected** | Fired when the connection is successfull with Rainbow (signin complete) |
| **rainbow_onstopped** | Fired when the connection has stooped |
| **rainbow_ondisconnected** | Fired when the S2S starterkit lost the connection with Rainbow |
| **rainbow_onreconnecting** | Fired when the SDK tries to reconnect |
| **rainbow_onfailed** | Fired when the SDK didn't succeed to reconnect and stop trying |
| **rainbow_onbubbleaffiliationchanged** | Fired when a user changes his affiliation with a bubble |
| **rainbow_onconversationremoved** | Fired when a conversation is deleted |
| **rainbow_onconversationcreated** | Fired when a conversation is created |
| **rainbow_onconversationupdate** | Fired when a conversation is updated |
| **rainbow_onchatstate** | Fired when a chat state change occurs in a conversation |
| **rainbow_onreceipt** | Fired when a receipt notification occurs |

#### Webhook event forwarding using zmq

As REST embeded server with data validation over openapi-backed module can be generated in NodeJS with small footprint it would be interesting to use it when webhook is needed for other programming laguages.
We need to catch  and validate events posted by Rainbow (with the NodeJS REST server) and then fired them to a local socket so any module in any language can process them.
The S2S Starterkit webhook event handler module is used to do this  in an agnostic way via zmq.

[Zmq](https://zeromq.org/) ( Zero Message Queue ) was choosed because it's small, fast,  has a pub/sub mechanism and has API for more that 28 languages.

Here is a description from zmq website :

"ZeroMQ (also known as ØMQ, 0MQ, or zmq) looks like an **embeddable networking library** but acts like a concurrency framework. It **gives you sockets that carry atomic messages across various transports** like **in-process, inter-process, TCP, and multicast**. You can **connect sockets N-to-N** with patterns like fan-out, **pub-sub**, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its **asynchronous I/O model** gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a **score of language APIs** and **runs on most operating systems**."


## How to use Rainbow-S2S-StarterKit-NodeJS

1. Create a new directory for a project :<br/>
> mkdir myproject

2. Go into myproject and type : <br/>npm init

3. Install rainbow-s2s-starterKit-nodejs package :<br/>
> myproject$ npm install rainbow-s2s-starterKit-nodejs

4. Edit configuration file in the current project directory (myproject/config/config.json) 

Update configuration file according to your registration parameters [see section configuration file](#configuration-file).

5. Edit your main file following the sample below
```
'use strict';

const S2sStarterkit = require('rainbow-s2s-starterkit-nodejs');
const starterKitConfig = require('./config/myStarterKitProjectConfig.json');
const myS2sStarterkit = new S2sStarterkit(starterKitConfig);
(async() => {
    await myS2sStarterkit.start().then((data) => {
    }).catch((e) => {
        console.error(e);
        myS2sStarterkit.stop();
    });
})();

/*subscribe to desired Rainbow events like this*/

myS2sStarterkit.events.on('rainbow_onmessagereceived', (data) => {
    console.log('test : rainbow_onmessagereceived : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onchatstate', (data) => {
    console.log('test : rainbow_onchatstate : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onpresencechanged', (data) => {
    console.log('test : rainbow_onpresencechanged : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onbubbleaffiliationchanged', (data) => {
    console.log('test : rainbow_onbubbleaffiliationchanged : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onbubbleinvitationreceived', (data) => {
    console.log('test : rainbow_onbubbleinvitationreceived : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onroomstate', (data) => {
    console.log('test : rainbow_onroomstate : ' + JSON.stringify(data));
});
```

You can see more details and bot implementation in other languages using Rainbow-S2S-StarterKit-NodeJS on github: [Rainbow-S2S-Samples](https://github.com/Rainbow-CPaaS/Rainbow-S2S-Samples).

You have 3 samples :

- NodeJS Bot Sample
- Java BotSample
- Php Bot Sample

To use thoses samples it is required to have a linux OS or VM.

**NOTE :**
rainbow-s2s-starterkit-nodejs (and particularly its webhook events forwarder via zmq) works on all OS that support NodeJS and npm package manager.
If you want to implement your own bot on other OS in other languages, you are supposed to have the required knowledges to install your language environement and necessary tools on those OS.
