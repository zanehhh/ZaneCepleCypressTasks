describe("Login test cases" , () => {
    it("Login valid user",
        () => {
            cy.visit("https://lv.sportsdirect.com/")
            cy.get('#onetrust-accept-btn-handler').click()
            cy.get('.login').click()
            cy.get('#Login_EmailAddress').type("bob.wrong@gmail.com")
            cy.get('#Login_Password').type("Password")
            cy.get('#LoginButton').click()

        });

});
Cypress.on('uncaught:exception', () => { return false })