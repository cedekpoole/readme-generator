const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const colours = require("colors");
const figlet = require("figlet");

const generateMarkdown = require("./utils/generateMarkdown");
const badge = require("./utils/generateBadge");
const questions = require("./utils/questions").questions;

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  // Add a welcome screen for the user using figlet package
  figlet("WELCOME :  )", (err, data) => {
    if (err) {
      return;
    }
    console.log(data.rainbow);
  });
  // Once welcomed, run an async function after 2 seconds which gathers user data
  setTimeout(async () => {
    const answers = await inquirer.prompt(questions);
    answers.badgeLicense = badge(answers.license);
    console.log(answers);
  }, 2000);
}

// function call to initialize program
init();
