// const { default: test } = require('node:test');
// 
// const Employee = require('./lib/Employee');
const Employee = require('../lib/Employee.js')

test("Declare Employee", () =>{
    const smee = new Employee();
    expect(typeof(smee)).toBe("object");
});

test("Able to declare name with arguments in constructor", () =>{
    const getName = "Thrombastus Bombastus";
    const smee = new Employee(getName);
    expect(smee.getName()).toBe(getName);
});

test("Able to declare id with constructor arguments", () =>{
    const getId = 409;
    const smee = new Employee("Thrombastus Bombastus", 409);
    expect(smee.getId()).toBe(getId);
});

test("Test for email with constructor arguments", () =>{
    const getEmail = "thrombastusbombastus@gmail.com";
    const smee = new Employee("Thrombastus Bombastus", 409, "thrombastusbombastus@gmail.com");
    expect(smee.getEmail()).toBe(getEmail);
});

test("'Role'ing for Initiative", () =>{
    const getRole = "Employee";
    const smee = new Employee("Thrombastus Bombastus", 409, "thrombastusbombastus@gmail.com")
    expect(smee.getRole()).toBe(getRole)
});

