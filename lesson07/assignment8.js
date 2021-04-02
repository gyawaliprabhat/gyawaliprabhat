/*jshint esversion:6 */

//Question 6
var count = (function () {
    var counter = 0;
    const addCounter = function () {
        return ++counter;
    };
    const resetCounter = function () {
        counter = 0;
        return counter;
    };
    return {
        add: addCounter,
        reset: resetCounter
    };
})();
console.log("Printing result of question 6...");
console.log("Calling add function 3 times...");
console.log(count.add());
console.log(count.add());
console.log(count.add());
console.log("Calling reset function");
console.log(count.reset());


//Question 8 
var make_adder = function (inc) {
    var counter = 0;
    return function () {
        counter += inc;
        return counter;
    };
};
let add5 = make_adder(5);
console.log("Printing result of question 8....");
console.log("Adding by 5 three times by calling add5 function...")
console.log(add5());
console.log(add5());
console.log(add5());
console.log("Adding by 7 three times by calling add7 function...");
let add7 = make_adder(7);
console.log(add7());
console.log(add7());
console.log(add7());

//Question 10
let employee = (function () {
    let name = "";
    let age = "";
    let salary = 0.0;
    let setAge = function (newAge) {
        age = newAge;
    };
    let setSalary = function (newSalary) {
        salary = newSalary;
    };
    let setName = function (newName) {
        name = newName;
    };
    let getAge = function () {
        return age;
    };
    let getSalary = function () {
        return salary;
    };
    let getName = function () {
        return name;
    };
    let increaseSalary = function (percentage) {
        setSalary(getSalary() * (1 + percentage / 100));
    };
    let incrementAge = function () {
        setAge(getAge() + 1);
    };
    return {
        setAge, setSalary, setName, increaseSalary, incrementAge,
        toString: function () {
            return `Name:${getName()} Age:${getAge()} Salary ${getSalary()}`;
        }

    };

}());
console.log("Printing result of question 10");
employee.setName("prabhat");
employee.setSalary(100);
employee.setAge(10);
console.log("\t"+employee.toString());
console.log("After increament of salary by 5% and age by 1..");
employee.increaseSalary(5);
employee.incrementAge();
console.log("\t"+employee.toString());
console.log("Again increament of salary by 5% and age by 1..");
employee.increaseSalary(5);
employee.incrementAge();
console.log("\t"+employee.toString());

//Question 11
let address = (function () {
    let state = "";
    let zip = "";;
    let city = "";;
    let setState = function (newState) {
        state = newState;
    };
    let setZip = function (newZip) {
        zip = newZip;
    };
    let setCity = function (newCity) {
        city = newCity;
    };
    let getCity = function () {
        return city;
    };
    let getState = function () {
        return state;
    };
    let getZip = function () {
        return zip;
    }
    return {
        setCity, setState, setZip, getCity, getState, getZip,
        toString: function () {
            return `City: ${getCity()} State: ${getState()} Zip: ${getZip()}`;
        }
    };

})();

let employee1 = (function () {
    let name = "";
    let age = "";
    let salary = 0.0;
    let address = null;
    let setAddress = function (newAddress) {
        address = newAddress;
    }
    let getAddress = function () {
        return address;
    }
    let setAge = function (newAge) {
        age = newAge;
    };
    let setSalary = function (newSalary) {
        salary = newSalary;
    };
    let setName = function (newName) {
        name = newName;
    };
    let getAge = function () {
        return age;
    };
    let getSalary = function () {
        return salary;
    };
    let getName = function () {
        return name;
    };
    let increaseSalary = function (percentage) {
        setSalary(getSalary() * (1 + percentage / 100));
    };
    let incrementAge = function () {
        setAge(getAge() + 1);
    };
    return {
        setAge, setSalary, setName, increaseSalary, incrementAge, getAddress, setAddress, address,
        toString: function () {
            return `Name:${getName()} Age:${getAge()} Salary: ${getSalary()} Address: ${getAddress().toString()}`;
        }

    };

}());

console.log("Printing Result of question 11....");
console.log("Setting the Address and Employee...")
address.setCity("Fairfield");
address.setZip("52557");
address.setState("Iowa");
employee1.setAddress(address);
employee1.setName("prabhat");
employee1.setSalary(100);
employee1.setAge(10);
console.log("\t"+employee1.toString());
console.log("After increament of salary by 5% and age by 1..");
employee1.increaseSalary(5);
employee1.incrementAge();
console.log("\t"+employee1.toString());
console.log("Again increament of salary by 5% and age by 1..");
employee1.increaseSalary(5);
employee1.incrementAge();
console.log("\t"+employee1.toString());

