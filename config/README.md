# What can you find this config directory

| Content | Description |
|------|-------------|
| **StarterKitConfig.json.same** | This is the Rainbow-S2S-Starterkit-NodeJS core engine default configuration file |
| StarterKitConfig.json.sample | This file must be copied to your bot main directory, renamed to <whatever>.json and configured according to your registration  |

## StarterKitConfig.json.sampe content

Rainbow-S2S-Starterkit-NodeJS  configuration file is used to confiure 6 main entities

| rainbow | Configures the Rainbow server host we are connecting to and tell rainbow who we are - |
| credentials | contains registerd account credentials |
| application | contains the application registration keys appID and appSecret |
| logs | contains logs enablement config |
| im | enables or disables automatic IM read acknowlegdement |
| rainbow_notification_service | configure each component (Rainbow-S2S-Starterkit-NodeJS internal proxy named ngrok or your own reverse proxy and zmq ) involved in webhook event notification |

```
{
    "rainbow": {
        "host": "https://openrainbow.net",
        "mode": "bot"
    },
    "credentials": {
        "login": "<the bot registered login>",
        "password": "<the bot password>"
    },
    "application": {
        "appID": "<the bot appID>",
        "appSecret": "<the bot appSecret>"
    },
    "logs": {
        "enableConsoleLogs": true,
        "enableFileLogs": false,
        "file": {
            "path": "/var/tmp/rainbowsdk/",
            "level": "debug"
        }
    },
    "im": {
        "sendReadReceipt": false
    },
    "rainbow_notification_service": {
        "description": "Configure Rainbow notification receiver.Possible values are [ngrok,reverse_proxy,default]. If endpoint==default, sdk internal default values will be used (ngrok :{proto:http,port:8080})",
        "endpoint": "ngrok",
        "ngrok": {
            "proto": "http",
            "port": 8080,
            "description": "This Ngrok configuraton must reflect the port and protocol configured in sdkrouter"
        },
        "reverse_proxy": {
            "url": "",
            "description": "The url will be used as callback endpoint if endpoint=reverse_proxy. Its up to the administrator to configure reverse proxy to forward requests to sdkrouter."
        },
        "sdkrouter": {
            "port": 8080,
            "protocol": "http",
            "certificates": {
                "key": "./app/certificates/s2s-sdk-key.pem",
                "cert": "./app/certificates/s2s-sdk-cert.pem"
            },
            "description": "Event service is the SDK http server receiving event callbacks (webhook events)"
        },
        "zmq": {
            "description": "zmq is a module used by sdkrouter Event service to relay (using socket) all event callbacks (webhook events) recieve from OT rainbow server",
            "port": 3000,
            "host": "127.0.0.1"
        }
    },
    "appdir": ""
}
```
