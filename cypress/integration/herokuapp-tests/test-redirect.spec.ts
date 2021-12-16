/// <reference types="cypress" />
import '../../support/commands'
import Homepage from '../../pages/homepage.page';
import RedirectPage from '../../pages/redirect.page';
import RedirectComponent from '../../pages/components/redirect.component';

describe('Testing Redirect section in HeroKuapp', () => {

  const landingPageE = new Homepage();
  const redirectPageE = new RedirectPage('redirector', 'Redirection');
  const redirectComponent = new RedirectComponent();

  it('WHEN landing in redirect page: THEN redirect landing page URL, header and footer is as expected', () => {
    cy.visit('/')
    landingPageE.selectRedirectHref();
    redirectPageE.validateLandingPage()
  })

  it('WHEN clicking on Redirect link: THEN lands in Status Code Page', () => {
    redirectComponent.clickRedirectURL()
    cy.url().should('contain', 'status_codes')
  })

  it('WHEN returning to Redirect link: THEN redirect page is displayed as expected', () => {
    cy.go('back')
    redirectPageE.validateLandingPage()
  })
  
});
