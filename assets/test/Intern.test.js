const Intern = require("../lib/Intern");

describe("Intern", () => {
  // school
  // // it should have a school input
  it("should have a school input", () => {
    const school = "2U";
    const emp = new Intern("Hassan", 123, "Hassan@test.com", school);
    // // expect school = school
    expect(emp.school).toEqual(school);
  });
  describe("getRole", () => {
    // getRole()
    // // it should overridden to return intern
    it("should overridden to return intern", () => {
      const role = "Intern";
      const emp = new Intern("Hassan", 123, "Hassan@test.com", "2U");
      // // expect role = role
      expect(emp.getRole()).toEqual(role);
    });
  });
});