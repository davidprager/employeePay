/*
 * File: SalariedEmployee.js
 * -------------------------
 * This file defines the SalariedEmployee subclass of Employee.
 */

"use strict";

/*
 * This subclass represents a salaried employee in which the rate of
 * pay is determined by a fixed salary.
 */

function SalariedEmployee(name, title) {
   let emp = Employee(name, title);
   emp.setSalary = setSalary;
   emp.getPay = getPay;
   let salary = 0;
   return emp;

/* Define new methods to the SalariedEmployee class */

   function setSalary(dollars) {
      salary = dollars;
   }

   function getPay() {
      return salary;
   }

}
