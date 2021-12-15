/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';
import CheckboxPage from '../../pages/checkbox.page';
import CheckboxComponent from '../../pages/components/checkbox.component';

describe('Testing Checkboxes section in HeroKuapp', () => {

  beforeEach(() => {
    cy.visit('/')
    landingPageE.selectCheckboxHref();
  })
  const landingPageE = new Homepage();
  const checkboxPageE = new CheckboxPage('checkboxes', 'Checkboxes');
  const checkboxComponent = new CheckboxComponent();

  it('WHEN landing in checkbox page: THEN checkbox landing page URL, header and footer is as expected', () => {
    checkboxPageE.validateLandingPage()
  })

  it('WHEN landing in checkbox page: THEN checkbox landing page appears as expected', () => {
    checkboxComponent.getCheckboxElement(3).should('be.checked');
    checkboxComponent.getCheckboxForm.should('exist');
    checkboxPageE.getCheckboxOptions().should('have.length', 2)
    checkboxPageE.getCheckboxOptions().then((el)  => 
    {
      cy.wrap(el).should('not.contain', 'Disabled').should('not.be.disabled')
    })
  });

  it('WHEN checking specific checkbox element: THEN correct checkbox is checked', () => {
    checkboxComponent.getCheckboxElement(1).should('not.be.checked');
    checkboxComponent.checkCheckboxElement(1);
    checkboxComponent.getCheckboxElement(1).should('be.checked');
  });
  
  it.only('WHEN checking all checkbox elements: THEN all checkbox elements are checked', () => {
    checkboxPageE.checkAllCheckboxes();
    checkboxPageE.getCheckboxOptions().then(($checkbox) => {
      cy.wrap($checkbox).should('be.checked')})
    checkboxPageE.getCheckboxOptions().then(($checkbox) =>
    { cy.wrap($checkbox).should('have.attr', 'checked')})
  });
  
  it('WHEN unchecking all checked checkbox elements: THEN all elements are unchecked', () => {
    checkboxPageE.uncheckAllCheckboxes();
    checkboxPageE.getCheckboxOptions().then(($checkbox) => {
      cy.wrap($checkbox).should('not.be.checked')})
    checkboxPageE.getCheckboxOptions().then(($checkbox) =>
      { cy.wrap($checkbox).should('not.have.attr', 'checked')})
  });

});
