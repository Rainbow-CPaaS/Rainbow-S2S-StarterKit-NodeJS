/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ale.rainbow.s2s.bot;

import com.ale.rainbow.s2s.tools.JSonConfReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import com.ale.rainbow.s2s.client.auth.ApiClient;
import com.ale.rainbow.s2s.client.auth.ApiException;
import com.ale.rainbow.s2s.client.auth.Configuration;
import com.ale.rainbow.s2s.client.auth.*;
import com.ale.rainbow.s2s.client.auth.models.*;
import com.ale.rainbow.s2s.client.auth.api.AuthenticationApi;
import com.ale.rainbow.s2s.client.auth.models.GetBasicLoginSuccess;

//import com.ale.rainbow.s2s.client.s2s.ApiClient;
//import com.ale.rainbow.s2s.client.s2s.ApiException;
//import com.ale.rainbow.s2s.client.s2s.Configuration;
import com.ale.rainbow.s2s.client.s2s.*;
import com.ale.rainbow.s2s.client.s2s.models.*;
import com.ale.rainbow.s2s.client.s2s.api.ConnectionApi;
import com.ale.rainbow.s2s.client.s2s.api.MessageApi;
import com.ale.rainbow.s2s.client.s2s.api.PresenceApi;
import com.ale.rainbow.s2s.client.s2s.auth.ApiKeyAuth;
import com.ale.rainbow.s2s.events.RainbowCallbackItem;
import com.ale.rainbow.s2s.events.RainbowEventHandler;

import com.ale.rainbow.s2s.tools.AuthTool;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.Flow.*;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
/**
 *
 * @author jouedje
 */
public class EchoBot<T> implements Subscriber<T> {

    private JSonConfReader jsonConfReader;
    private JSONObject settings;
    private JSONObject rainbowSettings;
    private JSONObject jsonCredSettings;
    private JSONObject jsonAppSettings;
    private ConnectionApi connectionApi;
    private AuthenticationApi authApi;
    private PresenceApi presenceApi;
    private MessageApi messageApi;
    private ConnectionCreateResponse connectionInfo;
    private com.ale.rainbow.s2s.client.s2s.ApiClient s2sClient;
    private com.ale.rainbow.s2s.client.auth.ApiClient authClient;
    private String token;
    private Subscription subscription;
    static final Logger logger = LogManager.getLogger(EchoBot.class);
    private static boolean fistTimeConnecton = true;
    
    public EchoBot(String fullPathConfig) {
        this.jsonConfReader = new JSonConfReader();
        this.s2sClient = com.ale.rainbow.s2s.client.s2s.Configuration.getDefaultApiClient();
        this.authClient = com.ale.rainbow.s2s.client.auth.Configuration.getDefaultApiClient();
        this.settings = this.jsonConfReader.getJsonContent(fullPathConfig);
        this.rainbowSettings  = (JSONObject) this.settings.get("rainbow");     
        this.jsonCredSettings  = (JSONObject) this.settings.get("credentials");     
        this.jsonAppSettings  = (JSONObject) this.settings.get("application");     
        this.authClient.setBasePath ((String) rainbowSettings.get("host"));         
        this.s2sClient.setBasePath ((String) rainbowSettings.get("host"));
    }

    public GetBasicLoginSuccess authenticate() {
        // Configure HTTP basic authorization: Basic
        com.ale.rainbow.s2s.client.auth.auth.HttpBasicAuth Basic = (com.ale.rainbow.s2s.client.auth.auth.HttpBasicAuth) authClient.getAuthentication("Basic");
        Basic.setUsername((String) this.jsonCredSettings.get("login"));
        Basic.setPassword((String) this.jsonCredSettings.get("password"));
        if(authApi==null){
            authApi = new AuthenticationApi(authClient);
        }
        String xRainbowAppAuth = AuthTool.xRainbowAppAuth((String) jsonAppSettings.get("appID"), (String) jsonAppSettings.get("appSecret"), (String) jsonCredSettings.get("password"));//"xRainbowAppAuth_example"; // String | Basic <base64encode(appId:sha256(appSecretuserPassword))> (concatenation of appSecret and userPassword, hashed with sha256)
        String accept = "application/json"; // String | application/json
        String xRainbowClient = "java_bot"; // String | the app used
        String xRainbowClientVersion = "1.0.0"; // String | 1.10.7
        logger.debug("xRainbowAppAuth :" + xRainbowAppAuth);
        logger.debug("xRainbowClient :" + xRainbowClient);
        logger.debug("xRainbowClientVersion :" + xRainbowClientVersion);
        try {
            logger.debug("Authenticating ...");
            GetBasicLoginSuccess result = this.authApi.getBasicLogin(xRainbowAppAuth, accept, xRainbowClient, xRainbowClientVersion);
            logger.debug("Autthnetication result :");
            logger.debug(result);
            return result;
        } catch (com.ale.rainbow.s2s.client.auth.ApiException e) {
            logger.error("Exception when calling AuthenticationApi#getBasicLogin");
            logger.error("Status code: " + e.getCode());
            logger.error("Reason: " + e.getResponseBody());
            logger.error("Response headers: " + e.getResponseHeaders());
        }
        return null;
    }
    
    public boolean connect(final String callbackUrl) {
        boolean res = false;
        String callback_url=callbackUrl;
        /*
        if(callbackUrl!= null && !callbackUrl.isEmpty()){
            callback_url = callbackUrl;
        }else{
            String callbackJsonFileCfg = System.getProperty("java.io.tmpdir") + File.separator + "s2s" + File.separator + "s2s_callback_url.json";
            logger.debug(callbackJsonFileCfg);
            JSONObject jsonCallBackUrlParam = this.jsonConfReader.getJsonContent(callbackJsonFileCfg);
            callback_url = (String) jsonCallBackUrlParam.get("callback_url");
        }*/
        GetBasicLoginSuccess result = authenticate();

        if (result != null) {
            this.token = result.getToken();
            logger.debug(token);            
            ApiKeyAuth Bearer = (ApiKeyAuth) s2sClient.getAuthentication("Bearer");
            //Bearer.setApiKey((String) jsonAppSettings.get("appID"));
            Bearer.setApiKey(token);
            // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
            Bearer.setApiKeyPrefix("Bearer");
            
            if(connectionApi==null){
                connectionApi = new ConnectionApi(s2sClient);
            }
            ConnectionCreate connectionCreate = new ConnectionCreate(); // ConnectionCreate | Connection creation data            
            ConnectionCreateConnection connection = new ConnectionCreateConnection();
            connection.setCallbackUrl(callback_url);
            connection.setResource("");
            connectionCreate.setConnection(connection);
            logger.debug("ConnectionCreate :");
            logger.debug(connectionCreate);
            try {
                connectionInfo = connectionApi.connectionCreate(connectionCreate);
                logger.debug(connectionInfo);
                sendDefaultPresence();
                res = true;

            } catch (com.ale.rainbow.s2s.client.s2s.ApiException ex) {
                logger.error("failed to connect",ex);
            }
        }
        return res;
    }

    private void sendDefaultPresence() {
        if(presenceApi==null){
            presenceApi = new PresenceApi(s2sClient);
        }
        String cnxId = connectionInfo.getData().getId(); // String | Connection id
        PresenceUpdate presenceUpdate = new PresenceUpdate(); // PresenceUpdate | Presence data
        Presence presence = new Presence();
        presenceUpdate.setPresence(presence);
        try {
            presenceApi.presenceUpdate(cnxId, presenceUpdate);
        } catch (com.ale.rainbow.s2s.client.s2s.ApiException e) {
            logger.error("Exception when calling PresenceApi#presenceUpdate",e);
            logger.error("Status code: " + e.getCode());
            logger.error("Reason: " + e.getResponseBody());
            logger.error("Response headers: " + e.getResponseHeaders());
        }
    }
    
