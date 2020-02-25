/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ale.rainbow.s2s.events;
import org.json.simple.JSONObject;
/**
 *
 * @author jouedje
 */
public class RainbowCallbackItem {
    
    private final String eventName;
    private final JSONObject eventData;
    private final RainbowEventName enumName;
    
    public RainbowCallbackItem(String eventName,JSONObject eventData){
        this.eventName = eventName;
        this.enumName = RainbowEventName.get(eventName);
        this.eventData = eventData;
    }

    /**
     * @return the eventName
     */
    public String getEventName() {
        return eventName;
    }

    public RainbowEventName getEventEnum() {
        return enumName;
    }
    
    /**
     * @return the eventData
     */
    public JSONObject getEventData() {
        return eventData;
    }
    
    public Object ge(String key) throws Exception {
        if(eventData.containsKey(key)){
            return eventData.get(key);
        }
        throw new Exception (key+" no fount");
    }
    
    @Override
    public String toString(){
        return this.getEventName()+" :"+this.getEventData().toJSONString();
    }
    
}
