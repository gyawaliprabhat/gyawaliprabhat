/*jshint esversion:6 */

//Question 1.Solution
console.log("Printing Question 1 Answer");

let person = {
    name: "",
    dateOfBirth: null,
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    }
};

let john = Object.create(person);
john.name = "John";
john.dateOfBirth = new Date(1998, 11, 10);
console.log(`The person's name is ${john.getName()}\n${john.getName()} was bofn on ${john.dateOfBirth.getFullYear()}-${(john.dateOfBirth.getMonth() + 1)}-${john.dateOfBirth.getDate()}`);


//Question 2 Solution
console.log("\nPrinting Question 2 Answer");

let employee = Object.create(person);
employee.salary = 0;
employee.hireDate = Date.now();
employee.doJob = function(jobTitle){
    console.log(`${this.name} is ${jobTitle} who earns $${this.salary}`);
};

let anna = Object.create(employee);
anna.name = "Anna";
anna.salary = 249995.50;
anna.doJob("Programmer");

//Question 3.Solution
console.log("\nPrinting Question 3 Answer ");

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.getName = function(){
        return this.name;
    };
    this.setName = function(name){
        this.name = name;
    };
    this.toString = function(){
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${(this.dateOfBirth.getMonth() + 1)}-${this.dateOfBirth.getDate()}`;
    };

}
let p = new Person("Peter", new Date(1985,10,10));
console.log(p.toString());

