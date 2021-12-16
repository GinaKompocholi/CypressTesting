class RedirectComponent{

    get getRedirectLink(){
        return cy.get('#redirect')
    }

    public clickRedirectURL(){
        this.getRedirectLink.click()
    }
}
export default RedirectComponent