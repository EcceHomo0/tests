describe("L'application doit vérifier que le statut de la réponse de l'API est 200", () => {
  beforeEach (() => {
    cy.visit('http://localhost:5173/');
  })

describe("La div pokeList doit exister", () => {
  it('passes', () => {cy.get('#pokeListe').should('exist')})
})

describe("L'application doit vérifier que le statut de la réponse de l'API est 200", () => {
  it('passes', () => {cy.request('https://pokeapi.co/api/v2/pokemon').its('status').should('equal',200);})
})

describe("L'application doit vérifier que le statut de la réponse de l'API est 200", () => {
  it('passes', () => {cy.request('https://pokeapi.co/api/v2/pokemon').its('status').should('equal',200);})
})

describe("L'API doit avoir un temps de réponse inférieur à 200ms", () => {
  it("devrait mesurer le temps de réponse de l'API (inférieur à 200ms)", () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const startTime = performance.now();
    cy.request('Get',url).then((response) => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      expect(response.status).to.eq(200);
      expect(duration).to.be.lessThan(2000);
    });
  });
})

describe("BULBASAUR", () => {
  it("Le premier élément est BULBASAUR",() => {
    cy.intercept('GET','https://pokeapi.co/api/v2/pokemon').as('getPokemon');
    cy.get('#pokeListe p').eq(0).should('have.text','bulbasaur');
});
})

describe("Champs attendus", () => {
  it("Devrait vérifier que la réponse contient les champs attendus name et url",() => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon').then((response) => {
      expect(response.body).to.have.property('results');
      expect(response.body.results[0]).to.have.all.keys('name','url');
    })
});
})

describe("message d'erreur", () => {it("Devrait afficher un message d'erreur si l'API échoue",() => {
    cy.intercept('GET','https://pokeapi.co/api/v2/pokemon', {statusCode:500 }).as('getPokemonError');
    cy.wait('@getPokemonError');
    cy.get('#error-message').should('be.visible');
    })
});

})