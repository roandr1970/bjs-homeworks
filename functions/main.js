// Задание 1
function getSolutions( a, b, c ) {
    let d = b*b - 4 * a * c;
    if (d < 0) {
        return {D: d};
    }

    if (d === 0) {
        let x1 = - b / (2 * a);
        return  {x1: x1, D: d};
    }

    if (d > 0) {
        let x1 = (- b + Math.sqrt(d)) / (2 * a);
        let x2 = (- b - Math.sqrt(d)) / (2 * a);
        return {x1: x1, x2: x2, D: d};
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения (${a})*x^2 + (${b})*x + (${c}) = 0`);
    console.log("Значение дискриминанта: D = " + result.D);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    }

    if (result.D === 0) {
        console.log("Уравнение имеет один корень X₁ = " + result.x1);
    }

    if (result.D > 0) {
        console.log("Уравнение имеет два корня. X₁ = " + result.x1 + " X₂ = " + result.x2);
    }
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

// Задание 2

function  getPersonData( secretData ) {
    let result = {
        firstName: help (secretData.aaa),
        lastname: help (secretData.bbb)
    };
    return result;
}

function help (a) {
    if (a===1) {
        return "Эмильо";
    }

    if (a===0) {
        return "Родриго";
    }
}

console.log(getPersonData({aaa: 0, bbb: 0 }));
console.log(getPersonData({aaa: 0, bbb: 1 }));
console.log(getPersonData({aaa: 1, bbb: 0 }));
console.log(getPersonData({aaa: 1, bbb: 1 }));

// Задание 3

function getAverageScore(data) {
    let averageSum = 0;
    let i = 0;
    for (let dat in data) {
        let value = data [dat];
        let averageGradeSubject = calculationAverage (value);
        console.log (`${dat}: ${averageGradeSubject}`);
        averageSum = averageSum + averageGradeSubject;
        i++; 
    }
   
    let average = averageSum / i;
    console.log(`average: ${average}`);
}

function calculationAverage (array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let averageArray = sum / array.length;
    return averageArray;
}

getAverageScore ({
    algebra: [3,4,3],
    russian: [4,4,5],
    geometry: [2,3,4,3],
    music: [5,5,4,5],
    english: [3,3,4,5,4]
});
