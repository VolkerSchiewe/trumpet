describe("Email verification", () => {
    it('should verify registration', function () {
        // This item already exists in the database
        const token = "ArIF2lYinBU3yfdUGdE2"
        cy.visit(`/verify-mail?token=${token}`)
        cy.findByText(/Max Muster/).should("exist")
    });
})