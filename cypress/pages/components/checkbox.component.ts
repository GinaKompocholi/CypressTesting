class CheckboxComponent{

    get getCheckboxForm(){
        return cy.get('form[id="checkboxes"]')
    }

    get getCheckboxOptions(){
        return cy.get('[type="checkbox"]')
    }

//select checkbox by index (var:number)
// this.getCheckboxElement => array
// :eq(num_variable)

    public getCheckboxElement(checkboxLocator: number | Cypress.Chainable){
        return cy.get(`#checkboxes > :nth-child(${checkboxLocator})`);
    }

    public checkCheckboxElement(checkboxElement: number | Cypress.Chainable){
        this.getCheckboxElement(checkboxElement).check()
    }

    public uncheckCheckboxElement(checkboxElement: number | Cypress.Chainable){
        this.getCheckboxElement(checkboxElement).uncheck()
    }
}

export default CheckboxComponent