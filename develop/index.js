const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "projectName",
            message: "What is your project's name?",
        },
        {
            type: "input",
            name: "desc",
            message: "Please write a short description of your project:",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "install",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "use",
            message: "What does the user need to know about using the repo?",
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?",
        },
    ])
    .then((data) => {
        console.log("Generating README...")
        let readmeContent = 
        `

        `

        fs.writeFile("README.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();