import { BasePage } from "../BasePage";

export class SmartTablePage extends BasePage {
  _addButtonSelector = "table thead tr:nth-child(2) a";
  _idInputSelector = "table thead tr:nth-child(3) td:nth-child(2) input";
  _firstNameInputSelector = "table thead tr:nth-child(3) td:nth-child(3) input";
  _lastNameInputSelector = "table thead tr:nth-child(3) td:nth-child(4) input";
  _usernameInputSelector = "table thead tr:nth-child(3) td:nth-child(5) input";
  _emailInputSelector = "table thead tr:nth-child(3) td:nth-child(6) input";
  _ageInputSelector = "table thead tr:nth-child(3) td:nth-child(7) input";
  _checkButtonSelector =
    "table thead tr:nth-child(3) td:nth-child(1) [class='nb-checkmark']";
  _closeButtonSelector =
    "table thead tr:nth-child(3) td:nth-child(1) [class='nb-close']";
  _editButtonSelector =
    "table tbody tr:first-child td:nth-child(1) a.ng2-smart-action-edit-edit";

  _idFilledInputSelector = "table tbody tr:first-child td:nth-child(2) input";
  _firstNameFilledInputSelector =
    "table tbody tr:first-child td:nth-child(3) input";
  _lastNameFilledInputSelector =
    "table tbody tr:first-child td:nth-child(4) input";
  _usernameFilledInputSelector =
    "table tbody tr:first-child td:nth-child(5) input";
  _emailFilledInputSelector =
    "table tbody tr:first-child td:nth-child(6) input";
  _ageFilledInputSelector = "table tbody tr:first-child td:nth-child(7) input";
  _saveButtonSelector =
    "table tbody tr:first-child td:nth-child(1) a.ng2-smart-action-edit-save";

  _idCellSelector = "table tbody tr:first-child td:nth-child(2)";
  _firstNameCellSelector = "table tbody tr:first-child td:nth-child(3)";
  _lastNameCellSelector = "table tbody tr:first-child td:nth-child(4)";
  _usernameCellSelector = "table tbody tr:first-child td:nth-child(5)";
  _emailCellSelector = "table tbody tr:first-child td:nth-child(6)";
  _ageCellSelector = "table tbody tr:first-child td:nth-child(7)";

  constructor() {
    super("pages/tables/smart-table");
  }

  addNewUser(id, firstName, lastName, username, email, age) {
    cy.get(this._addButtonSelector).click();

    cy.get(this._idInputSelector).type(id, { delay: 50 });
    cy.get(this._firstNameInputSelector).type(firstName, { delay: 50 });
    cy.get(this._lastNameInputSelector).type(lastName, { delay: 50 });
    cy.get(this._usernameInputSelector).type(username, { delay: 50 });
    cy.get(this._emailInputSelector).type(email, { delay: 50 });
    cy.get(this._ageInputSelector).type(age, { delay: 50 });
  }

  confirmAddingUser() {
    cy.get(this._checkButtonSelector).click();
  }

  cancelAddingUser() {
    cy.get(this._closeButtonSelector).click();
  }

  createNewUser(id, firstName, lastName, username, email, age) {
    this.addNewUser(id, firstName, lastName, username, email, age);
    this.confirmAddingUser();
  }

  editUser(id, firstName, lastName, username, email, age) {
    cy.get(this._editButtonSelector).click();
    cy.get(this._idFilledInputSelector).clear().type(id, {
      delay: 50,
    });
    cy.get(this._firstNameFilledInputSelector).clear().type(firstName, {
      delay: 50,
    });
    cy.get(this._lastNameFilledInputSelector).clear().type(lastName, {
      delay: 50,
    });
    cy.get(this._usernameFilledInputSelector).clear().type(username, {
      delay: 50,
    });
    cy.get(this._emailFilledInputSelector).clear().type(email, {
      delay: 50,
    });
    cy.get(this._ageFilledInputSelector).clear().type(age, {
      delay: 50,
    });
    cy.get(this._saveButtonSelector).click();
  }

  checkDataValidation(id, firstName, lastName, username, email, age) {
    cy.get(this._idCellSelector).should("contain", id);
    cy.get(this._firstNameCellSelector).should("contain", firstName);
    cy.get(this._lastNameCellSelector).should("contain", lastName);
    cy.get(this._usernameCellSelector).should("contain", username);
    cy.get(this._emailCellSelector).should("contain", email);
    cy.get(this._ageCellSelector).should("contain", age);
  }
}
