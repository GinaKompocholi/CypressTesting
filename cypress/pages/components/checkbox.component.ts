class CheckboxComponent{

    public drodownElement(dropdownLocator: string | Cypress.Chainable){
        return cy.get(`${dropdownLocator}`);
    }

    public selectDropdownElement(dropdownLocator: string | Cypress.Chainable){
        return this.drodownElement(dropdownLocator).click()
    }

    public verifyDropdownElementsValidity(dropdownLocator: string | Cypress.Chainable){
        return this.drodownElement(dropdownLocator)
    }
    
    public checkDropdownElement(dropdownLocator: string | Cypress.Chainable){
        return this.drodownElement(dropdownLocator).check()
    }
}

export default CheckboxComponent