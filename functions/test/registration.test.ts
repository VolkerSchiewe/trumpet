import "mocha";
import {expect} from 'chai';
import * as sinon from 'sinon';
import * as validateRecaptcha from "../src/helper/validateRecaptcha"
import * as sendMail from "../src/helper/sendMail"

require('firebase-functions-test')({
  projectId: 'trumpet-dev-7521f',
}, '../keys/devKeys.json');

// TODO mock config

const cloudFunctions = require('../src/index'); // relative path to functions code

describe("Cloud functions", () => {
  it('should test register function', (done) => {
    const recaptcha = sinon.stub(validateRecaptcha, "validateRecaptcha");
    sinon.stub(sendMail, "sendMail");
    const req = {body: {name: "name", email: "email1", recaptchaToken: "token"}, protocol: "http", hostname: "example"};
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
});