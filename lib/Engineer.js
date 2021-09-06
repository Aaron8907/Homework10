const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, picture, responsibilities, github) {
    super(name, id, email, picture, responsibilities);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
    
}

module.exports = Engineer;
