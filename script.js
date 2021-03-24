const fs = require("fs")
const inquirer = require("inquirer");
// const util = require("util");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

getPortInfo();

async function getPortInfo() {
    try{
        const{title, description, install, usage, license, contribute, instructions, github, email} = await inquirer.prompt([
            {
                message: "What is the title of your project?",
                name: "title"
            },
            {
                message: "Description of project",
                name: "description"
            },
            {
                message: "Please enter installation instructions",
                name:"install"
            },
            {
                message: "Please enter usage information",
                name:"ussage"
            },
            {
                type: "list",
                message: "licence information",
                choices: ["ISC", "BSD", "MIT"],
                name: "license"
            },
         
            {
                message: "enter contribution guidlines",
                name: "contribute"
            },
            {
                message: "test instructions",
                name: "instructions"
            },
            {
                message: "github username",
                name: "github"
            },
            {
                message: "email address",
                name: "email"
            }
      
        
      
      
        ]);
      let content = 
`# ${title}
      
# Description
      
${description}
      
# Table of Contents 
      
* [Instalation](#instalation)
      
* [Usage](#usage)
      
* [License](#license)
      
* [Contributing](#contributing)
      
* [Tests](#tests)
      
* [Questions](#questions)
      
      
# Instalation 
      
${install}
      
# Usage 
      
${usage}
      
# License 
      
${license}
      
# Contributing 
      
${contribute}
      
# Tests
      
${instructions}
      
# Questions
For further queestions please contact me at
${github}
${email}`
        // await writeFileAsync("index.html", content, "utf8");
        await fs.writeFile("readme.md", content, function(err){
            if (err){
                throw new console.error("There was an error writting.");
            }
            else{
                console.log("sucess");
            }
        });
    }

    catch(err){
        console.log("There seems to be an error")
    
    }

}