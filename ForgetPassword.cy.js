describe("Login test cases" , () => {
    it("Login valid user",
        done => {
            cy.visit("https://lv.sportsdirect.com/")
            cy.get('#onetrust-accept-btn-handler').click()
            cy.get('.login').click()
            cy.get('.ForgotPasswordLinkButton').click()
            cy.get('#EmailAddress').type("bob.fly@gmail.com")
            cy.get('#EmailRequestSubmit').click()
        });

});
Cypress.on('uncaught:exception', (err) => { return false })