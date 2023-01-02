const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your application.',
        },
        {
            type: 'input',
            name: 'tableOfContents',
            message: 'Please list the table of contents of your application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of this application.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Creative Commons', 'Apachi', 'ISC', 'Eclipse'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contibute to your application?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How are tests run?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])

    .then((answers) => {
        const readmeText = generateReadme(answers)
        console.log(answers)
        fs.writeFile('README.md', readmeText, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    });

function generateReadme({title, description, license}) {
    const licenseText = getLicenseText(license)
    return `
# ${title} ${licenseText}

## Description
${description}

`
}

function getLicenseText(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    } else if (license === "Apachi") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
}