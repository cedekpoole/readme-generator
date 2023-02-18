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
  ];

  module.exports = {
    questions
  }