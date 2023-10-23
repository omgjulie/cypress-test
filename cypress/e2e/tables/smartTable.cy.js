import { SmartTable } from "../../pageObjects/tables/SmartTable";

describe("Table of users", () => {
  it("should create and edit user", () => {
    const user = new SmartTable();

    const userData = {
      id: 8,
      firstName: "Yuliia",
      lastName: "Kovalchuk",
      username: "@juju",
      email: "yuliia@gmail.com",
      age: 31,
    };

    const updatedUserData = {
      id: 746,
      firstName: "Julie",
      lastName: "Kov",
      username: "@omgjulie",
      email: "omgjulie@gmail.com",
      age: 25,
    };

    user.navigate();
    user.createNewUser(
      userData.id,
      userData.firstName,
      userData.lastName,
      userData.username,
      userData.email,
      userData.age,
    );

    cy.get("table tbody tr:first-child td:nth-child(2)").should(
      "contain",
      userData.id,
    );
    cy.get("table tbody tr:first-child td:nth-child(3)").should(
      "contain",
      userData.firstName,
    );
    cy.get("table tbody tr:first-child td:nth-child(4)").should(
      "contain",
      userData.lastName,
    );
    cy.get("table tbody tr:first-child td:nth-child(5)").should(
      "contain",
      userData.username,
    );
    cy.get("table tbody tr:first-child td:nth-child(6)").should(
      "contain",
      userData.email,
    );
    cy.get("table tbody tr:first-child td:nth-child(7)").should(
      "contain",
      userData.age,
    );

    user.editUser(
      updatedUserData.id,
      updatedUserData.firstName,
      updatedUserData.lastName,
      updatedUserData.username,
      updatedUserData.email,
      updatedUserData.age,
    );

    cy.get("table tbody tr:first-child td:nth-child(2)").should(
      "contain",
      updatedUserData.id,
    );
    cy.get("table tbody tr:first-child td:nth-child(3)").should(
      "contain",
      updatedUserData.firstName,
    );
    cy.get("table tbody tr:first-child td:nth-child(4)").should(
      "contain",
      updatedUserData.lastName,
    );
    cy.get("table tbody tr:first-child td:nth-child(5)").should(
      "contain",
      updatedUserData.username,
    );
    cy.get("table tbody tr:first-child td:nth-child(6)").should(
      "contain",
      updatedUserData.email,
    );
    cy.get("table tbody tr:first-child td:nth-child(7)").should(
      "contain",
      updatedUserData.age,
    );
  });
});
