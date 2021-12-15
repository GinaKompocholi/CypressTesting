import CheckboxComponent from "./components/checkbox.component";
import { Page } from "./page.page";

export class CheckboxPage extends Page{
    
    public checkboxComponent: CheckboxComponent;

    constructor(urlPart: string, header: string){
        super(urlPart, header);
        this.checkboxComponent = new CheckboxComponent;
    }

    public checkAllCheckboxes(){
        return this.checkboxComponent.getCheckboxOptions.then(($checkbox) => {
            this.checkboxComponent.checkCheckboxElement(cy.wrap($checkbox))
        })
    }

    public uncheckAllCheckboxes(){
        return this.checkboxComponent.getCheckboxOptions.then(($checkbox) => {
            this.checkboxComponent.uncheckCheckboxElement(cy.wrap($checkbox))
        })
    }
}
export default CheckboxPage