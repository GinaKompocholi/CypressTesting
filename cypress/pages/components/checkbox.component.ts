/* mesa sto component de thelw tests
cy.contains('Powered by ') px auto k to should exist
to component exei ta xaraktiristika

ti borw na kanw sti checkbox page?
posa checkboxes exw, ta checkarw, uncheck
auta einai tou component
1. 
checkboxPage.page k kalw methodo px select checkbox
2. 'h
yparxei sa methodos sto checkboxPage.page k kalei ti check methodo tou component

-----
ta test actions prp na pane sto spec
ta standard checks
- pare footer
- pare header
- pare url
na klironomountai apo tin Page
(general page)
px Homepage.page extends Page
*/
class CheckboxComponent{

    
    get getCheckboxForm(){
        return cy.get('form[id="checkboxes"]')
    }

    get getCheckboxOptions(){
        return cy.get('[type="checkbox"]')
    }

    public getCheckboxElement(checkboxLocator: number | Cypress.Chainable){
        return cy.get(`#checkboxes > :nth-child(${checkboxLocator})`);
    }
    
    public findAndCheckCheckboxElement(dropdownLocator: number | Cypress.Chainable){
        this.getCheckboxElement(dropdownLocator).check()
    }
    public checkCheckboxElement(checkboxElement: Cypress.Chainable){
        checkboxElement.check()
    }

    public uncheckCheckbox(dropdownLocator){
        dropdownLocator.uncheck
    }
}

export default CheckboxComponent