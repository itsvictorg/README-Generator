function generateMarkdown(data) {
  return `
# Project Title
${data.projectTitle}
# Description
${data.description}
# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
  
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${data.license}
* As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added. 
# Contributing 
${data.contributing}
# Tests
${data.tests}
# Contact Information 
* GitHub Username: ${data.username}
* Contact Email: ${data.useremail}
`;
}


module.exports = generateMarkdown;