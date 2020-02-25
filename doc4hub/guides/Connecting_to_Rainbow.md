## Connect to Rainbow

S2S Starter kit core engine connects to Rainbow using provided configuration file in json format.

Copy Rainbow-S2S-StarterKit-NodeJS/config/StarterKitConfig.json.sample to your project and rename it as you want (for example myStarterKitProjectConfig.json ).

modify myStarterKitProjectConfig.json according to your registration parameters on the Hub web site.

In configuration file some parameters are related to your credentials and allow to target the Rainbow Cloud Services server to use.

```json

// Update your myStarterKitProjectConfig.json configuration file

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

### Connecting to Rainbow
---
To connect to Rainbow, you first need to initialize the S2S Starter kit module - cf. [Getting Started](/#/documentation/doc/sdk/s2s-starterkit-nodejs/guides/Getting_Started)
```
'use strict';

const S2SStarterKit = require('Rainbow-S2S-StarterKit-NodeJS');
const starterKitConfig = require('./config/myStarterKitProjectConfig.json');
const myS2SStarterKit = new S2SStarterKit(starterKitConfig);
(async() => {
    try {
        await myS2SStarterKit.start().then((data) => { // when start method is called, the S2S dev kit core engine connects to rainbow 
        }).catch((e) => {
            console.error(e);
            myS2SStarterKit.stop();
        });
    } catch (ex) {
        console.log(ex);
    }
})();
```
