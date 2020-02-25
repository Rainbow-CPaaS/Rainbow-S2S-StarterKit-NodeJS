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
 * ApiRainbowUcsV10ConnectionsError
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-02-13T18:40:45.585335+01:00[Europe/Paris]")
public class ApiRainbowUcsV10ConnectionsError implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private Integer code;

  public static final String SERIALIZED_NAME_REASON = "reason";
  @SerializedName(SERIALIZED_NAME_REASON)
  private String reason;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_CONVERSATION_ID = "conversation_id";
  @SerializedName(SERIALIZED_NAME_CONVERSATION_ID)
  private String conversationId;

  public static final String SERIALIZED_NAME_MSG_ID = "msg_id";
  @SerializedName(SERIALIZED_NAME_MSG_ID)
  private String msgId;


  public ApiRainbowUcsV10ConnectionsError code(Integer code) {
    
    this.code = code;
    return this;
  }

   /**
   * the error code
   * @return code
  **/
  @ApiModelProperty(example = "406", required = true, value = "the error code")

  public Integer getCode() {
    return code;
  }


  public void setCode(Integer code) {
    this.code = code;
  }


  public ApiRainbowUcsV10ConnectionsError reason(String reason) {
    
    this.reason = reason;
    return this;
  }

   /**
   * the error reason
   * @return reason
  **/
  @ApiModelProperty(example = "not-acceptable", required = true, value = "the error reason")

  public String getReason() {
    return reason;
  }


  public void setReason(String reason) {
    this.reason = reason;
  }


  public ApiRainbowUcsV10ConnectionsError description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * the error description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Only occupants are allowed to send messages to the conference", value = "the error description")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public ApiRainbowUcsV10ConnectionsError conversationId(String conversationId) {
    
    this.conversationId = conversationId;
    return this;
  }

   /**
   * Get conversationId
   * @return conversationId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1555081424877876", value = "")

  public String getConversationId() {
    return conversationId;
  }


  public void setConversationId(String conversationId) {
    this.conversationId = conversationId;
  }


  public ApiRainbowUcsV10ConnectionsError msgId(String msgId) {
    
    this.msgId = msgId;
    return this;
  }

   /**
   * the message Id
   * @return msgId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "e68d78c0-aa3a-11e9-920b-00146c8c2dd7", value = "the message Id")

  public String getMsgId() {
    return msgId;
  }


  public void setMsgId(String msgId) {
    this.msgId = msgId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApiRainbowUcsV10ConnectionsError apiRainbowUcsV10ConnectionsError = (ApiRainbowUcsV10ConnectionsError) o;
    return Objects.equals(this.code, apiRainbowUcsV10ConnectionsError.code) &&
        Objects.equals(this.reason, apiRainbowUcsV10ConnectionsError.reason) &&
        Objects.equals(this.description, apiRainbowUcsV10ConnectionsError.description) &&
        Objects.equals(this.conversationId, apiRainbowUcsV10ConnectionsError.conversationId) &&
        Objects.equals(this.msgId, apiRainbowUcsV10ConnectionsError.msgId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, reason, description, conversationId, msgId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApiRainbowUcsV10ConnectionsError {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    reason: ").append(toIndentedString(reason)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    conversationId: ").append(toIndentedString(conversationId)).append("\n");
    sb.append("    msgId: ").append(toIndentedString(msgId)).append("\n");
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

