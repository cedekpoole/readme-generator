// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.badgeLicense}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing-here-is-a-header)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}
    
## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.github}](https://github.com/${data.github}/).
Feel free to also add me on LinkedIn: ${data.linkedIn} :)


`;
}

module.exports = generateMarkdown;
