class CheckboxComponent{

    //setter/mutator method updates the property’s value
    //getter/accessor method returns the value of the property’s value

    get getCheckboxForm(){
        return cy.get('form[id="checkboxes"]')
    }

    get getCheckboxOptions(){
        return cy.get('[type="checkbox"]')
    }

    public getCheckboxElement(checkboxLocator: number | Cypress.Chainable){
        return cy.get(`#checkboxes > :nth-child(${checkboxLocator})`);
    }

    // get and .check()
    public findAndCheckCheckboxElement(dropdownLocator: number | Cypress.Chainable){
        this.getCheckboxElement(dropdownLocator).check()
    }
    // just .check()
    public checkCheckboxElement(checkboxElement: Cypress.Chainable){
        checkboxElement.check()
    }
}

export default CheckboxComponent