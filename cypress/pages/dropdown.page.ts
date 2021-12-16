import DropdownComponent from "./components/dropdown.component";
import { Page } from "./page.page";


export class DropdownPage extends Page{

    public dropdownComponent: DropdownComponent;

    constructor(urlPart: string, header: string){
        super(urlPart, header);
        this.dropdownComponent = new DropdownComponent;
    }

    public selectDropdownElement(dropdownLocator: number){
        return this.dropdownComponent.selectDropdownElement(dropdownLocator);
    }

    public getDropdownElement(element: number){
        return this.dropdownComponent.getDropdownElement(element);
    }
}

export default DropdownPage