<?php
use Flow\JSONPath\JSONPath;

class JsonHelper{

    public function __construct()
    {
        
    }
    private static function find($jsonPathQuery,$data,$idx=null){
        //$_data = json_decode($data, TRUE);
        $jsonPathData = new JSONPath($data);
        $result = $jsonPathData->find($jsonPathQuery);
        if($idx===null){
            return $result;
        }
        return $result[$idx];
    }

    public static function findMonoValue($jsonPathQuery,$data){
        return self::find($jsonPathQuery,$data,0);
    }    
    public static function findMultiValue($jsonPathQuery,$data){
        return self::find($jsonPathQuery,$data,null);
    }    
}