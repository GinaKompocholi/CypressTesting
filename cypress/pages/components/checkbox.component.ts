class CheckboxComponent{

    //setter/mutator method updates the property’s value
    //getter/accessor method returns the value of the property’s value

    get getCheckboxForm(){
        return cy.get('form[id="checkboxes"]')
    }

    get getCheckboxOptions(){
        return cy.get('[type="checkbox"]')
    }

//select checkbox by index (var:number)
// this.getCheckboxElement => array
// :eq(num_variable)



    public getCheckboxElement(checkboxLocator: number){
        return cy.get(`#checkboxes > :nth-child(${checkboxLocator})`);
    }

    // get and .check()
    public findAndCheckCheckboxElement(checkboxLocator: number){
        this.getCheckboxElement(checkboxLocator).check()
    }

    // just .check()
    public checkCheckboxElement(checkboxElement: Cypress.Chainable){
        checkboxElement.check()
    }
}

export default CheckboxComponent