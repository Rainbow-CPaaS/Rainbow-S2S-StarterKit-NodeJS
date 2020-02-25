<?php

use Ale\Rainbow\S2S\Client\AuthPortal\Api\AuthenticationApi;
use Ale\Rainbow\S2S\Client\S2S\Api\ConnectionApi;
//use AuthTool;
use Ale\Rainbow\S2S\Client\S2S\Model\ConnectionCreate;
use Ale\Rainbow\S2S\Client\S2S\Model\ConnectionCreateConnection;
use GuzzleHttp\Client as GuzClient;

class ConnectionService
{

    private $s2sConfig;
    private $authConfig;
    private $authClientApi;
    private $connectionClientApi;
    private $settingsObj;
    private $connectionInfo;
    private $callback_url;
    public function __construct($authConfig, $s2sConfig, $callback_url)
    {
        $this->callback_url = $callback_url;
        $this->guzzleHttpClient = new GuzClient();
        $this->authConfig = $authConfig;
        $this->s2sConfig = $s2sConfig;
    }

    public function authenticate()
    {
        // string | Basic <base64encode(appId:sha256(appSecretuserPassword))> (concatenation of appSecret and userPassword, hashed with sha256)
        $x_rainbow_app_auth = AuthTool::x_rainbow_app_auth(Settings::findMonoValue('$.application.appID'), Settings::findMonoValue('$.application.appSecret'), Settings::findMonoValue('credentials.password'));
        $accept = AuthTool::$accept; // string | application/json
        $x_rainbow_client = AuthTool::$x_rainbow_client; // string | the app used
        $x_rainbow_client_version = AuthTool::$x_rainbow_client_version; // string | 1.10.7
        try {
            $this->authClientApi = new AuthenticationApi(
                $this->guzzleHttpClient,
                $this->authConfig
            );
            $result = $this->authClientApi->getBasicLogin($x_rainbow_app_auth, $accept, $x_rainbow_client, $x_rainbow_client_version);
            return $result;
        } catch (Exception $e) {
            echo 'Exception when calling AuthenticationApi->getBasicLogin: ', $e->getMessage(), PHP_EOL;
            throw $e;
        }
    }

    public function connect()
    {

        try {
            $authres = $this->authenticate();
            print_r($authres['token']);
            $this->s2sConfig->setApiKeyPrefix('Authorization', 'Bearer');
            $this->s2sConfig->setApiKey('Authorization', $authres['token']);
            $this->connectionClientApi = new ConnectionApi(
                // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
                // This is optional, `GuzzleHttp\Client` will be used as default.
                $this->guzzleHttpClient,
                $this->s2sConfig
            );
            $connection = new ConnectionCreateConnection(['callback_url' => $this->callback_url]);
            $connectionCreate = new ConnectionCreate(['connection' => $connection]); // \Ale\Rainbow\Client\S2S\Model\ConnectionCreate | Connection creation data
            $res = $this->connectionClientApi->connectionCreate($connectionCreate);
            $this->connectionInfo = $res->getData();
            print_r($this->connectionInfo);
        } catch (Exception $e) {
            echo 'Exception when calling ConnectionApi->connectionCreate: ', $e->getMessage(), PHP_EOL;
        }
    }

    public function logout()
    {
        try {
            $result = $this->authClientApi->getLogout(AuthTool::$accept);
            print_r($result);
        } catch (Exception $e) {
            echo 'Exception when calling AuthenticationApi->getLogout: ', $e->getMessage(), PHP_EOL;
            throw $e;
        }
    }

    public function disconnect()
    {
        try {
            $this->logout();
        } catch (Exception $ex) {
            echo 'Exception when calling AuthenticationApi->getLogout: ', $ex->getMessage(), PHP_EOL;
        }
    }

    public function connectionInfo()
    {
        return $this->connectionInfo;
    }
}
