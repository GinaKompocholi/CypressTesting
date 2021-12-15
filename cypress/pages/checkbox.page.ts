import CheckboxComponent from "./components/checkbox.component";
import { Page } from "./page.page";

export class CheckboxPage extends Page{
    
    public checkboxComponent: CheckboxComponent;

    constructor(urlPart: string, header: string){
        super(urlPart, header);
        this.checkboxComponent = new CheckboxComponent;
    }

    public checkAllCheckboxes(){
        return this.getCheckboxOptions().then(($checkbox) => {
            this.checkboxComponent.checkCheckboxElement(cy.wrap($checkbox))
        })
    }

    public uncheckAllCheckboxes(){
        return this.getCheckboxOptions().then(($checkbox) => {
            this.checkboxComponent.uncheckCheckboxElement(cy.wrap($checkbox))
        })
    }

    public getCheckboxOptions(){
        return this.checkboxComponent.getCheckboxOptions
    }

}
export default CheckboxPage