// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const { generateMarkdown, writeFile}  = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter the title of your project!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please provide a description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to install the project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide information about the usage of the project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide guidelines for contributing to the project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Choose a license',
            choices: ['', 'MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU affero General Public License v3.0', 'GNU General Public License v2.1', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense'],
            default: 0
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address'
        }
    ])
   
};

questions()
    .then(answers => generateMarkdown(answers))
    .then(pageData => {
        return writeFile(pageData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    });
//     .then(answers => {
//         return generateMarkdown(answers);
//         console.log(answers);
//     })
//     .then(pageMarkdown => {
//         return writeFile(pageMarkdown);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });

    // const pageHTML = generatePage();

    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }


// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
