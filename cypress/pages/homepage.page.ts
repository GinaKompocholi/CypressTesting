import HrefSelectionComponent from "./components/hrefSelection.component";
import CheckboxComponent from "./components/checkbox.component";
import DropdownComponent from "./components/dropdown.component"

class Homepage {

    private static pageID = '[id="content"]';
    private static pageListElements = 'ul li';
    private static pagefooter = '#page-footer';
    private static totalExpectedListElements: number = 44;


    private static checkboxElement = '[href="/checkboxes"]'    
    private static dropdownElement = '[href="/dropdown"]'
    public checkboxHrefSelection: HrefSelectionComponent;
    public checkboxSelection: CheckboxComponent;
    public dropdownHrefSelection: HrefSelectionComponent;
    public dropdownSelection: DropdownComponent
    ;

    constructor(){
        this.checkboxHrefSelection = new HrefSelectionComponent;
        this.dropdownHrefSelection = new HrefSelectionComponent;
        this.checkboxSelection = new CheckboxComponent;
        this.dropdownSelection = new DropdownComponent;
    }

    public headerElement(header:string){
        return cy.get(`${Homepage.pageID} ${header}`);       
    }

    public headerText(header:string){
        return this.headerElement(header).invoke('text')
    }

    public headerTextShouldEqual(header: string, headerText: string){
        this.headerText(header).should('equal', headerText);
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

    public footerTextShouldEqual(footerText: string){
        this.footerText().should('equal', footerText);
    }

    public checkChapter(chapter: string, partiaLink: string, id: number){
        cy.get(`:nth-child(${chapter} > a`).click()
        cy.url().should('contain', `/${partiaLink}`)
        cy.get('h3').should('exist')
        cy.get(`[id=${id}]`).should('exist')
      }



// -------------------- CHECKBOX -----------------------------------

    // navigate to Checkbox page
    public selectCheckboxHref(){
        this.checkboxHrefSelection.selectHrefElement(Homepage.checkboxElement);
    }    

    public validateLandingInCheckboxPage(){
        this.checkboxSelection.validateLandingPage();
    }

    // [?] peirazei na exun to idio onoma?
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


    public allCheckboxesAreUnChecked(){
        this.checkboxSelection.checkboxIsUnChecked(1);
        this.checkboxSelection.checkboxIsUnChecked(3);
    }
    
    //gia na mi ginei terastio auto to file de ginetai na ta kanw import apo ena allo page file?
    // px checkbox.page.ts
// -------------------- DROPDOWN -----------------------------------

    // navigate to Checkbox page
    public selectDropdownHref(){
        this.dropdownHrefSelection.selectHrefElement(Homepage.dropdownElement);
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

export default Homepage;