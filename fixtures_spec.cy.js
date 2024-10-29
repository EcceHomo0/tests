describe("Test Affichage des fixtures User", ()=> {
    //récupération d'un json depuis fixture
    before(() => {
        cy.fixture("users-fixture.json").then(function (testData) {
            this.testData = testData.user;
        })
    })
    
    it("Users", function () {
        this.testData.forEach((user) => {
            cy.log(user.nom)
            cy.log(user.prenom)
            cy.log(user.mail)
            cy.log(user.password)
        })
    })
})