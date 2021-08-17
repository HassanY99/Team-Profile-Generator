const Employee = require("../lib/Employee");

// Employee
describe("Employee Info", () => {
  // name
  // // it should have a name input
  it("should have a Name input", () => {
    const name = "Hassan";
    const emp = new Employee(name);
    expect(emp.name).toEqual(name);
    // //  name = name
  });
  // id
  // // it should have a id input
  it("should have an ID input", () => {
    const id = 123;
    const emp = new Employee("Hassan", id);
    expect(emp.id).toEqual(id);
    // //  id = id
  });
  //email
  // // it should have a email input
  it("should have a Email input", () => {
    const email = "Hassan@test.com";
    const emp = new Employee("Hassan", 123, email);
    expect(emp.email).toEqual(email);
    // //  email = email
  });
  // getName()
  // // it should getName
  it("should get Name", () => {
    const name = "Hassan";
    const emp = new Employee(name);
    expect(emp.getName()).toEqual(name);
    // // return name
  });
  // getID()
  // // it should getId
  it("should get ID", () => {
    const id = 123;
    const emp = new Employee("Hassan", id);
    expect(emp.getID()).toEqual(id);
    // // return ID
  });
  // getEmail()
  // // it should getEmail
  it("should get Email", () => {
    const email = "Hassan@test.com";
    const emp = new Employee("Hassan", 123, email);
    expect(emp.getEmail()).toEqual(email);
    // // return Email
  });
  // getRole() -- returns Empoyee
  // // it should getRole as Employee
  it("should get Role", () => {
    const role = "Employee";
    const emp = new Employee("Hassan", 123, "Hassan@test.com");
    expect(emp.getRole()).toEqual(role);

    // // return role Employee
  });
});