class Page {
    
    get getURL(){
        return cy.url()
    }

    private validateUrl(){
        cy.url().should('contain', '/checkboxes')
    }


    public getHeader(header: string){
        return cy.get(header)
    }

    private validateHeader(){
        cy.get('h3').should('exist')
        cy.contains('Checkboxes')
    }

    get getFooter(){
        return cy.get('#page-footer')
    }

    private validateFooter(){
        cy.get('#page-footer')
        .should('exist')
        cy.contains('Powered by ')
    }

    public validateLandingInCheckboxPage(){
        this.validateUrl();
        this.validateHeader();
        this.validateFooter();
    }
}
