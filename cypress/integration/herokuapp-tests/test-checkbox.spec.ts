/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';
import CheckboxPage from '../../pages/checkbox.page';
import DropdownPage from '../../pages/dropdown.page';

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

  it('WHEN *** landing in checkbox page: THEN checkbox landing page displayes as expected', () => {
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

    // Using cy.wrap PROTIMW auto. 
    checkboxPageE.getCheckboxOptions().then((el)  => 
    {
      //cy.wrap($el).check(); //it doesnt work
      cy.wrap(el).not('[disabled]')
    })


    // Using foreach?
    // checkboxPageE.getCheckboxOptions().forEach(checkboxOption => 
    //   checkboxOption.not('[disabled]')
    // )


  });

  it('WHEN checking all checkbox elements: THEN all checkboxes are checked', () => {

    // [?] Giati to be.checked einai pass enw de prepei kai to not.be.checked doulevei swsta?
    checkboxPageE.getCheckboxOptions().should('be.checked');
    // should have attribute checked
    //checkboxPageE.getCheckboxOptions().should('have.attribute');
    checkboxPageE.getCheckboxOptions().then(($el)  => 
    { cy.wrap($el).should('be.checked')})

    // 1 na ftiaxw checkAllCheckboxOptions k na kanw ekei klik ola
    // epeidi einai functionality tou component
  
    // 2 EDW na tsekarw oti einai checked
    // foreach option should have attr checked
    /*2*/checkboxPageE.getCheckboxOptions().check().should('be.checked')

    // akiro
    //
    checkboxPageE.getCheckboxOptions().then(($checkbox) => {
      cy.wrap($checkbox).uncheck().should('not.be.checked');})
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
  it.only('WHEN unchecking all checkbox elements: THEN all checkbox elements are unchecked', () => {
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

});
