class HrefSelectionComponent{

    // chainable -> input is a dom element
    public hrefElement(inputLocator: string | Cypress.Chainable){
        return cy.get(`${inputLocator}`);
    }

    public selectHrefElement(inputLocator: string | Cypress.Chainable){
        return this.hrefElement(inputLocator).click()
    }
}

export default HrefSelectionComponent;

/* Export default VS Export class NameOfClass

                     [export default]
1. one default export per file
2. import AnyNameIChoose from "./components/hrefSelection.component";;

            [export class HrefSelectionComponent]  
1. multiple named exports per file
2. import { HrefSelectionComponent, NameSelectionComponent } from "./components/selection.component";

                     [ Both together ]
********* Export: 
-export class NameSelectionComponent{
-export default HrefSelectionComponent;

********* Iport: 
-import HrefSelectionComponent, { NameSelectionComponent as NSComponent } from "./components/hrefSelection.component";
*/