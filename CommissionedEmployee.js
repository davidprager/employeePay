/*
 * File: CommissionedEmployee.js
 * -----------------------------
 * This file defines the CommissionedEmployee subclass of Employee.
 */

"use strict";

/*
 * This subclass represents a commissioned employee in which the pay is
 * defined as product of the sales volume and the commission rate,
 * supplemented by a base salary.
 */

function CommissionedEmployee(name, title) {
   let emp = Employee(name, title);
   emp.setBaseSalary = setBaseSalary;
   emp.setCommissionRate = setCommissionRate;
   emp.setSalesVolume = setSalesVolume;
   emp.getPay = getPay;
   let baseSalary = 0;
   let commissionRate = 0;
   let salesVolume = 0;
   return emp;

/* Define new methods to the CommissionedEmployee class */

   function setBaseSalary(dollars) {
      baseSalary = dollars;
   }

   function setCommissionRate(rate) {
      commissionRate = rate;
   }

   function setSalesVolume(dollars) {
      salesVolume = dollars;
   }

   function getPay() {
      return baseSalary + commissionRate * salesVolume;
   }

}
