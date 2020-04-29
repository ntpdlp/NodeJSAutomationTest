class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(friend){
        console.log("hello " + friend);
    }

    getPersonalInfo(){
        console.log("my name is: " + this.name);
        console.log("my age is: " + this.age);
    }
}

module.exports = Person;


