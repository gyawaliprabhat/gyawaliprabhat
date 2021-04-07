/*jshint esversion:6*/
import {Person} from "./person.js";
export class Employee extends Person{
    constructor(name){
        super(name, null);
        this._salary = 0;
        this._hireDate = null;
    }
    get salary(){
        return this._salary;
    }
    get hireDate(){
        return this._hireDate;
    }
    set salary(value){
        this._salary = value;
    }
    set hireDate(value){
        this._hireDate = value;
    }
    doJob(jobTitle){
        console.log(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
    }

    
}