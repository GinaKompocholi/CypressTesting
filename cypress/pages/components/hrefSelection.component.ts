class HrefSelectionComponent{

    public hrefElement(inputLocator: string | Cypress.Chainable){
        return cy.get(`${inputLocator}`);
    }

    public selectHrefElement(inputLocator: string | Cypress.Chainable){
        return this.hrefElement(inputLocator).click()
    }
}

export default HrefSelectionComponent;