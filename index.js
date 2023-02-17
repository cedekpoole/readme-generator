const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const colours = require("colors");
const figlet = require("figlet");

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?'.green,
        name: 'title'
    }

];

inquirer.prompt(questions)

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
