class Employee{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    getBonus(){
        return 500;
    }

    getEmployeeInformation(){
        console.log("Name : " + this.name);
        console.log("ID: " + this.id);
    }
}

module.exports = Employee;
