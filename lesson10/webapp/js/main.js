/*jshint esversion:6 */
"use strict";
import {Person} from "./model/person.js";
import{Employee} from "./model/employee.js";

//Question 1
const arrPersons = [new Person("Ana Smith", new Date(1998, 11, 15)), 
                  new Person("Bob Jone", new Date(1945, 10, 16)),
                  new Person("Carlos Slim Helu", new Date(1976, 8, 24))];

arrPersons.forEach(person=> console.log(person.toString()));

//Question 2
const employee = new Employee("Jim Hanson");
employee.salary = 245990.00;
employee.doJob("Software Engineer");