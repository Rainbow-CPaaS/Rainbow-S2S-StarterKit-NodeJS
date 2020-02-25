<?php
use Flow\JSONPath\JSONPath;

class Settings{

    private static $jsonSettings;
    private static $jsonPathData;
    public function __construct()
    {        
    }

    public static function init(){
        try{
        $jsonConfig = file_get_contents(__DIR__ . "/config/settings.json");
        self::$jsonSettings = json_decode($jsonConfig, TRUE); 
        print_r(self::$jsonSettings);
        self::$jsonPathData = new JSONPath(self::$jsonSettings);
        }catch(Exception $ex){
            throw $ex;
        }
    }

    private static function find($jsonPathQuery,$idx=null){
        $result = self::$jsonPathData->find($jsonPathQuery);
        if($idx===null){
            return $result;
        }
        return $result[$idx];
    }

    public static function findMonoValue($jsonPathQuery){
        return self::find($jsonPathQuery,0);
    }    
    public static function findMultiValue($jsonPathQuery){
        return self::find($jsonPathQuery,null);
    }    
}

Settings::init();