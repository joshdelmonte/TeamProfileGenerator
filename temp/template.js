const render = employArr => {
    console.log(employArr, 'this is the employArr')

const cards = []

for (let i = 0; i < employArr.length; i++) {
    if (employArr[i].getRole() === 'Manager') {
        const managerCard = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employArr[i].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${employArr[i].getRole()}</h6>
          <p class="card-text">ID: ${employArr[i].id}</p>
          <p class="card-text">Email: ${employArr[i].email}</p>
          <p class="card-text">Office Number: ${employArr[i].officeNumber}</p>
        </div>
      </div>`
      cards.push(managerCard)
    } 
    else if (employArr[i].role === 'Engineer') {
        const engineerCard = `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${employArr[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${employArr[i].getRole()}</h6>
            <p class="card-text">ID: ${employArr[i].id}</p>
            <p class="card-text">Email: ${employArr[i].email}</p>
            <p class="card-text">GitHub: ${employArr[i].github}</p>
        </div>
        </div>`
        cards.push(engineerCard)

    } else if (employArr[i].role === 'Intern') {    
        const internCard = `<div class="card" style="width: 18rem;">
        <div class="card-body">

            <h5 class="card-title">${employArr[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${employArr[i].getRole()}</h6>
            <p class="card-text">ID: ${employArr[i].id}</p>
            <p class="card-text">Email: ${employArr[i].email}</p>
            <p class="card-text">School: ${employArr[i].school}</p>
        </div>
        </div>`
        cards.push(internCard)
    }

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
     ${cards}   
    </body>
    </html>`
    return html
}}

    
module.exports = render