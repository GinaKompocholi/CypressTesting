import { Page } from "./page.page";
import RedirectComponent from "./components/redirect.component";

export class RedirectPage extends Page{
    redirectComponent = new RedirectComponent()
    constructor(urlPart: string, header: string){
        super(urlPart, header);
    }

    // div li => auto tha ferei ola ta li efoson dn exw kanei specify poio ap ola thelw
    // opote etsi exw to array kai borw na kanw
    // eArray.forEach(element => {
    //    element.invoke('href')
    //    expect($el).to.have.attr('foo', 'bar')

    //get by text [href=`status_codes/${text}`]

    public getStatusCodeListElementsHref(){
        var list: string[] = [];
        this.redirectComponent.getStatusCodeListElements.then( el =>
            list.push(cy.wrap(el).attr("href")))
        return list
    }
}
export default RedirectPage