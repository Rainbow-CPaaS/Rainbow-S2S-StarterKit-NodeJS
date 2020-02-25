<?php
use Ale\Rainbow\S2S\Client\S2S\Api\MessageApi;
use Ale\Rainbow\S2S\Client\S2S\Model\MessageCreate;
use Ale\Rainbow\S2S\Client\S2S\Model\MessageCreateMessage;

class MessageService
{

    private $s2sConfig;
    private $connectionService;
    private $messageApi;

    public function __construct($s2sConfig, $connectionService)
    {
        $this->s2sConfig = $s2sConfig;
        $this->connectionService = $connectionService;
        $this->messageApi = new MessageApi(
            // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
            // This is optional, `GuzzleHttp\Client` will be used as default.
            new GuzzleHttp\Client(),
            $this->s2sConfig
        );
    }

    public function sendMesage($convId, $msg)
    {
        try {
            $cnxInfo = $this->connectionService->connectionInfo();
            $cnx_id = $cnxInfo->getId();
            $message_create = new MessageCreate(); // \Ale\Rainbow\S2S\Client\S2S\Model\MessageCreate | Message data
            $message = new MessageCreateMessage(['body' => $msg]);
            $message_create->setMessage($message);

            $result = $this->messageApi->messageCreate($cnx_id, $convId, $message_create);
            print_r($result);
        } catch (Exception $e) {
            echo 'Exception when calling MessageApi->messageCreate: ', $e->getMessage(), PHP_EOL;
        }

    }
}
