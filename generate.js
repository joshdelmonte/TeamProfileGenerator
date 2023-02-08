const fs = require('fs');

let arr = [{
    name: 'Thoth',
    id: 42,
    email: 'theatlantean@gmail',
    github: 'emeraldTablet',
    role: 'Engineer'
},
{
    name: 'Hermaeus',
    id: 9,
    email: 'hermes@gmail.com',
    officeNumber: 1,
    role: 'Manager'
},
{
    name: 'Becky',
    id: 247365,
    email: 'unicornsNrainbows@gmail.com',
    school: 'Mount Holy Oaks',
    role: 'Intern'
}];

function generateHTML(arr) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>
        <main>
            ${generateEmployees()}
        </main>
    </body>
    </html>`;

    return html;
}
//

function generateEmployees() {
    let employeeString = ``;
    for (let i = 0; i < arr.length; i++) {
        let employee = `<card><p>Name: ${arr[i].name}</p><p>ID: ${arr[i].id}</p><p>Email: ${arr[i].email}</p></card>`;
        employeeString += employee;
    }
    return employeeString;
}


function writeHTML() {
    fs.writeFile(`./index.html`, generateHTML(), (err) => {
        if (err) {
            console.log(`The file could not be written.`);
        }
        else {
            console.log(`The file was written successfully.`);
        }
    });

}

writeHTML();


