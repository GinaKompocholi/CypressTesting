/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';


describe('Navigate to HeroKuapp Homepage', () => {
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

      // [1] auto dn einai pio swsto? 
      landingPageE.headerTextShouldEqual('h1', h1Text);
      landingPageE.headerTextShouldEqual('h2', h2Text);
    });

    it('WHEN landing in Homepage: THEN expected amount of list items are displayed', () => {
      landingPageE.getListItems().should('have.length', 44)
      // [2] why does this not work?
      //landingPageE.getListItems().should('have.length', landingPageE.getTotalExpectedListElements)
    })

    // [3] dn einai pio swsto na kalesoume katheutheian func apo tin homePage.Page.ts 
    // kai na min exume locators mesa se auto to file?  
    it('WHEN landing in Homepage: THEN footer is attached in page with expected wordings ', () => {
      landingPageE.footerTextShouldEqual(footerText);   
    });

    it('WHEN selecting checkbox list element: THEN checkbox href works well - redirects to checkbox page', () => {
      landingPageE.selectCheckboxHref();
    });

  }),

describe('Testing Checkboxes section in HeroKuapp', () => {

  beforeEach(() => {
    cy.visit('/')
    landingPageE.selectCheckboxHref();
  })

    const landingPageE = new Homepage();

    it('WHEN landing in checkbox page THEN landing page is as expected', () => {
      landingPageE.validateLandingInCheckboxPage();
      landingPageE.validateCheckboxOptionsNotDisabled();
      landingPageE.validateCorrectCheckboxGotChecked(3);
      
    });

    it('WHEN checking specific checkbox element: THEN correct checkbox is checked', () => {
      landingPageE.checkCheckboxOption(1);
      landingPageE.validateCorrectCheckboxGotChecked(1);
    });

    it('WHEN unchecking all checked checkbox elements: THEN checkbox elements are unchecked', () => {
      landingPageE.uncheckAllCheckboxes();
      landingPageE.allcheckboxesAreUnChecked();
    });
    
});