// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// 
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// links to the actual license file in users directory
// THIS IS NOT NECESSARY
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// Just displays the name like you already have with 'data.license'
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
Badge goes here

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
[${data.license}](LICENSE)

## Questions
If you have any additional questions please reach me through email or GitHub.
GitHub: [${data.username}](https://github.com/${data.username})
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;