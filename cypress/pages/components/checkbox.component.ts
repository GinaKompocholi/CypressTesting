class CheckboxComponent{

    get getCheckboxForm(){
        return cy.get('form[id="checkboxes"]')
    }

    get getCheckboxOptions(){
        return cy.get('[type="checkbox"]')
    }

    public getCheckboxElement(checkboxLocator: number){
        return cy.get(`#checkboxes > :nth-child(${checkboxLocator})`);
    }

    public checkCheckboxElement(checkboxElement: number | Cypress.Chainable){
        if (isNaN(checkboxElement)){
            checkboxElement.check()
        }
        else{
            this.getCheckboxElement(checkboxElement).check()
        }
    }

    public uncheckCheckboxElement(checkboxElement: number | Cypress.Chainable){
        if (isNaN(checkboxElement)){
            checkboxElement.uncheck()
        }
        else{
            this.getCheckboxElement(checkboxElement).uncheck()
        }
    }
}
export default CheckboxComponent