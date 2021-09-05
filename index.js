
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
 .prompt([
    {
       type: 'input',
       name: 'title',
       message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write the description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Share the usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input ',
        name: 'test',
        message: 'Add the test instructions',
    },
    {
       type: 'checkbox',
       message: 'What license do you choose for this project?',
       name: 'license',
       choices: ['Apache-2.0', 'GNU-GPLv3', 'MIT', 'ISC-License','None'],
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

    
])
.then((information) => {
    if(`${information.license}`==="Apache-2.0"){
        information.license="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)"  
        license="Apache-2.0"
        console.log(license)
    }else if (`${information.license}`==="GNU-GPLv3"){
        information.license="[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)" 
        license="GNU-GPLv3"   
        console.log(license)
    }else if(`${information.license}`==="MIT"){
        information.license="[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)"   
        license="MIT"
        console.log(license)
    }else if(`${information.license}`==="ISC-License"){
        information.license="[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://choosealicense.com/licenses/isc/)" 
        license="ISC License"  
        console.log(license)
    }
    
    const readMeContent = generateREADME(information);

fs.writeFile('README.md',readMeContent, (err) =>
 err ? console.log(err) : console.log('Successfully created README.md!')
);
});
const generateREADME = (information) =>
`${information.license}
# ${information.title}
## Description
${information.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Installation
${information.installation}
## Usage
${information.usage}
## Contribution
${information.contribution}
## Test
${information.test}
## License
The license is ${license} to see more information click on the badge at the top.
## Questions
-Email: ${information.email}\n
-GitHub: ${information.gitHub}`;



