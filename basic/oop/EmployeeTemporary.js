let Employee = require("./Employee");

class EmployeeTemporary extends Employee{
    constructor(name, id){
        super(name, id);
    }

    //overwrite
    getBonus(){
        return 0;
    }
}

module.exports = EmployeeTemporary;
