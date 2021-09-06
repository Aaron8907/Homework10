class Employee {
    
  constructor(name, id, email, picture, responsibilities) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.picture = picture;
    this.responsibilities = responsibilities
  }
  

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getPicture() {
    return this.picture;
  }

  getResponsibilites(){
    return this.responsibilities;
  }

  getRole() {
    return "Employee";
  }
  

}


module.exports = Employee;
