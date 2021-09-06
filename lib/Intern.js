const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, picture, responsibilities, school) {
    super(name, id, email, picture, responsibilities);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
  }
    
}

module.exports = Intern;
