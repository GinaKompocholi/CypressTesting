/// <reference types="cypress" />
import '../../../cypress/support/commands'
import Homepage from '../../pages/homePage.Page';


describe('Navigate to HeroKuapp', () => {
    const landingPageE = new Homepage();
    const h1Text = 'Welcome to the-internet'
    const h2Text = 'Available Examples'
    const footerText = 'Powered by Elemental Selenium'
    
    
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('WHEN landing in Homepage: THEN correct headers are displayed', () => {
      landingPageE.headerText('h1').should('equal', h1Text);
      landingPageE.headerText('h2').should('equal', h2Text);
    });

    it('WHEN landing in Homepage: THEN expected amount of list items are displayed', () => {
        landingPageE.getListItems().should('have.length', 44)
        //why does this not work?
        //landingPageE.getListItems().should('have.length', landingPageE.getTotalExpectedListElements)
    })

    it('WHEN landing in Homepage: THEN footer is attached in page with expected wordings ', () => {
        cy.get('[id="page-footer"] div div').invoke('text')
        landingPageE.footerText().should('equal', footerText);
    });
  
    it('WHEN selecting dropdown list element: THEN Dropdown href works well - redirects to dropdown page', () => {
        landingPageE.selectCheckboxHref();
    });

});