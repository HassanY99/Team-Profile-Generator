const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./assets/lib/Employee");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const Manager = require("./assets/lib/Manager");

const emps = [];

function startGenerator() {
  startHTML();
  addEmps();
}

// addEmps()
// // inquirer promps
function addEmps() {
  inquirer
    .prompt([
      // // // input, What is the Employees name?, name
      {
        type: "input",
        name: "name",
        message: "What is the Employees name?",
      },
      // // // input, What is the Employees ID?, id
      {
        type: "input",
        name: "id",
        message: "What is the Employees ID?",
      },
      // // // input, What is the Employees Email?, email
      {
        type: "input",
        name: "email",
        message: "What is the Employees Email?",
      },
      // // // list, What is the Employees Role? ; {Engineer, Intern, Manager}, Role
      {
        type: "list",
        name: "role",
        message: "What is the Employees Role?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(function ({ name, id, email, role }) {
      let empRole = "";
      if (role === "Engineer") {
        empRole = "Engineers GitHub";
      } else if (role === "Intern") {
        empRole = "Interns School";
      } else {
        empRole = "Managers office number";
      }
      inquirer
        // // // if Engineer --- input, What is the Engineers GitHub?, empRole
        // // // if Intern --- input, What is the Interns School?, empRole
        // // // if Manager --- input, What is the Managers office number?, empRole
        .prompt([
          {
            type: "input",
            name: "empsRole",
            message: `What is the ${empRole}?`,
          },
          // // // list, Are their more Employees to add? ; {Yes, No} , moreEmps
          {
            type: "list",
            name: "moreEmps",
            message: "Are their more Employees to add?",
            choices: ["Yes", "No"],
          },
        ])
        .then(function ({ empsRole, moreEmps }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, empsRole);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, empsRole);
          } else {
            newMember = new Manager(name, id, email, empsRole);
          }
          emps.push(newMember);
          appendHTML(newMember).then(() => {
            if (moreEmps === "Yes") {
              addEmps();
            } else {
              endHTML();
            }
          });
        });
    });
}
// // // // add Employee to emps array
// // // if Yes --- Start Again addEmps()
// // // if No --- end writeHTML()

// startHTML()
function startHTML() {
  const starter = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=
      , initial-scale=1.0"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header class="jumbotron jumbotron-fluid drk">
        <main class="container">
          <h1 class="display-4">Team Profile Generator</h1>
        </main>
      </header>
      <div class="container row">`;
  fs.writeFile("./assets/dist/team.html", starter, (err) => {
    if (err) console.log(err);
  });
}

// // appendHTML() for each class pull from emps array
function appendHTML(newMember) {
  return new Promise(function (resolve, reject) {
    const name = newMember.getName();
    const role = newMember.getRole();
    const id = newMember.getID();
    const email = newMember.getEmail();
    let data = "";
    if (role === "Engineer") {
      const gitHub = newMember.getGithub();
      data = `<div class="card text-white bg-success mb-3" style="max-width: 18rem">
<div class="card-header">${name}</div>
<div class="card-body">
<h5 class="card-title">Engineer</h5>
<p class="card-text">ID: ${id}</p>
<p class="card-text">
Email: <a href="mailto:${email}">${email}</a>
</p>
<p class="card-text">
GitHub:
<a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a>
</p>
</div>
</div>`;
    } else if (role === "Intern") {
      const school = newMember.getSchool();
      data = `<div class="card text-white bg-info mb-3" style="max-width: 18rem">
<div class="card-header">${name}</div>
<div class="card-body">
<h5 class="card-title">Intern</h5>
<p class="card-text">ID: ${id}</p>
<p class="card-text">
Email: <a href="mailto:${email}">${email}</a>
</p>
<p class="card-text">School: ${school}</p>
</div>
</div>`;
    } else {
      const officePhone = newMember.getOfficeNum();
      data = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem">
<div class="card-header">${name}</div>
<div class="card-body">
<h5 class="card-title">Manager</h5>
<p class="card-text">ID: ${id}</p>
<p class="card-text">
Email: <a href="mailto:${email}">${email}</a>
</p>
<p class="card-text">Office Number: ${officePhone}</p>
</div>
</div>`;
    }
    console.log("adding team member");
    fs.appendFile("./assets/dist/team.html", data, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}
// // // if Engineer append engineerHTML
// // // if Intern append interHTML
// // // if Manager append managerHTML
function endHTML() {
  const end = `</div>
</body>
</html>`;
  fs.appendFile("./assets/dist/team.html", end, (err) => {
    if (err) console.log(err);
  });
}

startGenerator();