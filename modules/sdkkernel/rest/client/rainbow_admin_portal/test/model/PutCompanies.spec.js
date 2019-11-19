/**
 * Rainbow admin portal
 * # Rainbow administrator portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow management portal system. Services are used to manage OT Rainbow system entities  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.82.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RainbowAdminPortal);
  }
}(this, function(expect, RainbowAdminPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowAdminPortal.PutCompanies();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PutCompanies', function() {
    it('should create an instance of PutCompanies', function() {
      // uncomment below and update the code to test PutCompanies
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be.a(RainbowAdminPortal.PutCompanies);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property catalogId (base name: "catalogId")', function() {
      // uncomment below and update the code to test the property catalogId
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property visibleBy (base name: "visibleBy")', function() {
      // uncomment below and update the code to test the property visibleBy
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property adminEmail (base name: "adminEmail")', function() {
      // uncomment below and update the code to test the property adminEmail
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property supportEmail (base name: "supportEmail")', function() {
      // uncomment below and update the code to test the property supportEmail
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property companyContactId (base name: "companyContactId")', function() {
      // uncomment below and update the code to test the property companyContactId
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property userSelfRegisterEnabled (base name: "userSelfRegisterEnabled")', function() {
      // uncomment below and update the code to test the property userSelfRegisterEnabled
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property userSelfRegisterAllowedDomains (base name: "userSelfRegisterAllowedDomains")', function() {
      // uncomment below and update the code to test the property userSelfRegisterAllowedDomains
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property slogan (base name: "slogan")', function() {
      // uncomment below and update the code to test the property slogan
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property economicActivityClassification (base name: "economicActivityClassification")', function() {
      // uncomment below and update the code to test the property economicActivityClassification
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property giphyEnabled (base name: "giphyEnabled")', function() {
      // uncomment below and update the code to test the property giphyEnabled
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property customData (base name: "customData")', function() {
      // uncomment below and update the code to test the property customData
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpId (base name: "bpId")', function() {
      // uncomment below and update the code to test the property bpId
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property adminHasRightToUpdateSubscriptions (base name: "adminHasRightToUpdateSubscriptions")', function() {
      // uncomment below and update the code to test the property adminHasRightToUpdateSubscriptions
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property adminAllowedUpdateSubscriptionsOps (base name: "adminAllowedUpdateSubscriptionsOps")', function() {
      // uncomment below and update the code to test the property adminAllowedUpdateSubscriptionsOps
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property isBP (base name: "isBP")', function() {
      // uncomment below and update the code to test the property isBP
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpType (base name: "bpType")', function() {
      // uncomment below and update the code to test the property bpType
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpBusinessModel (base name: "bpBusinessModel")', function() {
      // uncomment below and update the code to test the property bpBusinessModel
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpApplicantNumber (base name: "bpApplicantNumber")', function() {
      // uncomment below and update the code to test the property bpApplicantNumber
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpCRDid (base name: "bpCRDid")', function() {
      // uncomment below and update the code to test the property bpCRDid
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpHasRightToSell (base name: "bpHasRightToSell")', function() {
      // uncomment below and update the code to test the property bpHasRightToSell
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpHasRightToConnect (base name: "bpHasRightToConnect")', function() {
      // uncomment below and update the code to test the property bpHasRightToConnect
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property bpIsContractAccepted (base name: "bpIsContractAccepted")', function() {
      // uncomment below and update the code to test the property bpIsContractAccepted
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property externalReference (base name: "externalReference")', function() {
      // uncomment below and update the code to test the property externalReference
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property externalReference2 (base name: "externalReference2")', function() {
      // uncomment below and update the code to test the property externalReference2
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property avatarShape (base name: "avatarShape")', function() {
      // uncomment below and update the code to test the property avatarShape
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property isCentrex (base name: "isCentrex")', function() {
      // uncomment below and update the code to test the property isCentrex
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

    it('should have the property companyCallNumber (base name: "companyCallNumber")', function() {
      // uncomment below and update the code to test the property companyCallNumber
      //var instance = new RainbowAdminPortal.PutCompanies();
      //expect(instance).to.be();
    });

  });

}));
