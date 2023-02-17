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



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
    figlet("WELCOME :  )", function(err, data) {
        if (err) {
            return;
        } 
        console.log(data.rainbow)
    })
    // const answers = await inquirer.prompt(questions)
}

function badge(license) {
    switch (license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        
        case "ISC":
            return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        
        case "Mozilla":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        
        case "Apache 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

        case "Eclipse Public License":
            return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    }
}

// function call to initialize program
init();
