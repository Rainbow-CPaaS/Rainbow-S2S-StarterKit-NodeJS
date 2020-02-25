<?php
use Ale\Rainbow\S2S\Client\S2S\Api\PresenceApi;
use Ale\Rainbow\S2S\Client\S2S\Model\Presence;
use Ale\Rainbow\S2S\Client\S2S\Model\PresenceUpdate;

class PresenceService
{

    private $presenceApi;
    private $s2sConfig;
    private $connectionService;

    public function __construct($s2sConfig, ConnectionService $connectionService)
    {
        $this->s2sConfig = $s2sConfig;
        $this->connectionService = $connectionService;
        $this->presenceApi = new PresenceApi(
            // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
            // This is optional, `GuzzleHttp\Client` will be used as default.
            new GuzzleHttp\Client(),
            $this->s2sConfig
        );
    }

    public function setInitialPresence()
    {

        $cnxInfo = $this->connectionService->connectionInfo();
        $cnx_id = $cnxInfo->getId();
        $presence_update = new PresenceUpdate(); // \Ale\Rainbow\S2S\Client\S2S\Model\PresenceUpdate | Presence data
        $presence_update->setPresence(new Presence());
        try {
            $this->presenceApi->presenceUpdate($cnx_id, $presence_update);
        } catch (Exception $e) {
            echo 'Exception when calling PresenceApi->presenceUpdate: ', $e->getMessage(), PHP_EOL;
        }
    }
}
