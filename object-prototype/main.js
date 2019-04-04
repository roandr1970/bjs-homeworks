
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday);

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    const now = Number(new Date());
    birthday = Number(new Date(birthday));
    const diff = now - birthday;
    let age = Math.floor(diff / (365.242 * 60 * 60 * 24 * 1000)); 
    
    return (age >= 18) ? "Да" : "Нет";
}

function initPrintAnimalSound() {
    const animal= {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;

    if (animal === undefined) {
    sound = null;
    } 

    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum = sum + parseInt(marks[i]);
    }

    const average = sum / marks.length;

    const roundedAverage = Math.round (average);

    console.log (roundedAverage);

    return roundedAverage;

}
