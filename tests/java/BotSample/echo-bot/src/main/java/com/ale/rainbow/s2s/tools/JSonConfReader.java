/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ale.rainbow.s2s.tools;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
/**
 *
 * @author jouedje
 */
public class JSonConfReader {
    
    private final JSONParser parser;
    private static final Logger logger = LogManager.getLogger(JSonConfReader.class);
    public JSonConfReader(){
         parser = new JSONParser();
    }
    
    public JSONObject getJsonContent(String fullPathName){
        Object obj;
        try {
            File f = new File(fullPathName);
            if(f.exists()){
                obj = parser.parse(new FileReader(f.getAbsolutePath()));
                return (JSONObject)obj;
            }else{
                logger.error(f.getAbsolutePath()+" not found !");
            }
            
        } catch (FileNotFoundException ex) {
            logger.error("error", ex);
        } catch (IOException | ParseException ex) {
            logger.error("error", ex);
        }
        return null;
    }
    
    public JSONObject getJsonContent(Reader reader){
        Object obj;
        try {
            obj = parser.parse(reader);
            return (JSONObject)obj;
        } catch (IOException | ParseException ex) {
            logger.error("error", ex);
        }
        return null;
    }    
}
