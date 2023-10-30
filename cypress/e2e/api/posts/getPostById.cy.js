import post from "../../../fixtures/posts.json";

beforeEach(() => {
  cy.api({
    method: "GET",
    url: `posts/${post[0].id}`,
  }).as("getPost");
});

describe("Get post by id", () => {
  it("should get post by valid id", () => {
    cy.get("@getPost").its("body").should("deep.include", { id: post[0].id });
  });

  it("should have status 200", () => {
    cy.get("@getPost").its("status").should("eq", 200);
  });

  it("should return JSON", () => {
    cy.get("@getPost")
      .its("headers.content-type")
      .should("contains", "application/json");
  });

  it("should all keys", () => {
    cy.get("@getPost")
      .its("body")
      .should("have.all.keys", "userId", "id", "title", "body");
  });
});
