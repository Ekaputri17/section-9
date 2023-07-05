describe('Tugas Validate Content', () => {

    it('Melanjutkan kode', () => {
        cy.request('https://pokeapi.co/api/v2/ability/7/').as('limber')
        cy.get('@limber').should((response) => {
            expect(response.status).to.eq(200),
            expect(response.body.name).to.eq('limber')
        })
    });
});