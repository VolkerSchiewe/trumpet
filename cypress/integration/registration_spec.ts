describe('The User registration', function () {
  const userData = {
    firstName: "Max",
    lastName: "Muster",
    email: "max@example.com",
    phone: "0123456789",
    birthday: "01.01.2000",
    streetNumber: "Example Street 1",
    zipCity: "12345 Berlin",
    congregation: "Berlin",

    accommodationWith: "Partner"
  };

  it('successfully loads', function () {
    cy.visit('/')
  });

  it('test register guest', function () {
    cy.server();
    cy.route('POST', "/registration", []).as("registrationPost");
    const stub = cy.stub();
    cy.on('window:alert', stub);


    cy.visit('/');
    cy.get('#text-input-firstName').type(userData.firstName);
    cy.get('#text-input-lastName').type(userData.lastName);
    cy.get('#text-input-email').type(userData.email);
    cy.get('#text-input-phone').type(userData.phone);
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

    cy.get('#select-input-shirt').click();
    cy.get('#select-item-shirt-xl').click();
    cy.get('#text-input-diets').type("Vegan");

    cy.get('#btn-submit-form').click();
    cy.wait('@registrationPost')
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Anmeldung versendet! Bitte bestätige noch deine Email Adresse.');
      });
    cy.get('#text-input-firstName').should('be.empty')
  })
});