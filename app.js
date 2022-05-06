const fs = require('fs');
const generatePage = require('./src/page-template');
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;


fs.writeFile('./README.md', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('README complete! Check out README.md to see the output!');
});
