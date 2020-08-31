const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    { name: "title", message: "Whats the title of your project?" },
    {
      name: "description",
      message: "Whats the description of the project?",
    },
    {
      name: "license",
      type: "list",
      choices: ["MIT", "BSD 3", "Creative Commons", "GNU"],
      message: "What license would you like?",
    },
    { name: "installation", message: "Installation Instructions: " },
    { name: "usage", message: "Usage Information: " },
    { name: "contributing", message: "Contribution Guidelines: " },
    { name: "tests", message: "Testing: " },
    { name: "username", message: "GitHub Username: " },
    { name: "email", message: "Email: " },
  ])
  .then((response) => {
    let output = ` \n# ${response.title}\n`;
    output += `## Description\n`;
    output += `${response.description}\n`;
    output += `## Installation\n`;
    output += `${response.installation}\n`;
    output += `## Usage\n`;
    output += `${response.usage}\n`;
    output += `## Contributing\n`;
    output += `${response.contributing}\n`;
    output += `## Test\n`;
    output += `${response.tests}\n`;
    output += `## Table of Contents\n`;

    let tableOfContent = [
      "Description",
      "Installation",
      "Usage",
      "Contributing",
      "Test",
      "Questions",
    ];
    for (let loop of tableOfContent) {
      output += `* [${loop}](##${loop})\n`;
    }

    output += `## Questions\n`;
    output += `- [Link to GitHub Profile](https://github.com/${response.username})\n`;
    output += `- You can teach me here! ${response.email}`;
    let markdown;
    if (response.license === "MIT") {
      let mit =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      markdown = mit.concat(output);
    } else if (response.license === "BSD 3") {
      let bsd =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      markdown = bsd.concat(output);
    } else if (response.license === "Creative Commons") {
      let cc =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      markdown = cc.concat(output);
    }
    // output += `${response.description}\n`;

    fs.writeFile("README.md", markdown, (error) => {
      console.log("README was created successfully");
    });
    console.log(markdown);
  });

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title

// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// // array of questions for user
// const questions = [];

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
