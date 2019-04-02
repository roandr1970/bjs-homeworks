
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
   
    let percent1 = parseInt (percent);
    let contribution1 = parseInt (contribution);
    let amount1 = parseInt (amount);
    
    if (isNaN(percent1)) {
        console.log (`Параметр percent содержит неправильное значение ${percent}`); 
    }
   
    if (isNaN(contribution1)) {
        console.log (`Параметр contribution содержит неправильное значение ${contribution}`); 
    }
    
    if (isNaN(amount1)) {
        console.log (`Параметр amount содержит неправильное значение ${amount}`); 
    }

    let currentDate = new Date();
    let myDate = new Date (date);
    let n = (myDate.getFullYear() - currentDate.getFullYear()) * 12;
    n -= currentDate.getMonth() + 1;
    n += myDate.getMonth();
    let amountRefund = amount1 - contribution1;
    let p = 1/12 * percent1 / 100;
    let monthlyPayment = amountRefund * (p + p / (Math.pow((1 + p), n) - 1));
    let totalAmount = contribution1 + monthlyPayment * n;
    totalAmount = totalAmount.toFixed(2);
    console.log (totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (Boolean(name) == false) {
        greeting = "Аноним";
    } else {
        greeting = name;
    }
    console.log (`Привет, мир! Меня зовут ${greeting}`);
    return `Привет, мир! Меня зовут ${greeting}`;
}