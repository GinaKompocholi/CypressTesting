import HrefSelectionComponent from "./components/hrefSelection.component";

class Homepage {

    private static pageID = '[id="content"]';
    private static pageListElements = 'ul li';
    private static pagefooter = '#page-footer';

    // HREF
    private static checkboxElement = '[href="/checkboxes"]'    
    private static dropdownElement = '[href="/dropdown"]' 
    private static redirectElement = '[href="/redirector"]'

    public checkboxHrefSelection: HrefSelectionComponent;
    public dropdownHrefSelection: HrefSelectionComponent;

    constructor(){
        this.checkboxHrefSelection = new HrefSelectionComponent;
        this.dropdownHrefSelection = new HrefSelectionComponent;
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
    
    public footerElement(){
        return cy.get(`${Homepage.pagefooter} div div`);       
    }

    public footerText(){
        return this.footerElement().invoke('text')
    }

    public selectCheckboxHref(){
        this.checkboxHrefSelection.selectHrefElement(Homepage.checkboxElement);
    }    

    public selectDropdownHref(){
        this.dropdownHrefSelection.selectHrefElement(Homepage.dropdownElement);
    }    

    public selectRedirectHref(){
        this.dropdownHrefSelection.selectHrefElement(Homepage.redirectElement);
    }        
}

export default Homepage;