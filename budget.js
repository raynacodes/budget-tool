const hourlyTitle = document.getElementById('hourly-title');
const salaryTitle = document.getElementById('salary-title');
const salaryBasedDiv = document.getElementById('salary-based-div');

function changeCalc() {
    salaryBasedDiv.style.display = 'block';
    salaryTitle.style.backgroundColor = '#B33D6D';
    salaryTitle.style.color = 'white';
    salaryTitle.style.padding = '5px 10px';
    salaryTitle.style.borderRadius = '20px';

    hourlyTitle.style.backgroundColor = 'white';
    hourlyTitle.style.color = '#B33D6D';
}
function calcOriginal(){
    salaryBasedDiv.style.display = 'none';

    hourlyTitle.style.backgroundColor = '#B33D6D';
    hourlyTitle.style.color = 'white';
    hourlyTitle.style.padding = '5px 10px';
    hourlyTitle.style.borderRadius = '20px';

    salaryTitle.style.backgroundColor = 'white';
    salaryTitle.style.color = '#B33D6D';
}



const hourlyInput = document.getElementById('hourly');
const submitBtn = document.getElementById('submit');

const salaryOutput = document.getElementById('salary-output');
const afterTaxOutput = document.getElementById('after-tax-output');
const monthlyOutput = document.getElementById('monthly-output');
const spendingOutput = document.getElementById('spending-output');

const rentOutput = document.getElementById('rent-output');
const rentPercentage = document.getElementById('rentP');

const investOutput = document.getElementById('invest-output');
const investPercentage = document.getElementById('investP');

const savingsOutput = document.getElementById('savings-output');
const savingsPercentage = document.getElementById('savingsP');

const otherOutput = document.getElementById('other-output');
const otherPercentage = document.getElementById('otherP');
const finalSpendingOutput = document.getElementById('final-spending-output');
const weeklyOutput = document.getElementById('weekly-output');


const debtAmount = document.getElementById('debt-amount');
const debtOutput = document.getElementById('debt-output');


//by salary
const salary2 = document.getElementById('salary2');
const submitBtn2 = document.getElementById('submit2');
const hourlyOutput2 = document.getElementById('hourly-2-output');




function calculateBudget() {

    // calculating salary (40 hour week, 52 weeks in a year)
    const salary = hourlyInput.value * 40 * 52;
    //showing salary on screen
    salaryOutput.innerHTML = salary;

    //calculating salary after tax (minus 30%)
    const salaryAfterTax = salary - (salary * 0.3);
    //showing salary after tax on screen
    afterTaxOutput.innerHTML = salaryAfterTax;

    //calculating monthly income
    const monthlySalary = Math.round(salaryAfterTax / 12) - debtAmount.value;
    //showing monthly income on screen
    monthlyOutput.innerHTML = monthlySalary;

    // default rent % that will be calculated initally 
    rentPercentage.defaultValue = 30;
    //calculating rent output based on % or default
    rentOutputValue = Math.round(monthlySalary * (rentPercentage.value / 100));
    //showing rent output on screen (based on % or default)
    rentOutput.innerHTML = rentOutputValue;

    // default invest % that will be calculated initally 
    investPercentage.defaultValue = 15;
    //calculating invest output based on % or default
    investOutputValue = Math.round(monthlySalary * (investPercentage.value / 100));
    //showing invest output on screen (based on % or default)
    investOutput.innerHTML = investOutputValue;

    //default savings % that will be calculated initally
    savingsPercentage.defaultValue = 20;
    //calculating savings output based on % or default
    savingsOutputValue = Math.round(monthlySalary * (savingsPercentage.value / 100));
    //showing savings output on screen (based on % or default)
    savingsOutput.innerHTML = savingsOutputValue;

    //default other % that will be calculated initally
    otherPercentage.defaultValue = 10;
    //calculating other output based on % or default
    const otherOutputValue = Math.round(monthlySalary * (otherPercentage.value / 100));
    //showing other output on screen (based on % or default)
    otherOutput.innerHTML = otherOutputValue;

    //fixed payment default
    debtAmount.defaultValue = 0;

    //totals ('Leftover for Spending')
    const spendingOutputValue = monthlySalary - (rentOutputValue + investOutputValue + savingsOutputValue + otherOutputValue);
    spendingOutput.innerHTML = spendingOutputValue;

    //fixed payment displaying on screen
    debtOutput.innerHTML = debtAmount.value;

    // weekly amount 
    weeklyOutput.innerHTML = Math.round(spendingOutputValue / 4);

    
    

}



function calculateHour() {
//by salary
    const hourlyOutput2Value = salary2.value / 2080;
    hourlyOutput2.innerHTML = hourlyOutput2Value;

    hourlyInput.defaultValue = hourlyOutput2Value;
    calculateBudget();
    calculateHour();
}

// const debtInput = document.getElementById('debt-input');
// const calcDebtBtn = document.getElementById('calc-debt-btn');
// const debtPercentage = document.getElementById('debt-p-output');
// const fixedPayment = document.getElementById('fixed-payment');

// function addDebt(){
//     debtPercentage.innerHTML = afterTaxOutput / debtInput.value;

//     fixedPayment.style.display = 'block';
// }