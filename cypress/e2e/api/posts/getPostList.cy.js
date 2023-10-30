beforeEach(() => {
  cy.api({
    method: "GET",
    url: "posts/",
  }).as("postList");
});

describe("Get post list", () => {
  it("should have status 200", () => {
    cy.get("@postList").its("status").should("eq", 200);
  });

  it("list has more than 1 post", () => {
    cy.get("@postList").its("body").should("have.length.greaterThan", 1);
  });
});
