import userData from "../fixtures/userData";

describe("Email verification", () => {
    afterEach(() => {
        cy.request("/api/__delete-test-data__")
    })
    it('should verify registration', function () {
        cy.request("POST", "/api/registration", userData)
            .then(({body}) => {
                cy.visit(`/verify-mail?token=${body}`)
                cy.findByText(/Deine E-Mail Addresse wurde bestätigt./).should("exist")
                cy.wait(5000)
                cy.location('pathname').should('eq', '/')
            })
    })
})