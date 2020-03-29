import {user} from "firebase-functions/lib/providers/auth";
import Sinon from "cypress/types/sinon";

describe('The User registration', () => {
  const userData = {
    firstName: "Max",
    lastName: "Muster",
    email: "max@example.com",
    phone: "0123456789",
    birthday: "01.01.2000",
    streetNumber: "Example Street 1",
    zipCity: "12345 Berlin",
    congregation: "Berlin",
    instrumentTime: "Trumpet, 2 years",
    accommodationWith: "Partner"
  };
  let windowAlert: Cypress.Agent<Sinon.SinonStub>;

  it('successfully loads', () => {
    cy.visit('/')
  });

  it('guest succeeds with required fields', () => {
    cy.server();
    cy.route('POST', "/registration", []).as("registrationPost");

    windowAlert = cy.stub();
    cy.on('window:alert', windowAlert);

    cy.visit('/');

    cy.get('#text-input-firstName').type(userData.firstName);
    cy.get('#text-input-lastName').type(userData.lastName);
    cy.get('#text-input-email').type(userData.email);

    cy.get('#text-input-birthday').type(userData.birthday);
    cy.get('#text-input-streetNumber').type(userData.streetNumber);
    cy.get('#text-input-zipCity').type(userData.zipCity);
    cy.get('#text-input-congregation').type(userData.congregation);

    cy.get('#select-input-registrationType').click();
    cy.get('#select-item-registrationType-guest').click();
    cy.get('#select-input-arrival').click();
    cy.get('#select-item-arrival-friday-21052021').click();
    cy.get('#select-input-departure').click();
    cy.get('#select-item-departure-monday-24052021').click();

    cy.get('#radio-item-group-accommodation').click();
    cy.get('#text-input-accommodationWith').type(userData.accommodationWith);

    cy.get('#btn-submit-form').click();
    cy.wait('@registrationPost')
      .then(() => {
        expect(windowAlert.getCall(0)).to.be.calledWith('Anmeldung versendet! Bitte bestätige noch deine Email Adresse.');
      });
    cy.get('#text-input-firstName')
      .then(e => {
        expect(e.val()).to.be.eq("")
      })

  });

  it('participant succeeds with required fields', () => {
    cy.server();
    cy.route('POST', "/registration", []).as("registrationPost");
    windowAlert = cy.stub();
    cy.on('window:alert', windowAlert);

    cy.visit('/');

    cy.get('#text-input-firstName').type(userData.firstName);
    cy.get('#text-input-lastName').type(userData.lastName);
    cy.get('#text-input-email').type(userData.email);
    cy.get('#text-input-birthday').type(userData.birthday);
    cy.get('#text-input-streetNumber').type(userData.streetNumber);
    cy.get('#text-input-zipCity').type(userData.zipCity);
    cy.get('#text-input-congregation').type(userData.congregation);

    cy.get('#select-input-registrationType').click();
    cy.get('#select-item-registrationType-participant').click();
    cy.get('#select-input-voice').click();
    cy.get('#select-item-voice-alto').click();
    cy.get('#select-input-arrival').click();
    cy.get('#select-item-arrival-friday-21052021').click();
    cy.get('#select-input-departure').click();
    cy.get('#select-item-departure-monday-24052021').click();

    cy.get('#radio-item-group-accommodation').click();
    cy.get('#text-input-accommodationWith').type(userData.accommodationWith);

    cy.get('#btn-submit-form').click();
    cy.wait('@registrationPost')
      .then(() => {
        expect(windowAlert.getCall(0)).to.be.calledWith('Anmeldung versendet! Bitte bestätige noch deine Email Adresse.');
      });
    cy.get('#text-input-firstName')
      .then(e => {
        expect(e.val()).to.be.eq("")
      })

  });

  it('beginner succeeds with required fields', () => {
    cy.server();
    cy.route('POST', "/registration", []).as("registrationPost");
    windowAlert = cy.stub();
    cy.on('window:alert', windowAlert);

    cy.visit('/');

    cy.get('#text-input-firstName').type(userData.firstName);
    cy.get('#text-input-lastName').type(userData.lastName);
    cy.get('#text-input-email').type(userData.email);
    cy.get('#text-input-birthday').type(userData.birthday);
    cy.get('#text-input-streetNumber').type(userData.streetNumber);
    cy.get('#text-input-zipCity').type(userData.zipCity);
    cy.get('#text-input-congregation').type(userData.congregation);

    cy.get('#select-input-registrationType').click();
    cy.get('#select-item-registrationType-beginner').click();
    cy.get('#select-input-voice').click();
    cy.get('#select-item-voice-alto').click();
    cy.get('#text-input-instrumentTime').type(userData.instrumentTime);
    cy.get('#select-input-arrival').click();
    cy.get('#select-item-arrival-friday-21052021').click();
    cy.get('#select-input-departure').click();
    cy.get('#select-item-departure-monday-24052021').click();

    cy.get('#radio-item-group-accommodation').click();
    cy.get('#text-input-accommodationWith').type(userData.accommodationWith);

    cy.get('#btn-submit-form').click();
    cy.wait('@registrationPost')
      .then(() => {
        expect(windowAlert.getCall(0)).to.be.calledWith('Anmeldung versendet! Bitte bestätige noch deine Email Adresse.');
      });
    cy.get('#text-input-firstName')
      .then(e => {
        expect(e.val()).to.be.eq("")
      })

  });
});