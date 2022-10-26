const path = require("path");
const fs = require("fs");
const templatesDir = path.resolve(__dirname, "../templates");

// renderHTML function that will filter through the employees by role and map them to their respective HTML divs, then it pushes the div to the HTML array.
const renderHTML = employs => {
    const html = [];
  
    // filter managers
    html.push(...employs
      .filter(employ => employ.getRole() === "Manager")
      .map(manager => rendManager(manager))
    );

    // filter engineers
    html.push(...employs
      .filter(employ => employ.getRole() === "Engineer")
      .map(engineer => renderEngineer(engineer))
    );

    // filter interns
    html.push(...employs
      .filter(employ => employ.getRole() === "Intern")
      .map(intern => rendIntern(intern))
    );
    
    return rendProf(html.join(""));
  
  };

  // creates the HTML div for each manager
const rendManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

  // creates the HTML div for each engineer
const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = sortPlaceholders(template, "name", engineer.getName());
  template = sortPlaceholders(template, "role", engineer.getRole());
  template = sortPlaceholders(template, "email", engineer.getEmail());
  template = sortPlaceholders(template, "id", engineer.getId());
  template = sortPlaceholders(template, "github", engineer.getGithub());
  return template;
};

  // creates the HTML div for each intern
const rendIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

  // the function that takes the html array from the renderHTML function and creates the index.html file 
const rendProf = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "lean.html"), "utf8");
  
  return replacePlaceholders(template, "equipe", html);
};

// function that replaces all the placeholders in the HTML template based on the values assigned to each class
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gg");
  return template.replace(pattern, value);
};

module.exports = renderHTML;