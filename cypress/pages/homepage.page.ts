import HrefSelectionComponent from "./components/hrefSelection.component";
import DropdownComponent from "./components/checkbox.component";

class Homepage {

    private static pageID = '[id="content"]';
    private static pageListElements = 'ul li';
    private static pagefooter = '#page-footer';
    private static totalExpectedListElements: number = 44;


    public static checkboxElement = '[href="/checkboxes"]'
    public checkboxHrefSelection: HrefSelectionComponent;
    public checkboxSelection: DropdownComponent;

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

// --------------------------------------------------------

    public selectCheckboxHref(){
        cy.get(`${Homepage.checkboxElement}`).click()
        // why is it not working?
        //return this.checkboxHrefSelection.selectHrefElement(Homepage.checkboxElement);
    }    

    public selectCheckboxOption(option: string){
        //cy.get(`${Homepage.checkboxElement}`).click()
        return this.checkboxSelection.checkDropdownElement(option)
    }   
    
}

export default Homepage;