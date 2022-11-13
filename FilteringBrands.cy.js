describe("Login test cases" , () => {
    it("Login valid user",
        () => {
            cy.visit("https://lv.sportsdirect.com/")
            cy.get('#onetrust-accept-btn-handler').click()
            cy.get('.swiper-slide-active > a > .slideName').click()
            cy.get('.sdHomeButtonTwo > a').click()
            cy.get('#filterByMob').click()
            cy.get(':nth-child(3) > #CollapseDiv > .mobFiltInnerWrap > :nth-child(1) > .FilterCollapseImage')
            cy.get('#filterlist > :nth-child(3)').click()
            cy.get('[data-productname="Puma"] > .FilterAnchor > .SelectableFilter').click()
            cy.get('#mobappfltrs > .textIconWrap').click()
            cy.get('#filterByMob').click()
            cy.get('.filtersSet > #CollapseDiv > .mobFiltInnerWrap > :nth-child(1) > .mobSortDesc > .productFilterTitle').click()
                cy.get('.selectedFiltersGroupInner > .selectedFilter > .selectedFilterToggle').click()
                cy.get('[data-productname="Ugg"] > .FilterAnchor > .SelectableFilter').click()
                cy.get('#mobappfltrs > .textIconWrap > :nth-child(2)').click()
        });

});
Cypress.on('uncaught:exception', () => { return false })