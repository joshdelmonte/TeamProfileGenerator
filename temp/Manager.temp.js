const Manager = require('../lib/Manager');

test("Declare Manager", () =>{
    const smee = new Manager();
    expect(typeof(smee)).toBe("object");
});

test("Able to declare name with arguments in constructor", () =>{
    const getName = "Hermaeus";
    const smee = new Manager(getName);
    expect(smee.getName).toBe(getName);
});

test("Able to declare id with constructor arguments", () =>{
    const getId = 9;
    const smee = new Manager("Hermaeus", getId);
    expect(smee.getId).toBe(getId);
});

test("Test for email with constructor arguments", () =>{
    const getEmail = "hermes@gmail.com";
    const smee = new Manager("Hermaeus", 9, getEmail);
    expect(smee.getEmail).toBe(getEmail);
});

test("'Role'ing for Initiative", () =>{
    const getRole = "Manager";
    const smee = new Manager("Hermaeus", 9, "hermes@gmail.com", getRole)
    expect(smee.getRole).toBe(getRole)
});

test("'Role'ing for Initiative", () =>{
    const getOfficeNumber = 1;
    const smee = new Manager("Hermaeus", 9, "hermes@gmail.com", getOfficeNumber)
    expect(smee.getOfficeNumber).toBe(getOfficeNumber)
});