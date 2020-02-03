import "mocha";
import {expect} from 'chai';
import * as admin from "firebase-admin";
import {DB} from "../src/utils/constants";

require('firebase-functions-test')({
  projectId: 'trumpet-dev-7521f',
}, '../keys/devKeys.json');


const cloudFunctions = require('../src/index');

describe("verify email cloud functions", () => {
  it('should test successful verification call', (done) => {
    admin.firestore().collection(DB.PARTICIPANTS_COLLECTION).add({
      [DB.CREATED]: new Date(new Date().getTime() - 60 * 1000/* ms*/).toISOString()
    }).then(doc => {
      const req = {query: {token: doc.id}};
      const res = {
        send: (message: string) => {
        },
        status: function (status: number) {
          expect(status).to.eq(200);
          done();
          return this
        }
      };
      cloudFunctions.emailVerificationHandler(req, res);
    })

  });

  it('should test expired link', (done) => {
    admin.firestore().collection(DB.PARTICIPANTS_COLLECTION).add({
      [DB.CREATED]: new Date(new Date().getTime() - 61 * 60 * 1000/* ms*/).toISOString()
    }).then(doc => {
      const req = {query: {token: doc.id}};
      const res = {
        send: (message: string) => {
        },
        status: function (status: number) {
          expect(status).to.eq(400);
          done();
          return this
        }
      };
      cloudFunctions.emailVerificationHandler(req, res);
    })
  });

  it('should fail with wrong code', (done) => {
    const req = {query: {token: "test"}};
    const res = {
      send: (message: string) => {
      },
      status: function (status: number) {
        expect(status).to.eq(400);
        done();
        return this
      }
    };
    cloudFunctions.emailVerificationHandler(req, res);
  });
});