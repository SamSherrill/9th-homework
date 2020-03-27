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
            message: "Please give a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the instructions for installation?",
            name: "installInstructions"
        }
    ])
    .then(response => {
        console.log("This information has been recorded as: " + response.name +
            ", " + response.projectName + ", " + response.description + ", " + response.installInstructions);

        // if (response.confirm === response.password) {

        // } else {
        //     console.log("You forgot your password already?!");
        // }
    })
    .catch(err => console.log("Error in initial prompt:", err));