/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';
import DropdownPage from '../../pages/dropdown.page';
import DropdownComponent from '../../pages/components/dropdown.component';

describe('Testing Dropdown section in HeroKuapp', () => {

  const landingPageE = new Homepage();
  const dropdownPageE = new DropdownPage('dropdown', 'Dropdown List');
  const dropdownComponent = new DropdownComponent();
  
  beforeEach(() => {
    cy.visit('/')
    landingPageE.selectDropdownHref();
  });

  it('WHEN landing in dropdown page: THEN dropdown landing page URL, header and footer is as expected', () => {
    dropdownPageE.validateLandingPage()
  });

  it('WHEN landing in dropdown page: THEN dropdown landing page displayes as expected', () => {
    dropdownComponent.getDropdownForm.should('exist');
    dropdownComponent.getDropdownOptions.then(($el)  => 
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
