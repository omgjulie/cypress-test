import post from "../../../fixtures/updatedPost.json";
import oldPost from "../../../fixtures/newPost.json";

beforeEach(() => {
  cy.api({
    method: "PUT",
    url: `posts/${post.id}`,
    body: post,
    failOnStatusCode: false,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).as("updatePost");
});

describe("Update post", () => {
  it("should update old post", () => {
    cy.get("@updatePost").its("status").should("eq", 201);

    cy.get("@updatePost").its("body").should("deep.equal", oldPost);
  });
});
