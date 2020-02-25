/*
 * S2S api
 * # Rainbow S2S API guide  ## Preamble  ### Introduction  This guide describes a list of API services that are provided by the OT Rainbow S2S portal. This portal is dedicated to S2S features, providing a full REST API for Rainbow features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP verbs GET, DELETE, POST, PUT, etc. are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according to the stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, e.g. “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * The version of the OpenAPI document: 1.104.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ale.rainbow.s2s.client.s2s.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.io.Serializable;

/**
 * ApiRainbowUcsV10ConnectionsChatstate
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-02-13T18:40:45.585335+01:00[Europe/Paris]")
public class ApiRainbowUcsV10ConnectionsChatstate implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * The chat state
   */
  @JsonAdapter(StateEnum.Adapter.class)
  public enum StateEnum {
    COMPOSING("composing"),
    
    PAUSED("paused"),
    
    INACTIVE("inactive"),
    
    ACTIVE("active");

    private String value;

    StateEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StateEnum fromValue(String value) {
      for (StateEnum b : StateEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<StateEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StateEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StateEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return StateEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_STATE = "state";
  @SerializedName(SERIALIZED_NAME_STATE)
  private StateEnum state;

  public static final String SERIALIZED_NAME_CONVERSATION_ID = "conversation_id";
  @SerializedName(SERIALIZED_NAME_CONVERSATION_ID)
  private String conversationId;

  public static final String SERIALIZED_NAME_PEER = "peer";
  @SerializedName(SERIALIZED_NAME_PEER)
  private String peer;


  public ApiRainbowUcsV10ConnectionsChatstate state(StateEnum state) {
    
    this.state = state;
    return this;
  }

   /**
   * The chat state
   * @return state
  **/
  @ApiModelProperty(required = true, value = "The chat state")

  public StateEnum getState() {
    return state;
  }


  public void setState(StateEnum state) {
    this.state = state;
  }


  public ApiRainbowUcsV10ConnectionsChatstate conversationId(String conversationId) {
    
    this.conversationId = conversationId;
    return this;
  }

   /**
   * Get conversationId
   * @return conversationId
  **/
  @ApiModelProperty(example = "1555081424877876", required = true, value = "")

  public String getConversationId() {
    return conversationId;
  }


  public void setConversationId(String conversationId) {
    this.conversationId = conversationId;
  }


  public ApiRainbowUcsV10ConnectionsChatstate peer(String peer) {
    
    this.peer = peer;
    return this;
  }

   /**
   * Get peer
   * @return peer
  **/
  @ApiModelProperty(example = "59f1ecc4ea84f9b5c339958d", required = true, value = "")

  public String getPeer() {
    return peer;
  }


  public void setPeer(String peer) {
    this.peer = peer;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApiRainbowUcsV10ConnectionsChatstate apiRainbowUcsV10ConnectionsChatstate = (ApiRainbowUcsV10ConnectionsChatstate) o;
    return Objects.equals(this.state, apiRainbowUcsV10ConnectionsChatstate.state) &&
        Objects.equals(this.conversationId, apiRainbowUcsV10ConnectionsChatstate.conversationId) &&
        Objects.equals(this.peer, apiRainbowUcsV10ConnectionsChatstate.peer);
  }

  @Override
  public int hashCode() {
    return Objects.hash(state, conversationId, peer);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApiRainbowUcsV10ConnectionsChatstate {\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    conversationId: ").append(toIndentedString(conversationId)).append("\n");
    sb.append("    peer: ").append(toIndentedString(peer)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

