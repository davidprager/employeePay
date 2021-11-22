/*
 * File: HourlyEmployee.js
 * -----------------------
 * This file defines the HourlyEmployee subclass of Employee.
 * The definitions of CommissionedEmployee and SalariedEmployee are
 * left as exercises.
 */

"use strict";

/*
 * This subclass represents an hourly employee whose pay is the
 * product of the hourly rate and the hours worked.  The code for
 * the subclass begins by calling the factory method for the
 * Employee superclass to create the template for the object.
 * It then defines the new variables and methods that the subclass
 * needs and assigns those methods to the original object.
 */

function HourlyEmployee(name, title) {
   let emp = Employee(name, title);
   let hourlyRate = 0;
   let hoursWorked = 0;
   emp.setHourlyRate = setHourlyRate;
   emp.setHoursWorked = setHoursWorked;
   emp.getPay = getPay;
   return emp;

/*
 * Sets the hourly rate for this employee.
 */

   function setHourlyRate(wage) {
      hourlyRate = wage;
   }

/*
 * Sets the number of hours worked in the current pay period.
 */

   function setHoursWorked(hours) {
      hoursWorked = hours;
   }

/*
 * Overrides the getPay method in the Employee superclass.
 */

   function getPay() {
      return hoursWorked * hourlyRate;
   }
}
