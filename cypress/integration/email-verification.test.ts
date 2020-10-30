import userData from "../fixtures/userData";

describe("Email verification", () => {
    afterEach(() => {
        cy.request("/api/__delete-test-data__")
    })
    it('should verify registration and fail on second try', function () {
        cy.request("POST", "/api/registration", userData)
            .then(({body}) => {
                cy.visit(`/verify-mail?token=${body}`)
                cy.findByText(/Deine E-Mail Addresse wurde bestätigt./).should("exist")

                cy.visit(`/verify-mail?token=${body}`)
                cy.findByText(/bereits bestätigt/).should("exist")
            })
    })

    it('should fail for invalid link', function () {
        cy.visit(`/verify-mail?token=InvalidToken`)
        cy.findByText("Falscher Link")
    });

    it('should fail if link is expired', function () {
        // Using an old database entry
        cy.visit(`/verify-mail?token=T1ArGhThh6lBmz8OsrmE`)
        cy.findByText(/abgelaufen/)
    });
})