//Capture following inputs
function calculateSalary() {
    //Get values from form
    let employeeName = document.getElementById("employee_name").value;
    let dailyRate = Number(document.getElementById("daily_rate").value);
    let daysWorked = Number(document.getElementById("days_worked").value);

    //Calculate Salary
    let grossSalary = dailyRate * daysWorked;

    //VAT
    let vatRate = 0;
    if(grossSalary >= 20000){
        vatRate = 0.20;
    }
    else if(grossSalary >= 10000 && grossSalary < 20000){
        vatRate = 0.10;
    }
    else {
        vatRate = 0;
    }

    //Calculate VAT
    let vat = grossSalary * vatRate;

    //Calculate Net Salary
    let netSalary = grossSalary - vat;

    //Display Results
    document.getElementById("result").innerHTML = 
    ("Employee Name: " + employeeName + 
        "<br>Gross Salary: " + grossSalary + 
        "<br>VAT: " + vat + 
        "<br>Salary after VAT: " + netSalary);
}