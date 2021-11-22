/* Demo of employee objects */


"use strict"

function employeeEntry () {
    // Define variables for all actionable elements in the form
    let hourlyOption = document.getElementById("hourlyOption");
    let salaryOption = document.getElementById("salaryOption");
    let commissionOption = document.getElementById("commissionOption");
    let formSubmit = document.getElementById("formSubmit");
    let reportButton = document.getElementById("reportButton");
    let name = document.getElementById("name");
    let title = document.getElementById("title");
    let hourlyRate = document.getElementById("hourlyRate");
    let hours = document.getElementById("hours");
    let salary = document.getElementById("salary");
    let baseSalary = document.getElementById("baseSalary");
    let sales = document.getElementById("sales");
    let commissionRate = document.getElementById("commissionRate");
    let numberRecords = document.getElementById("numberRecords");

    // Set up event listeners for fields on form
    hourlyOption.addEventListener("change", showHourly);
    salaryOption.addEventListener("change", showSalary);
    commissionOption.addEventListener("change", showCommission);
    formSubmit.addEventListener("click", enterData);
    reportButton.addEventListener("click", employeeReport);

    // Initialize employee array and records variable
    let employees = [];
    let numRecords = 0;

    // Respond to the Hourly Radio Button being selected
    function showHourly() {
        hourlyEntry.style.display = "grid";
        salaryEntry.style.display = "none";
        commissionEntry.style.display = "none";
    }

    // Respond to the Salary Radio Button being selected
    function showSalary() {
        hourlyEntry.style.display = "none";
        salaryEntry.style.display = "grid";
        commissionEntry.style.display = "none";
    }
    // Respond to the Commission Radio Button being selected
    function showCommission() {
        hourlyEntry.style.display = "none";
        salaryEntry.style.display = "none";
        commissionEntry.style.display = "grid";
    }

    // This function processes data that has been entered for a specific employee
    // An appropriate object will be created depending upon the subclass seleceted
    // The emp record will then be added to the employees array
    function enterData() {
        if (hourlyOption.checked) {
            let emp = HourlyEmployee(name.value, title.value);
            emp.setHourlyRate(hourlyRate.value);
            emp.setHoursWorked(hours.value);
            employees.push(emp);
            clearFields();
        } else if (salaryOption.checked) {
            let emp = SalariedEmployee(name.value, title.value);
            emp.setSalary(salary.value);
            employees.push(emp);
            clearFields();
        } else {
            let emp = CommissionedEmployee(name.value, title.value);
            emp.setBaseSalary(parseFloat(baseSalary.value));
            emp.setCommissionRate(parseFloat(commissionRate.value));
            emp.setSalesVolume(parseFloat(sales.value));
            employees.push(emp);
            clearFields();
        }
        numRecords++;
        numberRecords.innerHTML = "The number of records entered is: " + numRecords;
    }

    // This function displays the employees regardless of their subclass
    function employeeReport() {
        console.log("");
        for (let i= 0; i < employees.length; i++){
            console.log(employees[i].toString().padEnd(35, " ") + employees[i].getPay());
        }
    }

    // This function clears the values from all visible fields
    function clearFields() {
        name.value = "";
        title.value = "";
        hourlyRate.value = "";
        hours.value = "";
        salary.value = "";
        baseSalary.value = "";
        commissionRate.value = "";
        sales.value = "";
        commissionOption.checked = false;
        salaryOption.checked = false;
        hourlyOption.checked = false;
        hourlyEntry.style.display = "none";
        salaryEntry.style.display = "none";
        commissionEntry.style.display = "none";
    }
}


