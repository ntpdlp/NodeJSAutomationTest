let Employee = require("./Employee");

class EmployeeOffical extends Employee{
    constructor(name, id){
        super(name, id);
    }

    signContract(){
        console.log(this.name + " signed contract ");
    }
}

module.exports = EmployeeOffical;
