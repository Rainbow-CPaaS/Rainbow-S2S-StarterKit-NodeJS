<?php
require_once('lib/Psr4autoloaderClass.php');
$loader = new Psr4AutoloaderClass();
$loader->register();
$basedir = dirname(__FILE__);
$loader->addNamespace('Ale\Rainbow\S2S\Webhook', "${basedir}/lib");
$loader->addNamespace('Ale\Rainbow\S2S\Client\S2S', "${basedir}/generated/s2s/lib");
$loader->addNamespace('Ale\Rainbow\S2S\Client\AuthPortal', "${basedir}/generated/rainbow_authent_portal/lib");
$loader->addNamespace('', "${basedir}/src");
