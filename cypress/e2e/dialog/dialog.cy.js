describe("Dialog page", () => {
  it("should display modal", () => {
    cy.visit("pages/modal-overlays/dialog");

    cy.get("nb-card-body.result-from-dialog button").as("enterNameButton");

    cy.get("@enterNameButton").click();
    cy.get("nb-dialog-container").as("modal");
    cy.get("@modal").should("be.visible");

    cy.get("nb-dialog-container nb-card-header").as("modalTitle");
    cy.get("@modalTitle").should("have.text", "Enter your name");

    cy.get("nb-dialog-container nb-card-body input").as("modalInput");
    cy.get("@modalInput").should("be.visible");

    cy.get("nb-dialog-container nb-card-footer button").as("modalButton");
    cy.get("@modalButton")
      .first()
      .should("be.visible")
      .and("have.text", "Cancel");
    cy.get("@modalButton")
      .last()
      .should("be.visible")
      .and("have.text", "Submit");
  });
});
