// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?".green,
    name: "title",
  },
  {
    type: "input",
    message: "Enter a project description:".green,
    name: "description",
  },
  {
    type: "list",
    message: "Please select the license:".green,
    name: "license",
    choices: [
      "MIT",
      "ISC",
      "Mozilla",
      "Apache 2.0",
      "Eclipse Public License",
      "None of the above",
    ],
  },
  {
    type: "input",
    message: "Enter installation information:".green,
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information:".green,
    name: "usage",
  },
  {
    type: "input",
    message: "Include contributing info here:".green,
    name: "contribute",
  },
  {
    type: "input",
    message: "What tests can the user run?".green,
    name: "test",
  },
  {
    type: "input",
    message: "What is your email address?".green,
    name: "email",
  },
  {
    type: "input",
    message: "What is your GitHub username?".green,
    name: "github",
  },
  {
    type: "input",
    message: "Enter your LinkedIn URL".green,
    name: "linkedIn",
  },
];

module.exports = {
  questions,
};
