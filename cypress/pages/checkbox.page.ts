import CheckboxComponent from "./components/checkbox.component";
import { Page } from "./page.page";

export class CheckboxPage extends Page{
    
    public checkboxComponent: CheckboxComponent;

    constructor(urlPart: string, header: string){
        super(urlPart, header);
        this.checkboxComponent = new CheckboxComponent;
    }

    // .check()
    public checkOption(option: number){
        return this.checkboxComponent.checkCheckboxElement(this.checkboxElement(option));
    }   

    // get and .check()
    public findAndCheckElement(option: number){
        return this.checkboxComponent.findAndCheckCheckboxElement(option);
    }   

    public checkboxElement(checkboxLocator: number){
        return this.checkboxComponent.getCheckboxElement(checkboxLocator);
    }

    public uncheckAllCheckboxes(){
        // return this.getCheckboxOptions().then((element) => {
        //     for(let index=0; index<element.length; index++){
        //         this.checkboxComponent.uncheckCheckbox(cy.wrap(element)); }
        // }) // [?] Giati de dulevei auto?

        return this.getCheckboxOptions().then(($checkbox) => {
            cy.wrap($checkbox).uncheck()
        })
    }

    public uncheckAllCheckedCheckboxes(){
        return this.getCheckboxOptions().then(($checkbox) => {
            if($checkbox.is(':checked')){
                cy.wrap($checkbox).uncheck()}
        })
    }

    public getCheckboxForm(){
        return this.checkboxComponent.getCheckboxForm
    }

    public getCheckboxOptions(){
        return this.checkboxComponent.getCheckboxOptions
    }

}
export default CheckboxPage