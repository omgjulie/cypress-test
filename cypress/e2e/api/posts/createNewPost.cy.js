import post from "../../../fixtures/newPost.json";

beforeEach(() => {
  cy.api({
    method: "POST",
    url: "posts/",
    body: post,
    failOnStatusCode: false,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).as("addPost");
});

describe("Create new post", () => {
  it("should add new post", () => {
    cy.get("@addPost").its("status").should("eq", 201);

    cy.get("@addPost").its("body").should("deep.equal", post);
  });
});
