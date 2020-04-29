let EmployeeTemporary = require("./EmployeeTemporary");
let EmployeeOffical = require("./EmployeeOffical");

let vo = new EmployeeTemporary("Vo", "ID_1");
let adnan = new EmployeeOffical("Adnan","ID_2");

vo.getEmployeeInformation();
console.log("Temporary: " + vo.getBonus());

adnan.getEmployeeInformation();
console.log("Offical: " + adnan.getBonus());
adnan.signContract();
