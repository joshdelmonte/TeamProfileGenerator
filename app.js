const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const fse = require('fs-extra');

const render = require("./lib/htmlRend")

let employArr = []

const etFinum = () => {
    let profHtml = render(employArr)
    fse.outputfile('prof.html', profHtml)
    .then(() => {
        console.log('File Saved');
    })
    .catch(err => {
        console.error(err)
    })
}

const continuedQueue = () => {
    inquirer.prompt([{
        name: 'SiOrNo',
        type: 'list',
        message: 'Did we need any additional team mates?',
        choices: ['yes', 'no']
    }])
    .then(SiOrNo => {
        console.log(SiOrNo)
        if (SiOrNo.SiOrNo === 'yes') {
            intAuEng()
        } else {
            etFinum()
        }
    })
}

const intAuEng = () => {
    inquirer.prompt([{
        name: 'intAuEng',
        type: 'list',
        message: 'Do we need to add Interns or Engineers today?',
        choices: ['Intern', 'Engineer']
    }])

.then(answer => {
    console.log(answer)
    if(answer.intAuEng === 'Engineer') {
        inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `Team Engineer name if you please?`
            },
            {
                type: `input`,
                name: `id`,
                message: `Team Engineer ID if you please?`
            }, 
            {
                type: `input`,
                name: `email`,
                message: `Team Engineer office email if you please?`
            },
            
            {
                type: `input`,
                name: `github`,
                message: `Team Engineer github if you please?`
            }
        ])
                .then(engineer => {
                    console.log(engineer)
                    let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
                    employArr.push(newEngineer)
                    console.log(employArr)
                    continuedQueue()
                })
            
        
    } else{
        inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `Team Intern name if you please?`
            },
            {
                type: `input`,
                name: `id`,
                message: `Team Intern ID if you please?`
            }, 
            {
                type: `input`,
                name: `email`,
                message: `Team Intern office email if you please?`
            },
            
            {
                type: `input`,
                name: `school`,
                message: `Team Interns former school if you please?`
            }
        ])
                .then(lintern => {
                    console.log(lintern)
                    let novaIntern = new Intern(lintern.name, lintern.id, lintern.email, lintern.school)
                    employArr.push(novaIntern)
                    console.log(employArr)
                    continuedQueue()
                })
    }
})
}

const manager = () => {
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
        message: `Please enter the Team Manager's office number:`
    },
    {
        type: `input`,
        name: `email`,
        message: `Team Manager email if you please?`
    },
    
])

.then(manager => {
    console.log(manager)
    let novaJefe = new Manager(manager.name, manager.id, manager.officeNumber, manager.email)
    employArr.push(novaJefe)
    console.log(employArr)
    continuedQueue()
})
}   


manager()


// const novaJefe = new Manager('Jefe', 1, 1234567890, '