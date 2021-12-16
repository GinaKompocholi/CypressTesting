import { Page } from "./page.page";


export class RedirectPage extends Page{

    constructor(urlPart: string, header: string){
        super(urlPart, header);
    }
}
export default RedirectPage