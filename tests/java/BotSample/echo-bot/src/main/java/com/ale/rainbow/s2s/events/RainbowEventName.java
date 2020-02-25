/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ale.rainbow.s2s.events;
import java.util.HashMap;
import java.util.Map;
/**
 *
 * @author jouedje
 */
public enum RainbowEventName {
    
    RAINBOW_ONREADY("rainbow_onready"),
    RAINBOW_ONCONNECTED("rainbow_onconnected"),
    RAINBOW_ONERROR("rainbow_onerror"),
    RAINBOW_ONMESSAGERECEIVED("rainbow_onmessagereceived"),
    RAINBOW_ONCHATSTATE("rainbow_onchatstate"),
    RAINBOW_ONPRESENCECHANGED("rainbow_onpresencechanged"),
    RAINBOW_ONROOMMEMBER("rainbow_onroommember"),
    RAINBOW_ONROOMINVITE("rainbow_onroominvite"),
    RAINBOW_ONBUBBLEINVITATIONRECEIVED("rainbow_onbubbleinvitationreceived"),
    RAINBOW_CONNECTED("rainbow_connected"),
    RAINBOW_ONRECEIPT("rainbow_onreceipt"),
    RAINBOW_ONALLRECEIPTRECIVED("rainbow_onallreceiptrecived"),
    RAINBOW_ONROOMSTATE("rainbow_onroomstate"),
    RAINBOW_ONSTOPPED("rainbow_onstopped"),
    RAINBOW_ONMESSAGERECEIPTREADRECEIVED("rainbow_onmessagereceiptreadreceived");
    
    private final String eventName;
 
    RainbowEventName(String eventName) {
        this.eventName = eventName;
    }
 
    public String getName() {
        return eventName;
    }    
    
    //Lookup table
    private static final Map<String, RainbowEventName> lookup = new HashMap();
  
    //Populate the lookup table on loading time
    static
    {
        for(RainbowEventName ren : RainbowEventName.values())
        {
            lookup.put(ren.getName(), ren);
        }
    }
  
    //This method can be used for reverse lookup purpose
    public static RainbowEventName get(String eventName) 
    {
        return lookup.get(eventName);
    }    
}
