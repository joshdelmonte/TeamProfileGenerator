const Intern = require('../lib/Intern');

test("Declare Intern", () =>{
    const smee = new Intern();
    expect(typeof(smee)).toBe("object");
});

test("Able to declare name with arguments in constructor", () =>{
    const getName = "Becky";
    const smee = new Intern(getName);
    expect(smee.getName).toBe(getName);
});

test("Able to declare id with constructor arguments", () =>{
    const getId = 365247;
    const smee = new Intern("Becky", getId);
    expect(smee.getId).toBe(getId);
});

test("Test for email with constructor arguments", () =>{
    const getEmail = "unicornsNrainbows@gmail.com";
    const smee = new Intern("Becky", 365247, getEmail);
    expect(smee.getEmail).toBe(getEmail);
});

test("'Role'ing for Initiative", () =>{
    const getRole = "Intern";
    const smee = new Intern("Becky", 365247, "unicornsNrainbows@gmail.com");
    expect(smee.getRole).toBe(getRole);
});

test("School Testing", () =>{
    const getSchool = "Mount Holy Oaks";
    const smee = new Intern("Becky", 365247, "unicornsNrainbows@gmail.com", getSchool);
    expect(smee.getSchool).toBe(getSchool);
});
