export class Page {
    
    urlPart: string;
    header: string;

    constructor(urlPart: string, header: string){
        this.urlPart = urlPart;
        this.header = header;
    }

    get getURL(){
        return cy.url()
    }

    public validateUrl(){
        return this.getURL.should('contain', this.urlPart);
    }

    get getHeader(){
        return cy.get('h3')
    }

    public validateHeader(){
        this.getHeader.should('exist')
        cy.contains(this.header)
        return
    }

    get getFooter(){
        return cy.get('#page-footer')
    }

    private validateFooter(){
        this.getFooter.should('exist')
        cy.contains('Powered by Elemental Selenium')
        return
    }

    public validateLandingPage(){
        this.validateUrl();
        this.validateHeader();
        this.validateFooter();
    }
}

