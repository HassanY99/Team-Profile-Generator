const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should have school input", () => {
        const school = "2U University";
        const employ = new Intern("Hassan", 123, "hassanyousuf1999@gmail.com", school);
        expect(employ.school).toEqual(school);
});

describe("getPosition", () => {
    it("Should override to give Intern", () => {
        const position = "Intern";
        const employ = new Intern("Hassan", 123, "hassanyousuf1999@gmail.com", "2U University");
        expect(employ.getPosition()).toEqual(position);
});
});
});