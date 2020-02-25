Rainbow-S2S-StarterKit-NodeJS
================================

Welcome to the Alcatel-Lucent Enterprise Rainbow Software **S2S Starterkit (Rainbow-S2S-StarterKit-NodeJS) for NodeJS and other languages**

The Alcatel-Lucent Enterprise (ALE) Rainbow Software Rainbow-S2S-StarterKit-NodeJS is a nodejs tool provided to help user build server backend applications (bot, agnets) based on **Rainbow S2S API modules**  to interact with Rainbow server system without directly implement the underlaying REST protocol and callback notifications mechanism.

## Preanble

This starter guide will help you :

- Understand Rainbow S2S API
- Setup Rainbow-S2S-StarterKit-NodeJS  in a linux server environnement
- Subscribe to Rainbow server callback notifications  and help you build your own server application in your choosen languange.

## Beta disclaimer

Please note that this is a Beta version of the Rainbow-S2S-StarterKit-NodeJS which is still undergoing final testing before its official release. The SDK for Node.js and the documentation are provided on a "as is" and "as available" basis. Before releasing the official release, all these content can change depending on the feedback we receive in one hand and the developpement of the Rainbow official product in the other hand.

Alcatel-Lucent Enterprise will not be liable for any loss, whether such loss is direct, indirect, special or consequential, suffered by any party as a result of their use of the Rainbow SDK for Node.js, the application sample software or the documentation content.

If you encounter any bugs, lack of functionality or other problems regarding the Rainbow-S2S-StarterKit-NodeJS, the application samples or the documentation, please let us know immediately so we can rectify these accordingly. Your help in this regard is greatly appreciated.

## Prerequisites

