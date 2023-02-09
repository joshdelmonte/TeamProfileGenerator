const Engineer = require('../lib/Engineer');

test("Declare Engineer", () =>{
    const smee = new Engineer();
    expect(typeof(smee)).toBe("object");
});

test("Able to declare name with arguments in constructor", () =>{
    const getName = "Thoth";
    const smee = new Engineer(getName);
    expect(smee.getName).toBe(getName);
});

test("Able to declare id with constructor arguments", () =>{
    const getId = 42;
    const smee = new Engineer("Thoth", getId);
    expect(smee.getId).toBe(getId);
});

test("Test for email with constructor arguments", () =>{
    const getEmail = "theatlantean@gmail.com";
    const smee = new Engineer("Thoth", 42, getEmail);
    expect(smee.getEmail).toBe(getEmail);
});

test("'Role'ing for Initiative", () =>{
    const getRole = "Engineer";
    const smee = new Engineer("Thoth", 42, "theatlantean@gmail.com")
    expect(smee.getRole).toBe(getRole)
});