/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';

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
