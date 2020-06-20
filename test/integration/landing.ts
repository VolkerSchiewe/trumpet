describe('The landing page', () => {
    // it('successfully loads', () => {
    // });
    it('should navigate to registration', function () {
        cy.visit('/')
        cy.get('#Anmeldung').click()
    });
});