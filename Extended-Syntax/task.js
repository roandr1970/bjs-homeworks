

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";
    let x = [];
    let d = b ** 2 - 4 * a * c;
    
    if (d < 0) {
        console.log("Корней нет");
    }

    if (d === 0) {
        x[0] = - b / (2 * a);
        console.log("Один корень: " + x);
    }
    
    if (d > 0) {
        x[0] = (- b + Math.sqrt(d)) / (2 * a);
        x[1] = (- b - Math.sqrt(d)) / (2 * a);
		console.log("Два корня: " + x[0] + " " + x[1]);
    }

    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let x = new Date();
    let currentDate = x.getFullYear();
    let myDate = dateOfBirthday.getFullYear();
    let result = currentDate - myDate;

    if (result >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}`);
    }
    else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
    }

    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let x = marks.length;
    let i;
    let sum = 0;

    if (x > 5) {
        let y = marks.length - 5;
        console.log(`Всего ${x} оценок`)
        for (i = 0; i < y ; i++) {
           marks.pop();
        }
    }

    for (i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    averageMark = sum / marks.length;
    console.log(averageMark);
    return averageMark;
}