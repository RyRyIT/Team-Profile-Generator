const   Employee = require("./employee.js");

class Manager extends Employee{ 
    constructor(name, email, id, officeNumber){ 
        super(name, email, id); 
        this.office = officeNumber;
    } 
    getGithub(){ 
        return "Github"
    }
    getRole(){ 
        return "Manager"
    }
}
module.exports = Manager; 

// const name = "Ryan"
// const id = 4
// const email = "myemail"
// const officeNumber = 13

// const matt = new Manager (name, id, email, officeNumber)
// console.log(Ryan)