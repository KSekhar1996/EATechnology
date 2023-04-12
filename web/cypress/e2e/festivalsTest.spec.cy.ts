import FestivalsList from 'cypress/pom/festivalsList'

const ln = new FestivalsList()

describe('Festivals List', () => {
    it('verify EAT Url', () => {
        ln.verifyingUrl()
    })
    it('verify Festivals List with API Status Code', () => {
        ln.verifyFestivalsApiResponse()
    })

    it('verify Festivals List', () => {
        ln.verifyFestivalsList()
    })
})