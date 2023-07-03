describe('Validate Header', () => {

    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include','application/json; charset=utf-8')
    });
    it('Berhasil pada Response body', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon').then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body.name).to.equal('ditto')
        });
    });
});