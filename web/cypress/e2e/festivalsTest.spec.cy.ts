import FestivalsList from 'cypress/pom/festivalsList'

const ln = new FestivalsList()

describe('Festivals List', () => {
  it('verify Festivals List with API Status Code', () => {
    ln.verifyFestivalsList()
  })
})