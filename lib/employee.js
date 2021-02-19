class Employee{
    
    constructor(name, email, id){
        this.name = name;
        this.email = email;
        this.id = id; 
        this.title = "Employee";

    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getRole(){
        return this.title;
    };
    getEmail(){
        return this.email;
    }

}

module.exports = Employee;