<?php
class AuthTool
{
    public static $x_rainbow_client;
    public static $x_rainbow_client_version;
    public static $accept;

    public function __construct()
    {
    }

    public static function init()
    {
        self::$accept = 'application/json';
        self::$x_rainbow_client = 'bot';
        self::$x_rainbow_client_version = '1.0.0';
    }

    public static function x_rainbow_app_auth($appID, $appSecret, $userPassword)
    {
        print_r($appID);
        print_r($appSecret);
        print_r($userPassword);
        //echo "appID :${appID}\n";
        //echo "appSecretuserPassword :${appSecretuserPassword}\n";
        $appSecretuserPassword = "${appSecret}${userPassword}";
        return 'Basic ' . base64_encode($appID . ':' . hash('sha256', $appSecretuserPassword, false));
    }

    public static function basic_auth($login, $password)
    {
        return 'Basic ' . base64_encode($login . ':' . $password);
    }
}

AuthTool::init();
