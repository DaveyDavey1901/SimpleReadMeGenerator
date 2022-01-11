
function renderlicenseBadge(data) {
  const TypeOfLicense = data.license[0];
  let licenseBadge = " ";
  if (TypeOfLicense === "MIT") {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (TypeOfLicense === "GNU General Public License v3") {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (TypeOfLicense === "Apache 2.0 License") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (TypeOfLicense === "Mozilla Public License 2.0") {
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  
  return licenseBadge;
};

function generateMarkdown(data) {
	return `# ${data.title}
## Table of Contents:
  1. [Description](#Description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing-and-Resources
  5. [GitHub Repository](#Repository-Details-Link)
  6. [Tests](#Tests)
  4. [License](#License-Link)
  7. [GitHub](#GitHub-Account)
  8. [E-mail](#E-mail)
## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing People and Resources
${data.contributing}
## Repository Details and Link.
${data.repository}
## Tests
For testing purposes, run the following command:
${data.tests}

## License Link
${renderlicenseBadge(data)} Click Badge for License Details.



## Questions:
contact me if you have any questions about the readme generator.

## GitHub Account
${data.github}
## E-mail
Drop me an email at ${
    data.email
  } if you would like to know more or would like to contribute.`; 
}
module.exports = generateMarkdown;
