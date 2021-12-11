import DropdownComponent from "./components/dropdown.component";
import { Page } from "./page.page";


export class DropdownPage extends Page{

    public dropdownComponent: DropdownComponent;

    constructor(urlPart: string, header: string){
        super(urlPart, header);
        this.dropdownComponent = new DropdownComponent;
    }

    // [?] Prepei na exun alla onomata oi 2 funcs?
    public getDropdownForm(){
        return this.dropdownComponent.getDropdownForm;
    }

    // [?] Prepei na exun alla onomata oi 2 funcs?
    public getDropdownOptions(){
        return this.dropdownComponent.getDropdownOptions;
    }

    public selectDropdownElement(dropdownLocator: number | Cypress.Chainable){
        return this.dropdownComponent.selectDropdownElement(dropdownLocator);
    }

    public getDropdownElement(element: number){
        return this.dropdownComponent.getDropdownElement(element);
    }
}

export default DropdownPage