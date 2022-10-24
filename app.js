const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquire");
const path = require("path");
const fs = require("fs");

const OP_DIR = path.resolve(__dirname, "output");
const OP_path = path.join(OP_DIR, "prof.html");

const render = require("./lib/htmlRend")

inquirer.prompt([
    {
        type: `input`,
        name: `name`,
        message: `Team Manager name if you please?`
    },
    {
        type: `input`,
        name: `id`,
        message: `Team Manager ID if you please?`
    }, 
    {
        type: `input`,
        name: `officeNumber`,
        message: `Team Manager name if you please?`
    },
    
    {
        type: `input`,
        name: `email`,
        message: `Team Manager email if you please?`
    },
    
])