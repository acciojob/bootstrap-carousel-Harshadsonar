() => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".right").should("be.visible").click();
  cy.get(".carousel-item.fourth-slide");
}
