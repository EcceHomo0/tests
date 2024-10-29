describe('Adding numbers', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });


describe("L'application doit additionner deux nombres", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(1);
    cy.get("#secondNumber").type(1);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","2")
  })
})

describe("L'application doit additioner deux nombres positifs", () => {
  it('passes', () => {    
    cy.get('#firstNumber').type(1);
    cy.get("#secondNumber").type(2);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","3")
  })
})

describe("L'application doit additioner deux nombres négatifs", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(-2);
    cy.get("#secondNumber").type(-3);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","-5")
  })
})

describe("L'application doit gérer des nombres décimaux", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(1.5);
    cy.get("#secondNumber").type(2.5);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","4")
  })
})

describe("L'application ne doit afficher initialement que Résultat : ", () => {
  it('passes', () => {
    cy.get("#result").should("have.text","Résultat : ")
  })
})

describe("L'application doit gérer une addition avec un zéro", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(3);
    cy.get("#secondNumber").type(0);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","3")
  })
})

describe("L'application doit gérer une addition avec deux zéros", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(0);
    cy.get("#secondNumber").type(0);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","0")
  })
})

describe("L'application doit gérer l'addition de deux très grands nombres positifs", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(1000000000);
    cy.get("#secondNumber").type(4000000000);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","5000000000")
  })
})

describe("L'application doit gérer l'addition de deux très grands nombres négatifs", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(-1000000000);
    cy.get("#secondNumber").type(-4000000000);
    cy.get('#calculBtn').click();
    cy.get("#result").should("have.text","-5000000000")
  })
})

describe("L'application doit gérer un input type text", () => {
  it('passes', () => {
    cy.get('#firstNumber').type(5);
    cy.get("#secondNumber").type('abc');
    cy.get('#calculBtn').click();
    cy.get("#result").should("not.have.text","NaN")
  })
})

describe("L'application doit gérer des champs vides", () => {
  it('passes', () => {
    cy.get('#calculBtn').click();
    cy.get("#result").should("not.have.text","NaN")
  })
})

})