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
 * Attachment data
 */
@ApiModel(description = "Attachment data")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-02-13T18:40:45.585335+01:00[Europe/Paris]")
public class Attachment implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  private String url;

  public static final String SERIALIZED_NAME_SIZE = "size";
  @SerializedName(SERIALIZED_NAME_SIZE)
  private Integer size;

  public static final String SERIALIZED_NAME_MIME = "mime";
  @SerializedName(SERIALIZED_NAME_MIME)
  private String mime;

  public static final String SERIALIZED_NAME_FILENAME = "filename";
  @SerializedName(SERIALIZED_NAME_FILENAME)
  private String filename;


  public Attachment url(String url) {
    
    this.url = url;
    return this;
  }

   /**
   * Attachment URL
   * @return url
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Attachment URL")

  public String getUrl() {
    return url;
  }


  public void setUrl(String url) {
    this.url = url;
  }


  public Attachment size(Integer size) {
    
    this.size = size;
    return this;
  }

   /**
   * Attachment size
   * @return size
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Attachment size")

  public Integer getSize() {
    return size;
  }


  public void setSize(Integer size) {
    this.size = size;
  }


  public Attachment mime(String mime) {
    
    this.mime = mime;
    return this;
  }

   /**
   * Attachment mime type
   * @return mime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Attachment mime type")

  public String getMime() {
    return mime;
  }


  public void setMime(String mime) {
    this.mime = mime;
  }


  public Attachment filename(String filename) {
    
    this.filename = filename;
    return this;
  }

   /**
   * Attachment filename
   * @return filename
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Attachment filename")

  public String getFilename() {
    return filename;
  }


  public void setFilename(String filename) {
    this.filename = filename;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Attachment attachment = (Attachment) o;
    return Objects.equals(this.url, attachment.url) &&
        Objects.equals(this.size, attachment.size) &&
        Objects.equals(this.mime, attachment.mime) &&
        Objects.equals(this.filename, attachment.filename);
  }

  @Override
  public int hashCode() {
    return Objects.hash(url, size, mime, filename);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Attachment {\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    mime: ").append(toIndentedString(mime)).append("\n");
    sb.append("    filename: ").append(toIndentedString(filename)).append("\n");
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

