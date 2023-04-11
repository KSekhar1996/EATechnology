class FestivalsList {

  ELEMENT_FESTIVALS_LIST = 'app-festivals ol li ul li'

    verifyFestivalsList(){
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl'),
            failOnStatusCode: false,
   
        }).then((body) => {
           cy.log('response :: '+ JSON.stringify(body));
           let res = body;
           expect(body.status).to.eq(200)
           if(res !== null) {
             const name = body.body[0].name
   
             expect(name).not.be.empty
             
           }
   
          cy.get(this.ELEMENT_FESTIVALS_LIST).each(($ele) => {    
             const names = $ele.text()
             cy.log(':: Name of Festival is :: ' + names) 
          })
    })
}

}
export default FestivalsList;