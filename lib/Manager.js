const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email,picture, responsibilities, officeNumber) {
    super(name, id, email, picture, responsibilities);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

}

module.exports = Manager;
