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
 * ApiRainbowUcsV10ConnectionsPresence
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-02-13T18:40:45.585335+01:00[Europe/Paris]")
public class ApiRainbowUcsV10ConnectionsPresence implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_FROM = "from";
  @SerializedName(SERIALIZED_NAME_FROM)
  private String from;

  public static final String SERIALIZED_NAME_RESOURCE = "resource";
  @SerializedName(SERIALIZED_NAME_RESOURCE)
  private String resource;

  /**
   * presence &#39;show&#39; attribute
   */
  @JsonAdapter(ShowEnum.Adapter.class)
  public enum ShowEnum {
    AWAY("away"),
    
    CHAT("chat"),
    
    DND("dnd"),
    
    XA("xa");

    private String value;

    ShowEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ShowEnum fromValue(String value) {
      for (ShowEnum b : ShowEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ShowEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ShowEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ShowEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ShowEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_SHOW = "show";
  @SerializedName(SERIALIZED_NAME_SHOW)
  private ShowEnum show;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private String status;


  public ApiRainbowUcsV10ConnectionsPresence from(String from) {
    
    this.from = from;
    return this;
  }

   /**
   * Get from
   * @return from
  **/
  @ApiModelProperty(example = "59f1ecc4ea84f9b5c339958d", required = true, value = "")

  public String getFrom() {
    return from;
  }


  public void setFrom(String from) {
    this.from = from;
  }


  public ApiRainbowUcsV10ConnectionsPresence resource(String resource) {
    
    this.resource = resource;
    return this;
  }

   /**
   * the presence emitting resource
   * @return resource
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "web_win_1.57.6_O3MRXPqy", value = "the presence emitting resource")

  public String getResource() {
    return resource;
  }


  public void setResource(String resource) {
    this.resource = resource;
  }


  public ApiRainbowUcsV10ConnectionsPresence show(ShowEnum show) {
    
    this.show = show;
    return this;
  }

   /**
   * presence &#39;show&#39; attribute
   * @return show
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "away", value = "presence 'show' attribute")

  public ShowEnum getShow() {
    return show;
  }


  public void setShow(ShowEnum show) {
    this.show = show;
  }


  public ApiRainbowUcsV10ConnectionsPresence status(String status) {
    
    this.status = status;
    return this;
  }

   /**
   * presence &#39;status&#39; attribute
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "out for lunch", value = "presence 'status' attribute")

  public String getStatus() {
    return status;
  }


  public void setStatus(String status) {
    this.status = status;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApiRainbowUcsV10ConnectionsPresence apiRainbowUcsV10ConnectionsPresence = (ApiRainbowUcsV10ConnectionsPresence) o;
    return Objects.equals(this.from, apiRainbowUcsV10ConnectionsPresence.from) &&
        Objects.equals(this.resource, apiRainbowUcsV10ConnectionsPresence.resource) &&
        Objects.equals(this.show, apiRainbowUcsV10ConnectionsPresence.show) &&
        Objects.equals(this.status, apiRainbowUcsV10ConnectionsPresence.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(from, resource, show, status);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApiRainbowUcsV10ConnectionsPresence {\n");
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    resource: ").append(toIndentedString(resource)).append("\n");
    sb.append("    show: ").append(toIndentedString(show)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

