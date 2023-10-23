import { SmartTablePage } from "../../pageObjects/tables/SmartTablePage";

describe("Table of users", () => {
  it("should create and edit user", () => {
    const smartTablePage = new SmartTablePage();

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

    smartTablePage.navigate();
    smartTablePage.createNewUser(
      userData.id,
      userData.firstName,
      userData.lastName,
      userData.username,
      userData.email,
      userData.age,
    );

    smartTablePage.checkDataValidation(
      userData.id,
      userData.firstName,
      userData.lastName,
      userData.username,
      userData.email,
      userData.age,
    );

    smartTablePage.editUser(
      updatedUserData.id,
      updatedUserData.firstName,
      updatedUserData.lastName,
      updatedUserData.username,
      updatedUserData.email,
      updatedUserData.age,
    );

    smartTablePage.checkDataValidation(
      updatedUserData.id,
      updatedUserData.firstName,
      updatedUserData.lastName,
      updatedUserData.username,
      updatedUserData.email,
      updatedUserData.age,
    );
  });
});
