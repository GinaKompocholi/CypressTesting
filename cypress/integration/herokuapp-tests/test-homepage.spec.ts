/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';

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
});
