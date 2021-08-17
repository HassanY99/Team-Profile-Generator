const Employee = require("./Employee");

// need to bring Employees name into class to pass test
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getOfficeNum() {
    return this.officeNum;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;