class CheckboxComponent{

    public validateLandingPage(){
        cy.url().should('contain', '/checkboxes')
        cy.get('h3').should('exist')
        cy.contains('Checkboxes')
        cy.get('#page-footer').should('exist')
    }

    public getCheckboxElement(checkboxLocator: number | Cypress.Chainable){
        return cy.get(`#checkboxes > :nth-child(${checkboxLocator})`);
    }

    public validateCheckboxOptionsNotDisabled(){
        this.getCheckboxElement(1).not('[disabled]')
        this.getCheckboxElement(3).not('[disabled]')
    }
    
    public checkCheckboxElement(dropdownLocator: number | Cypress.Chainable){
        this.getCheckboxElement(dropdownLocator).check()
    }

    public checkboxIsChecked(dropdownLocator: number | Cypress.Chainable){
        this.getCheckboxElement(dropdownLocator).should('be.checked')
    }

    public uncheckCheckbox(dropdownLocator: number | Cypress.Chainable){
        this.getCheckboxElement(dropdownLocator).uncheck()
    }

    public checkboxIsUnChecked(dropdownLocator: number | Cypress.Chainable){
        this.getCheckboxElement(dropdownLocator).should('not.be.checked')
    }



    
}

export default CheckboxComponent