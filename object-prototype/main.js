'use strict';
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    const now = Date.now();

    const date = new Date(birthday);

    birthday = Date.now();

    const diff = now - birthday;

    const age = diff / 365.25;
    
    let value = (age <= 18) ? `Нет` : `Да`;
    return value;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
   if (animal === undefined) {

    return null;

   } else if (animal != undefined) {

    const sound = animal.sound;

    return sound;

   }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
   let sum = 0;
   for (let i = 0; i < marks.length; i++) {

     sum += marks[i];
   }
   let average = sum / marks.lenght;
   let roundedAverage = Math.round(average);

   return roundedAverage;


}