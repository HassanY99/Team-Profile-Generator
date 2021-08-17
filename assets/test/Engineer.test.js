const Engineer = require("../lib/Engineer");

describe("GitHub UserName", () => {
  // github username
  // // it should have a github input
  it("should have a github input", () => {
    const github = "HassanY99";
    const emp = new Engineer("Hassan", 123, "Hassan@test.com", github);
    // // expect github = github
    expect(emp.github).toEqual(github);
  });
  describe("getRole", () => {
    // getRole()
    // // it should overridden to return Engineer
    it("should overridden to return Engineer", () => {
      const role = "Engineer";
      const emp = new Engineer("Hassan", 123, "Hassan@test.com", "HassanY99");
      // // expect role = role
      expect(emp.getRole()).toEqual(role);
    });
  });
});