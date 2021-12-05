class DropdownComponent{

    private validateDropdownUrl(){
        cy.url().should('contain', '/dropdown')
    }

    private validateDropdownHeader(){
        cy.get('h3').should('exist')
        cy.contains('Dropdown List')
    }

    private validateDropdownFooter(){
        cy.get('#page-footer').should('exist')
        cy.contains('Powered by ')
    }

    private validateDropdownForm(){
        cy.get('select[id="dropdown"]').should('exist')
    }

    private validateDropdownOptions(){
        cy.get('select[id="dropdown"] option')
        .should('have.length', 3)
        // [?] pws vriskw ola ta dropdown options oti exun text checkbox?
        // auto to locator den isxiei form[id="checkboxes"] input
    }

    public validateDropdownLandingPage(){
        this.validateDropdownUrl();
        this.validateDropdownHeader();
        this.validateDropdownFooter();
        this.validateDropdownForm();
        this.validateDropdownOptions();
    }

    public validateDropdownDefaultOptionsIsDisabled(){
        cy.get('[id="dropdown"] [disabled]')
        .contains('Please select an option')
        .should('be.selected')
        .should('be.disabled')
    }

    public getDropdownSelectElement(){
        return cy.get('[id="dropdown"]');
        //return cy.get('[id="dropdown"] option:not([disabled="disabled"])');
        
    }

    public validateExpectedDropdownOptionsExist(dropdownLocator: number | Cypress.Chainable){
        this.getDropdownSelectElement()
        .select(`Option ${dropdownLocator}`)
        .invoke('val')
        .should('deep.equal', `${dropdownLocator}`)
        /*
        .should('exist')
        .select(`Option ${dropdownLocator}`)
        .should('have.value', `${dropdownLocator}`)
        .should('not.be.disabled')*/

    }   
    public validateDropdownOption(dropdownLocator: number | Cypress.Chainable){
        this.getDropdownSelectElement()
        .should('exist')
        .select(`Option ${dropdownLocator}`)
        .should('have.value', `${dropdownLocator}`)
        .should('not.be.disabled')

    }    
}

export default DropdownComponent