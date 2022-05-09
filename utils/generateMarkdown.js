const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ''
  if (license === 'MIT License') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache License 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GNU General Public License v3.0') {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === 'Boost Software License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    licenseBadge = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'Eclipse Public License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'GNU affero General Public License v3.0') {
    licenseBadge = `[![License][![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === 'GNU General Public License v2.1') {
    licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if (license === 'GNU Lesser General Public License v3.0') {
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'The Unlicense') {
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  } else {
    licenseBadge = ""
  }
  return (licenseBadge);
};


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ''
  if (license === 'MIT License') {
    licenseLink = `[MIT License](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache License 2.0') {
    licenseLink = `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = `[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === 'BSD 2-Clause "Simplified" License') {
    licenseLink = `[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    licenseLink = `[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === 'Boost Software License 1.0') {
    licenseLink = `[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    licenseLink = `[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'Eclipse Public License 1.0') {
    licenseLink = `[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'GNU affero General Public License v3.0') {
    licenseLink = `GNU affero General Public License v3.0'](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === 'GNU General Public License v2.1') {
    licenseLink = `[GNU General Public License v2.1'](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if (license === 'GNU Lesser General Public License v3.0') {
    licenseLink = `[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  else if (license === 'Mozilla Public License 2.0') {
    licenseLink = `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'The Unlicense') {
    licenseLink = `[The Unlicense](http://unlicense.org/)`
  } else {
    licenseLink = ""
  }
  return (licenseLink);
};


// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const workingData = data;

  // this contains the markdown to be generated for the readme file
  return `
  
  # ${workingData.title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)

  ## Description
  ${workingData.description}

  ## Installation
  ${workingData.installation}

  ## Usage
  ${workingData.usage}

  ## Contributing
  ${workingData.contribution}

  ## Tests
  ${workingData.tests}

  ## License 

  ${renderLicenseBadge(workingData.license)} 

  ${renderLicenseLink(workingData.license)}

  ## Questions
  Please reach out with any additional questions: 
  - [GitHub](https://github.com/${workingData.github})
  - Email: ${workingData.email}


`;
};

// export the generateMarkdown and writeFile functions so we can use them in other places 
module.exports = { generateMarkdown, writeFile };
