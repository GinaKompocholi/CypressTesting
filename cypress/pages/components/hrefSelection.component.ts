class HrefSelectionComponent{

    // chainable -> input is a dom element
    public hrefElement(inputLocator: string | Cypress.Chainable){
        return cy.get(`${inputLocator}`);
    }

    public selectHrefElement(inputLocator: string | Cypress.Chainable){
        return this.hrefElement(inputLocator).click()
    }
}

// default -> ???
export default HrefSelectionComponent;