/// <reference types = "Cypress" />

// BEFORE EACH - CREATING AND CLEARING THE SESSIONS
beforeEach(() =>{
    //Clearing the saved sessions
    Cypress.session.clearAllSavedSessions()
    cy.session('creating session with local host url', ()=>{
        cy.visit('/')
    })  
})

class FestivalsList {

    //ELEMENTS :
    ELEMENT_FESTIVALS_LIST  = 'app-festivals ol li ul li'
    ELEMENT_FESTIVALS       = 'app-festivals ol'

    //VERIFYING URL
    verifyingUrl(){
      expect(Cypress.config('baseUrl')).to.equal('http://localhost:4200/festivals')
    }
    //VERIFYING THE GET API STATUS
    verifyFestivalsApiResponse(){
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl'),
            failOnStatusCode: false,
   
        }).then((body) => {
            let res = body;
            cy.log(JSON.stringify(res.body))
            if(body.status === 429){
                cy.log('429 response :: '+ JSON.stringify(res.body));
            } else {
                expect(body.status).to.eq(200)
            }        
        })
    }

    //VERIFYING FESTIVALS LIST
    verifyFestivalsList(){
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl'),
            failOnStatusCode: false,

        }).then((body) => {
            let res = body;
            if(body.status === 200){   
                cy.get(this.ELEMENT_FESTIVALS).should('be.visible')
                cy.get(this.ELEMENT_FESTIVALS_LIST).each(($ele) => {    
                    const names = $ele.text()
                    cy.log(':: Name of Festival is :: ' + names) 
                })
            } else {
                cy.log(':: ' + body.status + 'response is :: '+ JSON.stringify(res.body));
            }      
        })
    }

}
export default FestivalsList;