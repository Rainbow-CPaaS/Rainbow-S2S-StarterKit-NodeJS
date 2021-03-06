/*
 * Rainbow authentication portal
 * # Rainbow authentication portal API guide  ## Preamble  [Download Postman collection][0]  ### Introduction  This guide describes list of API services that are provided by OT Rainbow authentication portal system. Services are used to manage OT Rainbow authentication.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages.   HTTP request GET is used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them.   JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.    [0]: AuthenticationPortalServer_postman.json
 *
 * The version of the OpenAPI document: 1.104.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ale.rainbow.s2s.client.auth.models;

import com.ale.rainbow.s2s.client.auth.models.GetRenewSuccessProvisioningNeeded;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;


/**
 * Model tests for GetRenewSuccessProfiles
 */
public class GetRenewSuccessProfilesTest {
    private final GetRenewSuccessProfiles model = new GetRenewSuccessProfiles();

    /**
     * Model tests for GetRenewSuccessProfiles
     */
    @Test
    public void testGetRenewSuccessProfiles() {
        // TODO: test GetRenewSuccessProfiles
    }

    /**
     * Test the property 'assignationDate'
     */
    @Test
    public void assignationDateTest() {
        // TODO: test assignationDate
    }

    /**
     * Test the property 'businessModel'
     */
    @Test
    public void businessModelTest() {
        // TODO: test businessModel
    }

    /**
     * Test the property 'businessSpecific'
     */
    @Test
    public void businessSpecificTest() {
        // TODO: test businessSpecific
    }

    /**
     * Test the property 'canBeSold'
     */
    @Test
    public void canBeSoldTest() {
        // TODO: test canBeSold
    }

    /**
     * Test the property 'hasConference'
     */
    @Test
    public void hasConferenceTest() {
        // TODO: test hasConference
    }

    /**
     * Test the property 'isDefault'
     */
    @Test
    public void isDefaultTest() {
        // TODO: test isDefault
    }

    /**
     * Test the property 'isDemo'
     */
    @Test
    public void isDemoTest() {
        // TODO: test isDemo
    }

    /**
     * Test the property 'isExclusive'
     */
    @Test
    public void isExclusiveTest() {
        // TODO: test isExclusive
    }

    /**
     * Test the property 'isPrepaid'
     */
    @Test
    public void isPrepaidTest() {
        // TODO: test isPrepaid
    }

    /**
     * Test the property 'offerId'
     */
    @Test
    public void offerIdTest() {
        // TODO: test offerId
    }

    /**
     * Test the property 'offerName'
     */
    @Test
    public void offerNameTest() {
        // TODO: test offerName
    }

    /**
     * Test the property 'offerTechnicalDescription'
     */
    @Test
    public void offerTechnicalDescriptionTest() {
        // TODO: test offerTechnicalDescription
    }

    /**
     * Test the property 'prepaidDuration'
     */
    @Test
    public void prepaidDurationTest() {
        // TODO: test prepaidDuration
    }

    /**
     * Test the property 'profileId'
     */
    @Test
    public void profileIdTest() {
        // TODO: test profileId
    }

    /**
     * Test the property 'profileName'
     */
    @Test
    public void profileNameTest() {
        // TODO: test profileName
    }

    /**
     * Test the property 'provisioningNeeded'
     */
    @Test
    public void provisioningNeededTest() {
        // TODO: test provisioningNeeded
    }

    /**
     * Test the property 'status'
     */
    @Test
    public void statusTest() {
        // TODO: test status
    }

    /**
     * Test the property 'subscriptionId'
     */
    @Test
    public void subscriptionIdTest() {
        // TODO: test subscriptionId
    }

    /**
     * Test the property 'zuoraOfferId'
     */
    @Test
    public void zuoraOfferIdTest() {
        // TODO: test zuoraOfferId
    }

    /**
     * Test the property 'zuoraProductRatePlanChargeId'
     */
    @Test
    public void zuoraProductRatePlanChargeIdTest() {
        // TODO: test zuoraProductRatePlanChargeId
    }

    /**
     * Test the property 'zuoraProductRatePlanId'
     */
    @Test
    public void zuoraProductRatePlanIdTest() {
        // TODO: test zuoraProductRatePlanId
    }

}
