const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

inquirer
const promptProject = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
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
      message: 'Provide a description of your project'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the guidelines for contributing?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions'
    }
  ]);
};


const promptMore = () => {
  console.log(`
  =================
Add more information about your project
=================
  `);
  return inquirer.prompt([
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
};

promptProject()
  .then(answers => console.log(answers))
  .then(promptMore)
  .then(moreAnswers => console.log(moreAnswers));
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });