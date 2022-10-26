const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquire");
const path = require("path");
const fs = require("fs");

const fse = requre('fs-extra');

// fse.outputfile('tmp/test.txt', 'Hey')
//     .then(() => {
//         console.log('File Saved');
//     })
//     .catch(err => {
//         console.error(err)
//     })

const OP_DIR = path.resolve(__dirname, "output");
const oppath = path.join(OP_DIR, "prof.html");

const render = require("./lib/htmlRend")

let employArr = []

const etFinum = () => {
    let profHtml = render(employArr)
    fse.outputfile('dist/prof.html', profHtml)
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
        if (SiOrNo.SiOrNo === 'yes') {
            intAuEng()
        } else (
            etFinum()
        )
    })
}

const intAuEng = () => {
    inquirer.prompt([{
        name: 'intAuEng',
        type: 'list',
        message: 'Do we need to add Interns or Engineers today?',
        choices: ('Intern', 'Engineer')
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
                .then(enginar => {
                    console.log(enginar)
                    let newEnginar = new Engineer(enginar.name, enginar.id, enginar.email, enginar.github)
                    employArr.push(newEnginar)
                    console.log(employArr)
                    continuedQueue()
                })
        ])
    } else if (answer.intAuEng === 'Intern ') {
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
                message: `Team Engineer office email if you please?`
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
        message: `Team Manager office number if you please?`
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
    intAuEng()
})}