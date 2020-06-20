describe('The landing page', () => {
    it('should navigate to registration', function () {
        cy.visit('/')
        cy.get('#Anmeldung').click()
        cy.url().should('include', '/registration')
    });
});