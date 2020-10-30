import userData from "../fixtures/userData";

describe('The User registration', () => {
    beforeEach(() => {
        cy.visit("/registration")
    })
    afterEach(() => {
        cy.request("/api/__delete-test-data__")
    })

    it('registration succeeds with all fields', () => {
        cy.findByLabelText('Vorname').type(userData.firstName);
        cy.findByLabelText('Nachname').type(userData.lastName);
        cy.findByLabelText('E-Mail').type(userData.email);
        cy.findByLabelText('Telefon').type(userData.phone)
        cy.findByLabelText('Geburtstag').type(userData.birthday);
        cy.findByLabelText('Straße & Hausnummer').type(userData.streetNumber);
        cy.findByLabelText('PLZ & Stadt').type(userData.zipCity);
        cy.findByLabelText('Gemeinde/Bereich').type(userData.congregation);

        cy.findByLabelText('Ich bin').click();
        cy.findByText(/Jungbläser/).click();
        cy.findByLabelText('Stimme').click()
        cy.findByText('Alt').click()
        cy.findByLabelText('Instrument & Ausbildungsdauer').type(userData.instrumentTime)
        cy.findByLabelText('Ankunft').click();
        cy.findByText(/Freitag/).click();
        cy.findByLabelText('Abreise').click();
        cy.findByText(/Montag/).click();

        cy.findByLabelText(/Massenquartier/).click();
        cy.findByLabelText('Zusammen mit').type(userData.accommodationWith);

        cy.findByLabelText('Essensbesonderheiten').type("Veg")
        cy.findByText("Vegan").click()

        cy.findByLabelText(/Bemerkungen/).type("Something")

        cy.get('form').submit();
        cy.findByText('Anmeldung fast abgeschlossen').should('exist')
        cy.findByText("OK").click()
        cy.findByLabelText('Vorname')
            .then(e => {
                expect(e.val()).to.be.eq("")
            })
    });

    it('should disable fields on load', function () {
        cy.findByLabelText("Stimme").should('not.exist')
        cy.findByLabelText("Instrument & Ausbildungsdauer").should('not.exist')
        cy.findByLabelText("Zusammen mit").should('not.exist')
    });

    it('should enable voice field for participants and beginners', function () {
        cy.findByLabelText("Ich bin").click()
        cy.findByText("Bläser*in").click()
        cy.findByLabelText("Stimme").should('exist')

        cy.findByLabelText("Ich bin").click()
        cy.findByText(/Jungbläser/).click()
        cy.findByLabelText("Stimme").should('exist')

        cy.findByLabelText("Ich bin").click()
        cy.findByText(/Gast/).click()
        cy.findByLabelText("Stimme").should('not.exist')
    });
    it('should enable instrument and time field for beginners', function () {
        cy.findByLabelText("Ich bin").click()
        cy.findByText(/Jungbläser/).click()
        cy.findByLabelText(/Instrument/).should('exist')

        cy.findByLabelText("Ich bin").click()
        cy.findByText(/Gast/).click()
        cy.findByLabelText(/Instrument/).should('not.exist')
    });

    it('should enable accommodation with field for any accommodation except none', function () {
        cy.findByLabelText(/Massenquartier/).click()
        cy.findByLabelText("Zusammen mit").should('exist')

        cy.findByLabelText(/Doppelzimmer Etagenbetten/).click()
        cy.findByLabelText("Zusammen mit").should('exist')

        cy.findByLabelText("Doppelzimmer").click()
        cy.findByLabelText("Zusammen mit").should('exist')

        cy.findByLabelText(/Familienzimmer/).click()
        cy.findByLabelText("Zusammen mit").should('exist')

        cy.findByLabelText(/keine Unterkunft/).click()
        cy.findByLabelText("Zusammen mit").should('not.exist')
    });

});