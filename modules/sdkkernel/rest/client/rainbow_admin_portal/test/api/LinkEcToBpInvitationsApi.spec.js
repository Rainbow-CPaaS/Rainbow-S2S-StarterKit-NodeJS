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
    instance = new RainbowAdminPortal.LinkEcToBpInvitationsApi();
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

  describe('LinkEcToBpInvitationsApi', function() {
    describe('adminPostAcceptLinkEcToBpInvitation', function() {
      it('should call adminPostAcceptLinkEcToBpInvitation successfully', function(done) {
        //uncomment below and update the code to test adminPostAcceptLinkEcToBpInvitation
        //instance.adminPostAcceptLinkEcToBpInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminPostDeclineLinkEcToBpInvitation', function() {
      it('should call adminPostDeclineLinkEcToBpInvitation successfully', function(done) {
        //uncomment below and update the code to test adminPostDeclineLinkEcToBpInvitation
        //instance.adminPostDeclineLinkEcToBpInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminPostLinkEcToBpInvite', function() {
      it('should call adminPostLinkEcToBpInvite successfully', function(done) {
        //uncomment below and update the code to test adminPostLinkEcToBpInvite
        //instance.adminPostLinkEcToBpInvite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLinkECToBPInvitations', function() {
      it('should call getLinkECToBPInvitations successfully', function(done) {
        //uncomment below and update the code to test getLinkECToBPInvitations
        //instance.getLinkECToBPInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLinkECToBPInviteById', function() {
      it('should call getLinkECToBPInviteById successfully', function(done) {
        //uncomment below and update the code to test getLinkECToBPInviteById
        //instance.getLinkECToBPInviteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putCancelLinkEcToBpInviteById', function() {
      it('should call putCancelLinkEcToBpInviteById successfully', function(done) {
        //uncomment below and update the code to test putCancelLinkEcToBpInviteById
        //instance.putCancelLinkEcToBpInviteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resendLinkEcToBpInviteById', function() {
      it('should call resendLinkEcToBpInviteById successfully', function(done) {
        //uncomment below and update the code to test resendLinkEcToBpInviteById
        //instance.resendLinkEcToBpInviteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
