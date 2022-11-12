describe("Login test cases" , () => {
    it("Login valid user",
        done => {
            cy.visit("https://lv.sportsdirect.com/")
            cy.get('#onetrust-accept-btn-handler').click()
            cy.get('.swiper-slide-active > a > .slideName').click()
            cy.get('.sdHomeButtonTwo > a').click()
            cy.get('.mobSortSelectorWrap > .MobSortSelector').click()
            cy.get('.mobSortSelectorWrap > .MobSortSelector > .productFilterList > :nth-child(7) > .FilterAnchor > #MobSortOptions_brand_asc').click()


        });

});
Cypress.on('uncaught:exception', (err) => { return false })