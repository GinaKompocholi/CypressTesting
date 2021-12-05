class CheckboxComponent{

    private validateUrl(){
        cy.url().should('contain', '/checkboxes')
    }

    private validateHeader(){
        cy.get('h3').should('exist')
        cy.contains('Checkboxes')
    }

    private validateFooter(){
        cy.get('#page-footer').should('exist')
        cy.contains('Powered by ')
    }

    private validateCheckboxForm(){
        cy.get('form[id="checkboxes"]').should('exist')
    }

    private validateCheckboxOptions(){
        cy.get('form[id="checkboxes"] input')
        .should('have.length', 2)
        // [5] pws vriskw ola ta checkbox options oti exun text checkbox?
        // auto to locator den isxiei form[id="checkboxes"] input
    }

    public validateLandingPage(){
        this.validateUrl();
        this.validateHeader();
        this.validateFooter();
        this.validateCheckboxForm();
        this.validateCheckboxOptions();
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