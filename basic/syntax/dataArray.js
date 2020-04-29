let myArray = [1,"Java",2,"JavaScript"];

//in mang, truy xuat mang
console.log(myArray);
console.log(myArray[3]);
console.log(myArray[7]); //undefined

//them thanh phan vao mang
myArray.push("AngularJS");
console.log(myArray);

//chinh sua
myArray[4] = "NodeJS";
console.log(myArray);

//lay 1 phan tu ra khoi mang
myArray.pop();
console.log(myArray);

//cat mang
myArray.push("MongoDB")
myArray.splice(1,2);
console.log(myArray);



