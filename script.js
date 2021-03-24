const fs = require("fs")
const inquirer = require("inquirer");
// const util = require("util");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

getPortInfo();

async function getPortInfo() {
    try{
        const{title, description, install, ussage, lisence, contribute, instructions, github, email} = await inquirer.prompt([
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
                message: "licence information",
                name: "license"
            },
            // create list w license info
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
      let content = ``
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