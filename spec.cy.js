beforeEach(()=>
  {
    cy.visit("http://localhost:5173/");
  });

describe('devrait afficher un compteur initial de 0', () => 
  {
  it('passes', () => 
    {
    cy.get("#counter").should("have.text","count is 0");
  })
})

describe('le compteur devrait augmenter le nombre lors du clic sur le bouton', () => {
  it('passes', () => {
    cy.get("#counter").click();
    cy.get("#counter").should("have.text","count is 1")
  })
})

describe('devrait augmenter le nombre deux fois lors de deux clics sur le bouton', () => {
  it('passes', () => {
    cy.get("#counter").click().click();
    cy.get("#counter").should("have.text","count is 2")
  })
})

describe('devrait gérer plusieurs augmentations correctement', () => {
  it('passes', () => {
    for(let i=0;i<5;i++)
    {
    cy.get("#counter").click();
    }
    cy.get("#counter").should("have.text","count is 5")
    for(let i=0;i<5;i++)
      {
      cy.get("#counter").click();
      }
      cy.get("#counter").should("have.text","count is 10")
  })
})

describe('devrait avoir les logos et les liens corrects', () => {
  it('passes', () => {
    cy.get(".logo").should("have.length",2);
    cy.get(".logo").eq(0).should("be.visible");
    cy.get(".logo").eq(1).should("be.visible");
    cy.get(".logo").eq(0).should("have.attr","alt","Vite logo");
    cy.get(".logo").eq(1).should("have.attr","alt","JavaScript logo");
    cy.get(".logo").eq(0).parents('a').should("have.attr","href","https://vite.dev");
    cy.get(".logo").eq(1).parents('a').should("have.attr","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript");
  })
})