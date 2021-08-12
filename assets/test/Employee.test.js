const Employee = require("../lib/Employee")

describe("Employee Information", () => {
    it("Should have name input", () => {
        const name = "Cristiano";
        const employ = new Employee(name);
        expect(employ.name).toEqual(name);
    });

    it("Should have id input", () => {
        const id = 123;
        const employ = new Employee("Cristiano", id);
        expect(employ.id).toEqual(id);
    });

    it("Should have email input", () => {
        const email = "cr7ron@gmail.com";
        const employ = new Employee("Cristiano", 123, email);
        expect(employ.email).toEqual(email);
    });

    it("Should get a name", () => {
        const name = "Cristiano";
        const employ = new Employee(name);
        expect(employ.getName()).toEqual(name);
    });

    it("Should get id", () => {
        const id = 123;
        const employ = new Employee("Cristiano", id);
        expect(employ.getId()).toEqual(id);
    });

    it("Should get email", () => {
        const email = "cr7ron@gmail.com";
        const employ = new Employee("Cristiano", 123, email);
        expect(employ.getEmail()).toEqual(email);
    });

    it("Should get position", () => {
        const position = "Employee";
        const employ = new Employee("Cristiano", 123, "cr7ron@gmail.com");
        expect(employ.getPosition()).toEqual(position);
    });


});