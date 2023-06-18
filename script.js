() => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".carousel-item.third-slide").should("have.class", "active");
}
() => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".carousel-control-prev").should("have.class", "carousel-control");
  cy.get(".carousel-control-next").should("have.class", "carousel-control");
  cy.get(".carousel-control-prev .carousel-control-prev-icon").should("have.class", "glyphicon-chevron-left");
  cy.get(".carousel-control-next .carousel-control-next-icon").should("have.class", "glyphicon-chevron-right");
}
