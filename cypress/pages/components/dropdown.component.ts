class DropdownComponent{


    get getDropdownForm(){
        return cy.get('select[id="dropdown"]')
    }

    get getDropdownOptions(){
        return cy.get('select[id="dropdown"] option')
    }

    public getDropdownSelectElement(){
        return cy.get('[id="dropdown"]');
    }

    public selectDropdownElement(dropdownLocator: number){
        return this.getDropdownSelectElement().select(`Option ${dropdownLocator}`)
    }

    public getDropdownElement(element: number){
        return cy.get(`[id="dropdown"] [value='${element}']`);
    }
}

export default DropdownComponent