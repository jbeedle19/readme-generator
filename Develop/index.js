// TODO: Include packages needed for this application
const { fstat } = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions for your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide usage instructions for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contribution guidelines for your project.',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please provide contribution guidelines for your project!');
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing instructions for your project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide testing instructions for your project!');
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license does your project use?',
            choices: ['MIT', 'Apache', 'GPLv2', 'BSD 3-clause', 'GPLv3', 'No License']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                }
            }
        }
    ]);
};

promptUser()
    .then(data => {
        console.log(data);
    });
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const writeFile = fileContent => {
    fs.writeFile('.')
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
}
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();