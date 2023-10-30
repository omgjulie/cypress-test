import post from "../../../fixtures/posts.json";

beforeEach(() => {
  cy.api({
    method: "DELETE",
    url: `posts/${post[9].id}`,
  }).as("deletePost");
});

describe("Delete a post", () => {
  it("should be status 200", () => {
    cy.get("@deletePost").its("status").should("eq", 200);
  });

  it("response should be empty", () => {
    cy.get("@deletePost").then((response) => {
      cy.wrap(response.body).should("be.empty");
    });
  });
});
