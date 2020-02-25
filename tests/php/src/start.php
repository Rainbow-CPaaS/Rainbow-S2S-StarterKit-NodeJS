<?php
require(dirname(__FILE__).'/../vendor/autoload.php');

use Ale\Rainbow\S2S\Webhook\RainbowEventConnector;

$callback_url = '';
if (count($argv) == 1) {
	$callback_url = $argv[0];
}
$eventConnector = new RainbowEventConnector();
$echoBotInstance = new EchoBot($callback_url);
$eventConnector->subscribe($echoBotInstance);
$echoBotInstance->start();
$eventConnector->start(); // bloquant
$echoBotInstance->stop();
$eventConnector->closeEventConnector();
