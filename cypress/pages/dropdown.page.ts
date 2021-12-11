
import DropdownComponent from "./components/dropdown.component";

class DropdownPage{

    public dropdownSelection: DropdownComponent;

    constructor(){
        this.dropdownSelection = new DropdownComponent;
        //this.checkboxPage = new checkboxPage;
    }

    public validateLandingInDropdownPage(){
        this.dropdownSelection.validateDropdownLandingPage();
    }

    public validateDropdownDefaultOptionsIsDisabled(){
        this.dropdownSelection.validateDropdownDefaultOptionsIsDisabled();
    }
   
    public validateAllDropwdownAvailableOptions(){
        this.dropdownSelection.validateExpectedDropdownOptionsExist(1);
        this.dropdownSelection.validateExpectedDropdownOptionsExist(2);
        
    }

}

export default DropdownPage