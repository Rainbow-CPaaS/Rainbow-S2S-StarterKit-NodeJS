package com.ale.rainbow.s2s;

import com.ale.rainbow.s2s.bot.EchoBot;
import com.ale.rainbow.s2s.events.RainbowCallbackItem;
//import java.util.logging.Level;
//import java.util.logging.Logger;
/**
 * Hello world!
 *
 */
/*
import org.zeromq.SocketType;
import org.zeromq.ZMQ;
import org.zeromq.ZMQ.Socket;
import org.zeromq.ZContext;
 */
import com.ale.rainbow.s2s.events.RainbowEventHandler;
import com.ale.rainbow.s2s.events.RainbowEventSubscriber;
import com.ale.rainbow.s2s.tools.JSonConfReader;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.json.simple.JSONObject;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
/**
 *
 * @author isaac
 */
public class App {

    private final static Logger logger = LogManager.getLogger(App.class);
    
    public static void main(String[] args) {
        logger.debug("Stating EchoBot nb param = "+args.length);
        Path currentRelativePath = Paths.get("");
        logger.debug("currentRelativePath = "+currentRelativePath);
        //String currentUsersHomeDir = System.getProperty("user.home");
        //String curentFullPath = currentUsersHomeDir+ File.separator +"fake"+ File.separator +"botstarter";
        String curentFullPath = currentRelativePath.toAbsolutePath().toString();
        logger.debug("curentFullPath = "+curentFullPath);
        String mainConfigRelativePath ="";
        
        String callbackUrl = "";
        if (args.length == 3) {
            callbackUrl = args[1];
            mainConfigRelativePath = args[2];
        }else{
            logger.error("Missing arguments : Usage bot_program <callabck_url> <starterkit_config_fullpath.json>");
            return;
        }
        
        try {        
            if (callbackUrl == null || callbackUrl.isEmpty()) {
                String callbackJsonFileCfg = System.getProperty("java.io.tmpdir") + File.separator + "s2s" + File.separator + "s2s_callback_url.json";
                File cfg = new File(callbackJsonFileCfg);
                if(!cfg.exists()){
                    logger.error(callbackJsonFileCfg+" not found, and no callbakc url was givven in parameter, so exit !");
                    return;
                }
                JSonConfReader jsonConfReader = new JSonConfReader();
                logger.debug(callbackJsonFileCfg);
                JSONObject jsonCallBackUrlParam = jsonConfReader.getJsonContent(callbackJsonFileCfg);
                callbackUrl = (String) jsonCallBackUrlParam.get("callback_url");
            }

            if (callbackUrl != null && callbackUrl.isEmpty()) {
                logger.error("No callback url givven !");
                return;
            }
            logger.debug("Programm parameter => callbackUrl => ["+callbackUrl+"]");

            logger.debug("Current relative path is: " + curentFullPath);
            //File zmqConfFile = new File(curentFullPath + File.separator + ".." + File.separator + "config" + File.separator + "zmq.json");
            /*
            File zmqConfFile = new File(curentFullPath + File.separator + "config" + File.separator + "zmq.json");
            if (!zmqConfFile.exists()) {
                logger.error(zmqConfFile.getAbsolutePath() + " not found !");
                return;
            }*/
            File mainConfigFile = new File(curentFullPath + File.separator + mainConfigRelativePath);
            if (!mainConfigFile.exists()) {
                logger.error(mainConfigFile.getAbsolutePath() + " not found !");
                return;
            }
            
            RainbowEventHandler rainbowEventHandler = new RainbowEventHandler(curentFullPath+ File.separator + "config");
            Thread mainThread = new Thread(rainbowEventHandler);
            /*
            RainbowEventSubscriber<RainbowCallbackItem> subscriber = new RainbowEventSubscriber();
            rainbowEventHandler.subscribe(subscriber);
            */
            EchoBot<RainbowCallbackItem> bot = new EchoBot(curentFullPath+ File.separator + "config");
            rainbowEventHandler.subscribe(bot);
            mainThread.start();

            bot.connect(callbackUrl);
            logger.debug("Rainbow event handler started");

        } catch (Exception ex) {
            logger.error("JavaBot stopped !",ex);
            //ex.printStackTrace();        
            RainbowEventHandler.stop();
        }
    }
}
