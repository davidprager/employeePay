/*
 * File: Employee.js
 * -----------------
 * This file defines the Employee class, which is the top of a class
 * hierarchy with three subclasses: HourlyEmployee, CommissionedEmployee,
 * and SalariedEmployee.  The HourlyEmployee subclass is defined in a
 * separate file; the other two subclasses are left as exercises.
 */

"use strict";

/*
 * This class represents the superclass of the various categories of
 * employees.  It defines the methods that are common to all employees.
 */

function Employee(name, title) {
   return { getName, getJobTitle, getPay, toString };

/*
 * Returns the name of the Employee object.
 */

   function getName() {
      return name;
   }

/*
 * Returns the job title of the Employee object.
 */

   function getJobTitle() {
      return title;
   }

/*
 * Returns the current pay due to this employee.  This method is specified
 * at this level but implemented only in each Employee subclass.
 */

   function getPay() {
      throw Error("getPay not defined at this level");
   }

/*
 * Converts the Employee object to a string in the form "name (title)".
 */

   function toString() {
      return name + " (" + title + ")";
   }
}
