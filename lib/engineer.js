// 
const Employee = require("./employee.js"); 

class Engineer extends Employee{ 
    constructor(name, email, id, github){ 
        super(name, email, id); 
        this.github = github; 
        this.title = "Engineer"
    }  
    getGithub() { 
        return this.github
    }
    getRole(){ 
        return this.title
    } 
}
module.exports = Engineer; 