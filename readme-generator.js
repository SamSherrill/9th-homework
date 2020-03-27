// console.log("Beginning")

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
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
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
        console.log("This information has been recorded as: ", response.name, ",", response.email,
            ",", response.projectName, ",", response.description, ",", response.installInstructions);
        console.log("https://github.com/" + response.github)
        // Need to figure out back ticks

        // if (response.confirm === response.password) {

        // } else {
        //     console.log("You forgot your password already?!");
        // }
    })
    .catch(err => console.log("Error in initial prompt:", err));


// PSEUDO CODE:

// * Functional, deployed application.

// * GitHub repository with a unique name and a README describing project.

// * The generated README includes a bio image from the user's GitHub profile.  --- Input requested but needs to write to readme

// * The generated README includes the user's email. --- Input requested but needs to write to readme

// * The generated README includes the following sections: 
//   * Title * Description --- Input requested for both of these. I need to write to readme

// Need to have Table of Contents generate for the following:
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions (probably FAQ)