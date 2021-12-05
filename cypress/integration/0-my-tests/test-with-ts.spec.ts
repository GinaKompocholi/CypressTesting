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

    // [?] auto dn einai pio swsto? 
    landingPageE.headerTextShouldEqual('h1', h1Text);
    landingPageE.headerTextShouldEqual('h2', h2Text);
  });

  it('WHEN landing in Homepage: THEN expected amount of list items are displayed', () => {
    landingPageE.getListItems().should('have.length', 44)
    // [?] why does this not work?
    //landingPageE.getListItems().should('have.length', landingPageE.getTotalExpectedListElements)
  })

  // [?] dn einai pio swsto na kalesoume katheutheian func apo tin homePage.Page.ts 
  // kai na min exume locators mesa se auto to file?  
  it('WHEN landing in Homepage: THEN footer is attached in page with expected wordings ', () => {
    landingPageE.footerTextShouldEqual(footerText);
  });
}),

  describe('Testing Checkboxes section in HeroKuapp', () => {

    // beforeEach(() => {
    //   cy.visit('/')
    //   landingPageE.selectCheckboxHref();
    // })
    const landingPageE = new Homepage();

    it('WHEN selecting checkbox list element: THEN checkbox landing page is as expected', () => {
      landingPageE.selectCheckboxHref();
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
      landingPageE.allCheckboxesAreUnChecked();
    });

  });


describe('Testing Redirect section in HeroKuapp', () => {

  const landingPageE = new Homepage();
  beforeEach(() => {
    cy.visit('/')    
    landingPageE.selectDropdownHref();
  })

  it('Redirect link url works well', () => {
    landingPageE.checkChapter('redirector', 'redirect', 36);
    cy.go('back')
  })

});

describe('Testing Dropdown section in HeroKuapp', () => {

  const landingPageE = new Homepage();
  beforeEach(() => {
    cy.visit('/')    
    //landingPageE.selectDropdownHref();
  })

  it('WHEN selecting dropdown list element: THEN dropdown landing page is as expected', () => {
    landingPageE.selectDropdownHref();
    landingPageE.validateLandingInDropdownPage();
  });

  it('WHEN landing in dropwdown page: THEN dropdown elements appear correctly', () => {
    landingPageE.validateDropdownDefaultOptionsIsDisabled();
    landingPageE.validateAllDropwdownAvailableOptions();
  });

});