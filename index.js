// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do users use your application?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What License did you use for this repository?",
    choices: [
      "MIT",
      "GNU General Public License v3",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "How many people contributed to the project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do you run tests",
    name: "tests",
  },
  {
    type: "input",
    message: "How do people update the repository?",
    name: "repository",
  },
  {
    type: "input",
    message: "What is your GitHub account username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./README.md", data, (err) => {
    if (err) throw err;
    console.log("you have successfully created a README.md");
  });
}
// A function to initialize app
function init() {
  inquirer.prompt(questions).then((userResponse) => {
    console.log("Generating Your Readme Now...");
    writeToFile("README.md", generateMarkdown({ ...userResponse }));
  });
}

// initialize app
init();