    public void sendMessage(String convId,String msg){
        logger.debug("In sendMessage");
        if(messageApi==null){
            messageApi = new MessageApi(s2sClient);
        }
        try {
            MessageCreate messageCreate = new MessageCreate();
            MessageCreateMessage message = new MessageCreateMessage();
            message.setBody(msg);
            messageCreate.setMessage(message);
            String cnxId = connectionInfo.getData().getId();
            messageApi.messageCreate(cnxId, convId, messageCreate);
            logger.debug("Out sendMessage");
        } catch (com.ale.rainbow.s2s.client.s2s.ApiException e) {
            logger.error("Exception when calling MessageApi#mesageCreate",e);
            logger.error("Status code: " + e.getCode());
            logger.error("Reason: " + e.getResponseBody());
            logger.error("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
    
    

    @Override
public void onSubscribe(Subscription s) {
        this.subscription = s;
        this.subscription.request(1);
    }

    @Override
public void onNext(T t) {
    try{
        logger.debug(t.toString());
        System.out.println(t.toString());
        RainbowCallbackItem item = (RainbowCallbackItem) t;
        switch (item.getEventEnum()) {
            case RAINBOW_ONREADY:
                logger.debug("RAINBOW_ONREADY");
                break;
            case RAINBOW_ONCONNECTED:
                logger.debug("RAINBOW_ONCONNECTED");
                break;
            case RAINBOW_ONERROR:
                logger.debug("RAINBOW_ONERROR");
                break;
            case RAINBOW_ONMESSAGERECEIVED:
                logger.debug("RAINBOW_ONMESSAGERECEIVED");
                JSONObject jsonMsgItem = item.getEventData();
                JSONObject jsonMsg = (JSONObject)jsonMsgItem.get("message");
                String recievedMsg = (String)jsonMsg.get("body");
                if(recievedMsg.indexOf("#")==0){
                    logger.debug(recievedMsg);
                    String convId = (String)jsonMsg.get("conversation_id");
                    logger.debug("Echo bot a reçu le message "+((String)jsonMsg.get("body")));
                    this.sendMessage(convId,"Echo bot a reçu le message "+((String)jsonMsg.get("body")));
                }else{
                    logger.debug(jsonMsgItem);
                }
                break;
            case RAINBOW_ONCHATSTATE:
                logger.debug("RAINBOW_ONCHATSTATE");
                JSONObject jsonMsgItem1 = item.getEventData();
                String state = (String)((JSONObject)jsonMsgItem1.get("chatstate")).get("state");
                logger.debug("state = "+state);
                if(EchoBot.fistTimeConnecton==true){                    
                        EchoBot.fistTimeConnecton = false;
                        String convId = (String)((JSONObject)jsonMsgItem1.get("chatstate")).get("conversation_id");
                        this.sendMessage(convId,"Hello I'm Java Echo Bot, please enter a sentence starting with #");
                }
                break;
            case RAINBOW_ONPRESENCECHANGED:
                logger.debug("RAINBOW_ONPRESENCECHANGED");
                break;
            case RAINBOW_ONROOMMEMBER:
                logger.debug("RAINBOW_ONROOMMEMBER");
                break;
            case RAINBOW_ONROOMINVITE:
                logger.debug("RAINBOW_ONROOMINVITE");
                break;
            case RAINBOW_ONBUBBLEINVITATIONRECEIVED:
                logger.debug("RAINBOW_ONBUBBLEINVITATIONRECEIVED");
                break;
            case RAINBOW_CONNECTED:
                logger.debug("RAINBOW_CONNECTED");
                break;
            case RAINBOW_ONRECEIPT:
                logger.debug("RAINBOW_ONRECEIPT");
                break;
            case RAINBOW_ONALLRECEIPTRECIVED:
                logger.debug("RAINBOW_ONALLRECEIPTRECIVED");
                break;
            case RAINBOW_ONROOMSTATE:
                logger.debug("RAINBOW_ONROOMSTATE");
                break;
            case RAINBOW_ONSTOPPED:
                logger.debug("RAINBOW_ONSTOPPED");
                RainbowEventHandler.stop();
                break;
            default:
        }
        subscription.request(1);
    }catch(Exception ex){
        logger.error("error",ex);
        ex.printStackTrace();
    }
    }

    @Override
public void onError(Throwable thrwbl) {
    }

    @Override
public void onComplete() {
        logger.debug("onComplete");
    }    
}
