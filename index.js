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
            choices: ['MIT', 'Apachi', 'Eclipse', 'ISC', 'Perl', 'Boost'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to your application?',
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
        fs.writeFile('README-sample.md', readmeText, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    });

function generateReadme({title, description, installation,  usage, license, contributing, tests, username, email}) {
    const licenseText = getLicenseText(license)
    return `
# ${title} ${licenseText} <a id="title"></a>

## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description} <a id="description"></a>

## Installation
${installation}<a id="installation"></a>

## Usage
${usage} <a id="usage"></a>

## License
This is application is covered under the ${license} license. <a id="license"></a>

## Contributing
${contributing} <a id="contributing"></a>

## Tests
${tests} <a id="tests"></a>

## Questions
[GitHub](https://www.github.com/${username}) 

Please [email](mailto:${email}) me with any questions regarding this application.
`
}

function getLicenseText(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    } else if (license === "Apachi") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "Eclipse") {
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
    else if (license === "ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
    else if (license === "Perl") {
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }
    else if (license === "Perl") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }

}