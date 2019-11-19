## Connect to Rainbow

S2S dev kit core engine connects to Rainbow using provided configuration file in json format.

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
        "password": "xxxxxxxx"  // To replace by your developer credentials
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
    }
}
```

### Connecting to Rainbow
---
To connect to Rainbow, you first need to initialize the S2S dev kit module - cf. [Getting Started](/#/documentation/doc/sdk/s2s-dev-kit/guides/Getting_Started)
```
'use strict';

const S2sSdk = require('Rainbow-S2S-StarterKit-NodeJS');
const starterKitConfig = require('./config/myStarterKitProjectConfig.json');
const myS2sSdk = new S2sSdk(starterKitConfig);
(async() => {
    try {
        await myS2sSdk.start().then((data) => { // when start method is called, the S2S dev kit core engine connects to rainbow 
        }).catch((e) => {
            console.error(e);
            myS2sSdk.stop();
        });
    } catch (ex) {
        console.log(ex);
    }
})();
```
