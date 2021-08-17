const Manager = require("../lib/Manager");

describe("Manager", () => {
  // officeNumber
  // // it should have a officenumber input
  it("should have a officenumber input", () => {
    const officeNum = 212;
    const emp = new Manager("Hassan", 123, "Hassan@test.com", officeNum);
    // // officeNum = officeNum
    expect(emp.officeNum).toEqual(officeNum);
  });

  describe("getRole", () => {
    // getRole()
    // // it should overridden to return Manager
    it("should overridden to return Manager", () => {
      const role = "Manager";
      const emp = new Manager("Hassan", 123, "Hassan@test.com", 212);
      // // expect role = role
      expect(emp.getRole()).toEqual(role);
    });
  });
});