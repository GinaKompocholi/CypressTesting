export class Page {
    
    urlPart: string;
    header: string;

    constructor(urlPart: string, header: string){
        this.urlPart = urlPart;
        this.header = header;
    }

    // tha eixe nohma na exw tin public an tha ekana action sto element tis getter
    get getURL(){
        return cy.url()
    }

    public validateUrl(){
        return this.getURL
    }

    get getHeader(){
        return cy.get('h3')
    }

    public validateHeader(){
        this.getHeader.should('exist')
        cy.contains(this.header)
    }

    get getFooter(){
        return cy.get('#page-footer')
    }

    private validateFooter(){
        this.getFooter.should('exist')
        cy.contains('Powered by Elemental Selenium')
    }

    public validateLandingPage(){
        //this.validateUrl(); //exw ferei ta checks mesa sto spec file
        this.validateHeader();
        this.validateFooter();
    }
}

