/**
 * Rainbow Enduser portal
 * # Rainbow end user portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow End user portal. This portal is dedicated to end user features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.84.0
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
    factory(root.expect, root.RainbowEnduserPortal);
  }
}(this, function(expect, RainbowEnduserPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RainbowEnduserPortal.GetRoomsSuccessData();
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

  describe('GetRoomsSuccessData', function() {
    it('should create an instance of GetRoomsSuccessData', function() {
      // uncomment below and update the code to test GetRoomsSuccessData
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be.a(RainbowEnduserPortal.GetRoomsSuccessData);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property jid (base name: "jid")', function() {
      // uncomment below and update the code to test the property jid
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property creator (base name: "creator")', function() {
      // uncomment below and update the code to test the property creator
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property customData (base name: "customData")', function() {
      // uncomment below and update the code to test the property customData
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property confEndpoints (base name: "confEndpoints")', function() {
      // uncomment below and update the code to test the property confEndpoints
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property conference (base name: "conference")', function() {
      // uncomment below and update the code to test the property conference
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property guestEmails (base name: "guestEmails")', function() {
      // uncomment below and update the code to test the property guestEmails
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property disableNotifications (base name: "disableNotifications")', function() {
      // uncomment below and update the code to test the property disableNotifications
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property activeUsersCounter (base name: "activeUsersCounter")', function() {
      // uncomment below and update the code to test the property activeUsersCounter
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "isActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

    it('should have the property autoRegister (base name: "autoRegister")', function() {
      // uncomment below and update the code to test the property autoRegister
      //var instance = new RainbowEnduserPortal.GetRoomsSuccessData();
      //expect(instance).to.be();
    });

  });

}));
