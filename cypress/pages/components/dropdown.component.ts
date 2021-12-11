class DropdownComponent{


    get getDropdownForm(){
        return cy.get('select[id="dropdown"]')
    }

    get getDropdownOptions(){
        return cy.get('select[id="dropdown"] option')
        // [?] pws vriskw ola ta dropdown options oti exun text checkbox?
        // auto to locator den isxiei form[id="checkboxes"] input
    }

    public getDropdownSelectElement(){
        return cy.get('[id="dropdown"]');
    }

    public selectDropdownElement(dropdownLocator: number | Cypress.Chainable){
        return this.getDropdownSelectElement().select(`Option ${dropdownLocator}`)
    }

    public getDropdownElement(element: number){
        return cy.get(`[id="dropdown"] [value='${element}']`);
    }
}

export default DropdownComponent