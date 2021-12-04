import HrefSelectionComponent from "./components/hrefSelection.component";
import DropdownComponent from "./components/checkbox.component";

class Homepage {

    private static pageID = '[id="content"]';
    private static pageListElements = 'ul li';
    private static pagefooter = '#page-footer';
    private static totalExpectedListElements: number = 44;

    private static checkboxElement = '[href="/checkboxes"]'
    public checkboxHrefSelection: HrefSelectionComponent;
    public checkboxSelection: DropdownComponent;

    constructor(){
        this.checkboxHrefSelection = new HrefSelectionComponent;
        this.checkboxSelection = new DropdownComponent;
    }

    public headerElement(header:string){
        return cy.get(`${Homepage.pageID} ${header}`);       
    }

    public headerText(header:string){
        return this.headerElement(header).invoke('text')
    }

    public getListItems(){
        return cy.get(`${Homepage.pageListElements}`);
    }
    
    public getTotalExpectedListElements(){
        return `${Homepage.totalExpectedListElements}`
    }

    public footerElement(){
        return cy.get(`${Homepage.pagefooter} div div`);       
    }

    public footerText(){
        return this.footerElement().invoke('text')
    }

// -------------------- CHECKBOX -----------------------------------

    // navigate to Checkbox page
    public selectCheckboxHref(){
        this.checkboxHrefSelection.selectHrefElement(Homepage.checkboxElement);
    }    

    public validateLandingInCheckboxPage(){
        this.checkboxSelection.validateLandingPage();
    }

    // peirazei na exun to idio onoma?
    public validateCheckboxOptionsNotDisabled(){
        this.checkboxSelection.validateCheckboxOptionsNotDisabled();
    }

    public checkCheckboxOption(option: number){
        this.checkboxSelection.checkCheckboxElement(option);
    }   

    public validateCorrectCheckboxGotChecked(option: number){
        this.checkboxSelection.checkboxIsChecked(option);
    }

    public uncheckAllCheckboxes(){
        this.checkboxSelection.uncheckCheckbox(1);
        this.checkboxSelection.uncheckCheckbox(3);
    }


    public allcheckboxesAreUnChecked(){
        this.checkboxSelection.checkboxIsUnChecked(1);
        this.checkboxSelection.checkboxIsUnChecked(3);
    }
    
}

export default Homepage;