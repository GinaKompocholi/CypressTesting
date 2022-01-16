class RedirectComponent{

    get getRedirectLink(){
        return cy.get('#redirect')
    }

    public clickRedirectURL(){
        this.getRedirectLink.click()
    }

    get getStatusCodeListElements(){
        return cy.get('ul li')
    }

}
export default RedirectComponent