const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should have Office Number input", () => {
        const officeNumber = "234";
        const employ = new Manager("Kinza", 123, "kkkyytty@gmail.com", officeNumber);
        expect(employ.officeNumber).toEqual(officeNumber);
});

describe("getPosition", () => {
    it("Should override to give Manager", () => {
        const position = "Manager";
        const employ = new Manager("Kinza", 123, "kkkyytty@gmail.com", 234);
        expect(employ.getPosition()).toEqual(position);
});


});


});