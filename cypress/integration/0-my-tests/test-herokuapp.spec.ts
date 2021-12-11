/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';
import CheckboxPage from '../../pages/checkbox.page';
import DropdownPage from '../../pages/dropdown.page';

describe('Navigate to HeroKuapp Homepage', () => {

  const homepageE = new Homepage();
  
  const h1Text = 'Welcome to the-internet'
  const h2Text = 'Available Examples'
  const footerText = 'Powered by Elemental Selenium'
  const totalExpectedListElements = 44;

  beforeEach(() => {
    cy.visit('/')
  });

  it('WHEN landing in Homepage: THEN correct headers are displayed', () => {
    homepageE.headerText('h1').should('equal', h1Text);
    homepageE.headerText('h2').should('equal', h2Text);
  });

  it('WHEN landing in Homepage: THEN expected amount of list items are displayed', () => {
    homepageE.getListItems().should('have.length', totalExpectedListElements)
  });

  it('WHEN landing in Homepage: THEN footer is attached in page with expected wordings ', () => {
    homepageE.footerText().should('equal', footerText);
  });
}),

describe('Testing Checkboxes section in HeroKuapp', () => {

  beforeEach(() => {
    cy.visit('/')
    landingPageE.selectCheckboxHref();
  })
  const landingPageE = new Homepage();
  const checkboxPageE = new CheckboxPage('checkboxes', 'Checkboxes');


  it('WHEN landing in checkbox page: THEN checkbox landing page URL, header and footer is as expected', () => {
    // efera ta checks eksw alla etsi de glitwnw ton diplo kodika
    checkboxPageE.validateUrl().should('contain', checkboxPageE.urlPart);
    // ginontai ta checks mesa vasi twn timwn p perasa ston constructor
    checkboxPageE.validateLandingPage()
    
  })

  it('WHEN landing in checkbox page: THEN checkbox landing page displayes as expected', () => {
    checkboxPageE.checkboxElement(3).should('be.checked');
    checkboxPageE.getCheckboxForm().should('exist');
    checkboxPageE.getCheckboxOptions().should('have.length', 2)

    // Using for
    checkboxPageE.getCheckboxOptions().then((element) => {
        for(let index=0; index<element.length; index++){
          element.not('[disabled]');
          //cy.wrap(element).check(); //it works
        }
    })

    // Using cy.wrap
    checkboxPageE.getCheckboxOptions().then(($el)  => 
    {
      //cy.wrap($el).check(); //it doesnt work
      cy.wrap($el).not('[disabled]')
    })


    // Using foreach?
    //checkboxPageE.validateCheckboxOptionsNotDisabled();

  });

  it('WHEN checking all checkbox elements: THEN all checkboxes are checked', () => {

    // [?] Giati to be.checked einai pass enw de prepei kai to not.be.checked doulevei swsta?
    checkboxPageE.getCheckboxOptions().should('be.checked');
    checkboxPageE.getCheckboxOptions().then(($el)  => 
    { cy.wrap($el).should('be.checked')})

    // both work  - [?] poio na protimisw?
    /*1*/checkboxPageE.getCheckboxOptions().then(($checkbox) => {
      cy.wrap($checkbox).uncheck().should('not.be.checked');})
    /*2*/checkboxPageE.getCheckboxOptions().check().should('be.checked')

  });
// ************************************* poio apta dio protimame? ****************************************************************
  it('WHEN checking specific checkbox element: THEN correct checkbox is checked', () => {
    checkboxPageE.checkboxElement(1).should('not.be.checked');
    checkboxPageE.findAndCheckElement(1);
    checkboxPageE.checkboxElement(1).should('be.checked');
  });

  it('WHEN checking specific checkbox element: THEN correct checkbox is checked', () => {
    checkboxPageE.checkboxElement(1).should('not.be.checked');
    checkboxPageE.checkOption(1);
    checkboxPageE.checkboxElement(1).should('be.checked');
  });

// *****************************************************************************************************
  it('WHEN unchecking all checkbox elements: THEN all checkbox elements are unchecked', () => {
    checkboxPageE.uncheckAllCheckboxes();
    checkboxPageE.getCheckboxOptions().then(($checkbox) => {
      cy.wrap($checkbox).should('not.be.checked')})
  });
// *****************************************************************************************************
  it('WHEN unchecking all checked checkbox elements: THEN all elements are unchecked', () => {
    checkboxPageE.uncheckAllCheckedCheckboxes();
    checkboxPageE.getCheckboxOptions().then(($checkbox) => {
      cy.wrap($checkbox).should('not.be.checked')})
  });
}),

describe('Testing Dropdown section in HeroKuapp', () => {

  const landingPageE = new Homepage();
  const dropdownPageeE = new DropdownPage();
  beforeEach(() => {
    cy.visit('/')
    //landingPageE.selectDropdownHref();
  });

  it('WHEN selecting dropdown list element: THEN dropdown landing page is as expected', () => {
    landingPageE.selectDropdownHref();
    dropdownPageeE.validateLandingInDropdownPage();
  });

  it('WHEN landing in dropwdown page: THEN dropdown elements appear correctly', () => {
    landingPageE.selectDropdownHref();
    dropdownPageeE.validateDropdownDefaultOptionsIsDisabled();
    dropdownPageeE.validateAllDropwdownAvailableOptions();
  });
}),

describe('Testing Redirect section in HeroKuapp', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  const landingPageE = new Homepage();
  
  it('Redirect link url works well', () => {
    landingPageE.selectRedirectHref();
    cy.go('back');
  });

});
