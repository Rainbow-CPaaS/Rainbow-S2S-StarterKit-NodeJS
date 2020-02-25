/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ale.rainbow.s2s.events;

import java.util.concurrent.Flow.*;
import org.json.simple.JSONObject;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
/**
 *
 * @author jouedje
 * @param <T>
 */
public class RainbowEventSubscriber<T> implements Subscriber<T> {

    private final static Logger logger = LogManager.getLogger(RainbowEventSubscriber.class);
    private Subscription subscription;

    @Override
    public void onSubscribe(Subscription s) {
        this.subscription = s;
        this.subscription.request(1);
    }

    @Override
    public void onNext(T t) {
        logger.debug(t.toString());
        RainbowCallbackItem item = (RainbowCallbackItem) t;
        switch (item.getEventEnum()) {
            case RAINBOW_ONREADY:
                logger.debug("RAINBOW_ONREADY");
                break;
            case RAINBOW_ONCONNECTED:
                logger.debug("RAINBOW_ONCONNECTED");
                break;
            case RAINBOW_ONERROR:
                System.out.println("RAINBOW_ONERROR");
                break;
            case RAINBOW_ONMESSAGERECEIVED:
                logger.debug("RAINBOW_ONMESSAGERECEIVED");
                break;
            case RAINBOW_ONCHATSTATE:
                logger.debug("RAINBOW_ONCHATSTATE");
                break;
            case RAINBOW_ONPRESENCECHANGED:
                logger.debug("RAINBOW_ONPRESENCECHANGED");
                break;
            case RAINBOW_ONMESSAGERECEIPTREADRECEIVED:    
                logger.debug("RAINBOW_ONMESSAGERECEIPTREADRECEIVED");
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
                break;
            default:
        }
        subscription.request(1);
    }

    @Override
    public void onError(Throwable thrwbl) {
    }

    @Override
    public void onComplete() {
        logger.debug("onComplete");
    }

}
