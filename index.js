// import packages 
const fs = require("fs");
const inquirer = require("inquirer");
const colours = require("colors");
const figlet = require("figlet");

// import own files 
const generateMarkdown = require("./utils/generateMarkdown");
const badge = require("./utils/generateBadge");
const questions = require("./utils/questions").questions;

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
    // use badge function to generate corresponding license badge
    answers.badgeLicense = badge(answers.license);
    // write README file
    const readmeInfo = generateMarkdown(answers);
    fs.writeFile("generated-README.md", readmeInfo, (err) => {
      err ? console.error(err) : console.log("Readme created!");
    });
  }, 2000);
}

// function call to initialize program
init();

