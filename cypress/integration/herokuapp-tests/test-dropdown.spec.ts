/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';
import DropdownPage from '../../pages/dropdown.page';

describe('Testing Dropdown section in HeroKuapp', () => {

  const landingPageE = new Homepage();
  const dropdownPageE = new DropdownPage('dropdown', 'Dropdown List');
  beforeEach(() => {
    cy.visit('/')
    landingPageE.selectDropdownHref();
  });

  it('WHEN landing in dropdown page: THEN dropdown landing page URL, header and footer is as expected', () => {
    // efera ta checks eksw alla etsi de glitwnw ton diplo kodika
    dropdownPageE.validateUrl().should('contain', dropdownPageE.urlPart);
    // ginontai ta checks mesa vasi twn timwn p perasa ston constructor
    dropdownPageE.validateLandingPage()
  });

  it('WHEN landing in dropdown page: THEN dropdown landing page displayes as expected', () => {
    dropdownPageE.getDropdownForm().should('exist');
    dropdownPageE.getDropdownOptions().then(($el)  => 
    { 
      for(let index=0; index<$el.length; index++){
        if (index == 0){
          cy.wrap($el)
          .contains('Please select an option')
          .should('be.selected')
          .should('exist')
          .should('be.disabled')
        }
        else{
          cy.wrap($el)
          .contains(`Option ${index}`)
          .should('exist')
          .should('not.be.selected')
          .should('not.be.disabled')
        }
      }})    
  });


  it('WHEN selecting a dropdown element: THEN dropdown elements gets selected', () => {
    dropdownPageE.selectDropdownElement(1)
    dropdownPageE.getDropdownElement(1).should('be.selected')
    });
});
