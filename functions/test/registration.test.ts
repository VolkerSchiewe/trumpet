import "mocha";
import {expect} from 'chai';
import * as sinon from 'sinon';
import * as validateRecaptcha from "../src/helper/validateRecaptcha"
import * as sendMail from "../src/helper/sendMail"
import {SinonStub} from "sinon";

require('firebase-functions-test')({
  projectId: 'trumpet-dev-7521f',
}, '../keys/devKeys.json');


const cloudFunctions = require('../src/index');

describe("Registration cloud function", () => {
  let recaptcha: SinonStub<any, any>;
  let mail: SinonStub<any, any>;
  before(() => {
    recaptcha = sinon.stub(validateRecaptcha, "validateRecaptcha");
    mail = sinon.stub(sendMail, "sendMail");
  });
  afterEach(() => {
    recaptcha.resetBehavior();
    mail.resetBehavior();
  });

  it('should test registration success', (done) => {
    const req = {
      body: {name: "one", email: "one@email.com", recaptchaToken: "token"},
      protocol: "http",
      hostname: "example"
    };
    const res = {
      send: (message: string) => {
      },
      status: function (status: number) {
        expect(status).to.eq(200);
        expect(recaptcha.getCall(0).args).to.deep.eq(["token"]);
        done();
        return this
      }
    };
    cloudFunctions.checkRegistration(req, res)
  });

  it('should fail if registration is called twice with same mail', (done) => {
    const req = {
      body: {name: "two", email: "two@email.com", recaptchaToken: "token"},
      protocol: "http",
      hostname: "example"
    };
    const resFirst = {
      send: (message: string) => {
      },
      status: function (status: number) {
        return this
      }
    };
    const res = {
      send: (message: string) => {
      },
      status: function (status: number) {
        expect(status).to.eq(400);
        done();
        return this
      }
    };
    cloudFunctions.checkRegistration(req, resFirst);
    setTimeout(() => {
      cloudFunctions.checkRegistration(req, res)
    }, 1000)
  });
});