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
    instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
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

  describe('PutPcgPbxPhoneNbShortNbSuccess', function() {
    it('should create an instance of PutPcgPbxPhoneNbShortNbSuccess', function() {
      // uncomment below and update the code to test PutPcgPbxPhoneNbShortNbSuccess
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be.a(RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess);
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property shortNumber (base name: "shortNumber")', function() {
      // uncomment below and update the code to test the property shortNumber
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property internalNumber (base name: "internalNumber")', function() {
      // uncomment below and update the code to test the property internalNumber
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property voiceMailNumber (base name: "voiceMailNumber")', function() {
      // uncomment below and update the code to test the property voiceMailNumber
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property numberE164 (base name: "numberE164")', function() {
      // uncomment below and update the code to test the property numberE164
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property pbxUserId (base name: "pbxUserId")', function() {
      // uncomment below and update the code to test the property pbxUserId
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jidIm (base name: "jid_im")', function() {
      // uncomment below and update the code to test the property jidIm
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jidTel (base name: "jid_tel")', function() {
      // uncomment below and update the code to test the property jidTel
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property jidPassword (base name: "jid_password")', function() {
      // uncomment below and update the code to test the property jidPassword
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "deviceType")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isFromSystem (base name: "isFromSystem")', function() {
      // uncomment below and update the code to test the property isFromSystem
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property pbxId (base name: "pbxId")', function() {
      // uncomment below and update the code to test the property pbxId
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property deviceName (base name: "deviceName")', function() {
      // uncomment below and update the code to test the property deviceName
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property systemId (base name: "systemId")', function() {
      // uncomment below and update the code to test the property systemId
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isMonitored (base name: "isMonitored")', function() {
      // uncomment below and update the code to test the property isMonitored
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

    it('should have the property isNomadic (base name: "isNomadic")', function() {
      // uncomment below and update the code to test the property isNomadic
      //var instance = new RainbowAdminPortal.PutPcgPbxPhoneNbShortNbSuccess();
      //expect(instance).to.be();
    });

  });

}));
