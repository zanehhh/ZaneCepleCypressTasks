describe("Register test cases" , () => {
    it("Register valid user",
        done => {

            cy.visit("https://www.sportsdirect.com/login?returnurl=%2f")
            cy.get("a[class='dnnPrimaryAction']").click({force: true})
            cy.get('#onetrust-accept-btn-handler').click()
            cy.get("input[name='Registration.FirstName']").type("Bob")
            cy.get("input[name='Registration.LastName']").type("Fly")
            cy.get('#Registration_EmailAddress').type("bob.fly@gmail.com")
            cy.get("select[name='Registration.DateOfBirthDay']").select("10").should("have.value", "10")
            cy.get("select[name='Registration.DateOfBirthMonth']").select("10").should("have.value", "10")
            cy.get("select[name='Registration.DateOfBirthYear']").select("2000").should("have.value", "2000")
            cy.get("input[name='Registration.Password']").type("Parolekoo1")
            cy.get("input[name='Registration.ConfirmPassword']").type("Parolekoo1")
            cy.get('#RegistrationSubmit').click()


        });
    });
Cypress.on('uncaught:exception', (err) => { return false })