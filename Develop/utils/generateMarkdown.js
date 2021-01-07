// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No-License') {
    return '';
  }
  return `![${license}](https://img.shields.io/badge/LICENSE-${license}-blue)`;
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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
${data.license}

## Questions
If you have any additional questions please reach me through email or GitHub.
GitHub: [${data.username}](https://github.com/${data.username})
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;