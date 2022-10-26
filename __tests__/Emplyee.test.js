const { default: test } = require('node:test');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('./lib/Employee');

test("Declare Employee", () =>{
    const smee = new Employee();
    expect(typeof(smee)).toBe("object");
});

test("Able to declare name with arguments in constructor", () =>{
    const getName = "Thrombastus Bombastus";
    const smee = new Employee(getName);
    expect(smee.getName).toBe(getName);
});

test("Able to declare id with constructor arguments", () =>{
    const getId = 409;
    const smee = new Employee("Thrombastus Bombastus", testId);
    expect(smee.getId).toBe(getId);
});

test("Test for email with constructor arguments", () =>{
    const getEmail = "thrombastusbombastus@gmail.com";
    const smee = new Employee("Thrombastus Bombastus", 409, email);
    expect(smee.getEmail).toBe(getEmail);
});

test("'Role'ing for Initiative", () =>{
    const getRole = "Employee";
    const smee = new Employee("Thrombastus Bombastus", 409, "thrombastusbombastus@gmail.com")
    expect(smee.getRole).toBe(getRole)
});

