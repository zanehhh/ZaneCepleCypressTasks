describe("Login test cases" , () => {
    it("Login valid user",
        done => {
            cy.visit("https://lv.sportsdirect.com/")
            cy.get('#onetrust-accept-btn-handler').click()
            cy.get('.login').click()
            cy.get('#Login_EmailAddress').type("bob.wrong@gmail.com")
            cy.get('#Login_Password').type("Password")
            cy.get('#LoginButton').click()
                .end()
        });

});
Cypress.on('uncaught:exception', (err) => { return false })