To use the Rainbow-S2S-StarterKit-NodeJS you need an `applicationID` and a `secretKey` from the [openrainbow hub](https://hub.openrainbow.com/). These information allow you to identify your application and allow you to use the rainbow platform. For more information, see [Applications lifecycle](https://hub.openrainbow.com/#/documentation/doc/hub/application-lifecycle) which explains what is the purpose, how to create an application and how to get the application ID and the secret key.

The `hostname` is also necessary to know which server is used: [the sandbox](https://hub.openrainbow.com/#/documentation/doc/hub/developer-sandboxed-platform) or [the production server](https://hub.openrainbow.com/#/documentation/doc/hub/get-ready-for-production)

As Rainbow-S2S-StarterKit-NodeJS is intended to be used on a server it is recommended to have a Linux OS with those minimum components installed:

- NodeJS
- npm package manager
- @openapitools/openapi-generator-cli ( node component )

It is also recommened to have a minimum knowlegde on OAS standard [(Open API Specification)](https://www.openapis.org/)

## What are S2S API modules used in Rainbow-S2S-StarterKit-NodeJS

Rainbow S2S module are based on REST APIs description over OpenAPI standard (via **swagger files** [openapi.yaml or openapi.json]) so user can generates clients inplementation in various languages and hide REST calls by manipulating objects

User can still make direct REST call to rainbow S2S plateform,and implement callbacks events over webhook (web server that will received POST events messages from rainbow system) but it not recommended

Rainbow-S2S-StarterKit-NodeJS uses S2S generated nodejs API from S2S swagger definition and provides chat and presence communication features between server side programm and Rainbow system.

### Rainbow OpenAPI Specifications files (swagger files)

Rainbow server exposes various RESTfull enpoints to help users intergrate communication features in their own appliactions

Those RESTfull API endpoints are described in OAS swagger definition files

| OAS specifications       | description       |
|------------------|----------------------|
|  [Rainbow Authent Portal](https://hub.openrainbow.com/api/authentication/) |         Authentication API      |
| [S2S Portal]()|           Server to server API, for the moment it is essentially used for Instante messaging communication         |
Each swagger file can be used to generate client APIs that hide all REST protocol and data consistency check.

## Rainbow-S2S-StarterKit-NodeJS composition

![S2S NodeJS Starter Kit composition](./doc4hub/images/s2s-starterkit-zmq.jpg)

S2S NodeJS StarterKit implements S2S client APIs in NodeJS to interact with OT Rainbow and a local REST server (to handle webhook events via callback url ) .
OT Rainbow act has a client for the REST server (by POSTING event data to it via the callbak url witch is publically exposed)

### Configuration file

| config file |  description |
|--------------|-----------------|
| rainbow-s2s-starterkit-nodejs/config/StarterKitConfig.json.sample | starter kit main configuration file (to rename .json and update according to your rainbow registration params). it defines bot credentials, localhost server settings |

Rainbow-S2S-Starterkit-NodeJS  configuration file is used to confiure 6 main entities

| config file entity |  description |
|-----------------------|-----------------|
| rainbow | Configures the Rainbow server host we are connecting to and tell rainbow who we are - |
| credentials | contains registerd account credentials |
| application | contains the application registration keys appID and appSecret |
| logs | contains logs enablement config |
| im | enables or disables automatic IM read acknowlegdement |
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
          "description" : "zmq is a module used by sdkrouter Event service to relay (using socket) all event callbacks (webhook events) recieve from OT rainbow server"
          "port":3000,
          "host":"127.0.0.1"
        }
    }
}

```
### Client API (Authentication and S2S portal API )

Composed by 6 main modules ( 1 from AuthPortal and 5 from S2S Portal)

- Authentication (Authent Portal)
- Connection (S2S Portal)
- Conversation (S2S Portal)
- Message (S2S Portal)
- Presence (S2S Portal)
- Room (S2S Portal)

### Webhook event handler (REST server)

As automatic callbacks handling is not yet supported by OpenAPI Generators, a REST server for callback notification events must be implemented

To do this, a new swagger file is created by extracting all callbacks specification (endpoints definition and schema) from S2S Portal.
The REST server implementation is automatically done in NodeJS using openapi-backend module.

This module validates all recieved data according to contract defined in swagger file and fires them in predefined events using nodejs Event core.

#### Rainbow-S2S-StarterKit-NodeJS webhook s2s events

| S2S events |
|-------------------------------------|
| rainbow_onchatstate |
| rainbow_onroommember |
| rainbow_onroominvite |
| rainbow_onbubbleinvitationreceived |
| rainbow_onconnected |
| rainbow_onreceipt |
| rainbow_onallreceiptrecived |
| rainbow_onmessagereceived |
|rainbow_onmessagereceiptreadreceived|
| rainbow_onpresencechanged |
| rainbow_onroomstate |
| rainbow_onalldeleted |
| rainbow_onconversation |

#### Webhook event forwarding using zmq

As REST embeded server with data validation over openapi-backed module can be generated in NodeJS with small footprint it may be not necessary to implement a RESTfull server every time another programming laguage is used.

The NodeJS webhook event handler can be used if we are abble to forward events in an agnostic way ( via socket for example )

[Zmq](https://zeromq.org/) ( Zero Message Queue ) was choosed to do this.

Here is a description from zmq website

ZeroMQ (also known as ØMQ, 0MQ, or zmq) looks like an **embeddable networking library** but acts like a concurrency framework. It **gives you sockets that carry atomic messages across various transports** like **in-process, inter-process, TCP, and multicast**. You can **connect sockets N-to-N** with patterns like fan-out, **pub-sub**, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its **asynchronous I/O model** gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a **score of language APIs** and **runs on most operating systems**. 


## How to use Rainbow-S2S-StarterKit-NodeJS

1. clone Rainbow-S2S-StarterKit-NodeJS
 git clone https://github.com/Rainbow-CPaaS/Rainbow-S2S-StarterKit-NodeJS.git

2. Go to Rainbow-S2S-StarterKit-NodeJS directory

3. Install dependencies by typing :<br/> npm install

4. Create a local link by typing : <br/> npm link

7. Create a new directory for a project :<br/>
> mkdir myproject

8. Go into myproject and type : <br/>npm init

9. Make Rainbow-S2S-StarterKit-NodeJS accessible to your poject by typing :</br>
> npm link \<full path to Rainbow-S2S-StarterKit-NodeJS\>

10. Copy Rainbow-S2S-StarterKit-NodeJS/config/StarterKitConfig.json.sample to your project and rename it as you want (for example myStarterKitProjectConfig.json )</br>

modify myStarterKitProjectConfig.json according to your registration parameters on the Hub web site</br>

In configuration file some parameters are related to your credentials and allow to target the Rainbow Cloud Services server to use.

[see section configuration file](#configuration-file)

Update configuration file according to your registration parameters

11. Edit your main file following the sample below
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

/*subscribe to desired rainbow events like this*/

myS2sStarterkit.events.on('rainbow_onmessagereceived', (data) => {
    console.log('test : rainbow_onmessagereceived : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onchatstate', (data) => {
    console.log('test : rainbow_onchatstate : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onpresencechanged', (data) => {
    console.log('test : rainbow_onpresencechanged : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onroommember', (data) => {
    console.log('test : rainbow_onroommember : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onroominvite', (data) => {
    console.log('test : rainbow_onroominvite : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onbubbleinvitationreceived', (data) => {
    console.log('test : rainbow_onbubbleinvitationreceived : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('connected', (data) => {
    console.log('test : connected : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onreceipt', (data) => {
    console.log('test : rainbow_onreceipt : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onallreceiptrecived', (data) => {
    console.log('test : rainbow_onallreceiptrecived : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onmessagereceiptreadreceived', (data) => {
    console.log('test : rainbow_onmessagereceiptreadreceived : ' + JSON.stringify(data));
});
myS2sStarterkit.events.on('rainbow_onroomstate', (data) => {
    console.log('test : rainbow_onroomstate : ' + JSON.stringify(data));
});
```

You can see more details and bot implementation in other languages using Rainbow-S2S-StarterKit-NodeJS on github: [Rainbow-S2S-Samples](https://github.com/Rainbow-CPaaS/Rainbow-S2S-Samples)

You have 3 samples :

- NodeJS Bot Sample
- Java BotSample
- Php Bot Sample
