<?php

use Ale\Rainbow\S2S\Webhook\RainbowEventHandlerInterface;
use Ale\Rainbow\S2S\Client\S2S\Configuration as S2SConfiguration;
use Ale\Rainbow\S2S\Client\AuthPortal\Configuration as AuthConfiguration;
use Ale\Rainbow\S2S\Webhook\RainbowEventConnector;

class EchoBot implements RainbowEventHandlerInterface
{

    private $connectionId;
    private $connectionservice;
    private $presenceService;
    private $messageService;
    private $firstTimeConnection;
    private $callback_url;
    public function __construct($callback_url = '')
    {
        $this->callback_url = $callback_url;

        if (empty($this->callback_url)) {
            $callback_file = sys_get_temp_dir() . DIRECTORY_SEPARATOR . "s2s" . DIRECTORY_SEPARATOR . "s2s_callback_url.json";
            if (file_exists($callback_file)) {
                $jsonContent = file_get_contents($callback_file);
                $jsonObj = json_decode($jsonContent, true);
                $this->callback_url = $jsonObj['callback_url'];
            } else {
                throw new Exception("${callback_file} not found !");
            }
        }
        $this->firstTimeConnection = true;
        $authConfig = AuthConfiguration::getDefaultConfiguration();
        $login = Settings::findMonoValue('$.credentials.login');
        $password = Settings::findMonoValue('$.credentials.password');
        $host = Settings::findMonoValue('$.rainbow.host');
        $authConfig->setUsername($login);
        $authConfig->setPassword($password);
        $authConfig->setHost($host);
        $s2sConfig = S2SConfiguration::getDefaultConfiguration();
        $s2sConfig->setHost($host);
        $this->connectionservice = new ConnectionService($authConfig, $s2sConfig, $this->callback_url);
        $this->presenceService = new PresenceService($s2sConfig, $this->connectionservice);
        $this->messageService = new MessageService($s2sConfig, $this->connectionservice);
    }

    public function start()
    {
        $this->connectionservice->connect();
        $this->presenceService->setInitialPresence();
    }

    public function stop()
    {
        $this->connectionservice->disconnect();
        $this->presenceService->setInitialPresence();
    }

    public function rainbow_onready($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }

    public function rainbow_onconnected($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
        if (empty($this->connectionId)) {
            $this->connectionId = $data['id'];
        }
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " " . $this->connectionId . ":\n");
    }

    public function rainbow_onerror($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }

    public function rainbow_onmessagereceived($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
        $receivedMsg = JsonHelper::findMonoValue('$.message.body', $data);
        print("Messge recived \n");
        print_r($receivedMsg);
        if (strpos($receivedMsg, "#") === 0) {
            $convId = JsonHelper::findMonoValue('$.message.conversation_id', $data);
            $this->messageService->sendMesage($convId, "php EchoBot recieved ${receivedMsg}");
        }
    }

    public function rainbow_onchatstate($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
        if ($this->firstTimeConnection === true) {
            $cstate = JsonHelper::findMonoValue('$.chatstate.state', $data);
            if ($cstate == 'active') {
                $convId = JsonHelper::findMonoValue('$.chatstate.conversation_id', $data);
                $this->messageService->sendMesage($convId, "Hello I'm php Echo Bot, please enter a sentence starting with #");
                $this->firstTimeConnection = false;
            }
        }
    }

    public function rainbow_onpresencechanged($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onroommember($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onroominvite($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onbubbleinvitationreceived($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_connected($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onreceipt($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onallreceiptrecived($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onroomstate($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
    public function rainbow_onstopped($data)
    {
        print("IN " . __CLASS__ . "::" . __FUNCTION__ . " :\n");
        print_r($data);
    }
}
