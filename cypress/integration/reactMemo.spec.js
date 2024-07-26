// cypress/integration/reactMemo.spec.js
describe("React Memo App", () => {
    const baseURL = "http://localhost:3000"; // Adjust based on your local server URL
  
    beforeEach(() => {
      cy.visit(baseURL);
    });
  
    it("adds a new todo item", () => {
      cy.contains("Add Todo").click();
      cy.get("li").should("have.length", 2);
    });
  
    it("increments the counter", () => {
      cy.contains("+").click();
      cy.contains("Count: 1");
    });
  
    it("adds a custom task through the input field", () => {
      cy.get("input").type("Custom Task");
      cy.contains("Add Skill").click();
      cy.get("li").should("contain.text", "Custom Task");
    });
  });
  