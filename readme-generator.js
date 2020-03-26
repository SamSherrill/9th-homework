console.log("Beginning")

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([{
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectName"
        },
        {
            type: "input",
            message: "What is your preferred method of communication? (email, text, phone)",
            name: "commMethod"
        }
    ])
    .then(response => {
        console.log("This information has been recorded as: " + response.name +
            ", " + response.projectName + ", " + response.commMethod);

        // if (response.confirm === response.password) {

        // } else {
        //     console.log("You forgot your password already?!");
        // }
    })
    .catch(err => console.log("Error in initial prompt:", err));