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
            choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"]
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
        console.log(data.projectName)
        let readmeContent = `# ${data.projectName}
![license](https://img.shields.io/badge/license-${data.license}-blue)

## Description
${data.desc}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation
To install necessary dependecies, run the following command:<br>
<mark>${data.install}</mark>
## Usage
${data.use}
## License
This project is licensed under the ${data.license} license
## Contributing
${data.contribute}
## Tests
To run tests, run the following command:<br>
<mark>${data.tests}</mark>
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username})
`;

        fs.writeFile("README.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });