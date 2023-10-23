describe("Login page", () => {
  it("should login with valid credentials", () => {
    cy.visit("auth/login");

    cy.login("yuliia.qa@mail.com", "111111", true)
      .url()
      .should("contains", "/pages");
  });
});
