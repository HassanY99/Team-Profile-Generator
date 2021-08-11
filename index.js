const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./assets/lib/Employee');
const Engineer = require('./assets/lib/Engineer');
const Intern = require('./assets/lib/Intern');
const Manager = require('./assets/lib/Manager');

const employs = [];

function startGenerator() {
    startHTML();
    addEmploys();
}


function addEmploys() {
    inquirer
    .prompt([
        {
            type:"input",
            name: "name",
            message: "What is the name of the Employee?",
        },

        {
            type:"input",
            name: "id",
            message: "What is the id of the Employee?",
        },

        {
            type:"input",
            name: "email",
            message: "What is Employees Email?",
        },

        {
            type:"list",
            name: "position",
            message: "What is the position of the Employee?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ])
    .then(function ({ name, id, emaul, position}) {
        let empPosition = "";
        if (role === "Engineer") {
            empPosition = "Engineers Github"
        } else if (role === "Intern") {
            empPosition = "Interns School";
        } else {
            empPosition = "Managers Office Number";
        }
        inquirer

        .prompt([
            {
            type:"input",
            name: "empPosition",
            message: `What is the ${empPosition}`,
            },

            {
                type:"list",
                name: "moreEmps",
                message: "More available positions for Employees?",
                choices: ["Yes", "No"],
                },
        ])
        .then(function ({ empPosition, moreEmps}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, empPosition);
            } else if ( role === "Intern") {
                newMember = new Intern(name, id, email, empPosition);
            } else {
                newMember = new Manager(name, id, email, empPosition)
            }
            emps.push(newMember);
            appendHTML(newMember).then(() => {
                if (moreEmps === "Yes") {
                    addEmploys();
                } else {
                    endHTML();
                }
            });
        });
    });
}




function startHTML() {
    const starter = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
        <h1 style="text-align: center;">Team</h1>
    </header>`;
    fs.writeFile("./assets/dist/team-generator.html", starter, (err) => {
        if (err) console.log(err)
    });
}

function appendHTML(newMember) {
    return new Promise(function (resolve, reject) {
        const name = newMember.getName();
        const position = newMember.getPosition();
        const id = newMember.getId();
        const email = newMember.getEmail();

        let data = "";
        if (role === "Engineer") {
            const github = newMember.getGithub();
            data = `<main>
            <div style="text-align: center;" class="cardHeader">${name}</div>
            <div class="cardBody">
                <h4 class="cardTitle">Engineer</h4>
                <p class="cardText">${id}</p>
                <p class="cardText">mailto:${email}>${email}</a></p>
                <p class="cardText">"https://github.com/${github}>${github}</a></p>
            </div>`
        } else if ( role === "Intern") {
            const school = newMember.getSchool();
            data = `<div style="text-align: center;" class="cardHeader">${name}</div>
            <div class="cardBody">
                <h4 class="cardTitle">Intern</h4>
                <p class="cardText">${id}</p>
                <p class="cardText">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="cardText">School: ${school}</p>
            </div>`
        } else {
            const officeNum1 = newMember.getOfficeNum();
            data = `<div style="text-align: center;" class="cardHeader">${name}</div>
            <div class="cardBody">
                <h4 class="cardTitle">Manager</h4>
                <p class="cardText">${id}</p>
                <p class="cardText">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="cardText">Office number: ${officeNum1}</p>
            </div>`
        }
        console.log("New team memebers being added..");
        fs.appendFile("./assets/dist/team-generator.html", data, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
}




function endHTML() {
    const end = `</div>
    </main>
        
    </body>
    </html>`;
    fs.appendFile("./assets/dist/team-generator.html", end, (err) => {
        if (err) console.log(err);
    });
}


startGenerator();
