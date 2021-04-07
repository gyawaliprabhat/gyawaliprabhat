/* jshint esversion:6 */
export class Person{
    constructor(name, dateOfBirth){
        this._name = name;
        this._dateOfBirth = dateOfBirth;

    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get dateOfBirth(){
        return this._dateOfBirth;
    }
    set dateOfBirth(value){
        this._dateOfBirth = value;
    }
    toString(){
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`;
    }
}

