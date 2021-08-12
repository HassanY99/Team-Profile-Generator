const Engineer = require("../lib/Engineer");


describe("Github UserName", () => {
    it("Should have github input", () => {
        const github = "HassanY99";
        const employ = new Engineer("Hassan", 123, "hassanyousuf1999@gmail.com", github);
        expect(employ.github).toEqual(github);
});
describe("getPosition", () => {
    it("Should override to give Engineer", () => {
        const position = "Engineer";
        const employ = new Engineer("Hassan", 123, "hassanyousuf1999@gmail.com", "HassanY99");
        expect(employ.getPosition()).toEqual(position);
    
    });
});
});