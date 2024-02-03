const { base } = require('./js/model.js');
// const base = [{
//     id: 59,
//     question: 'приход',
//     answer: 'parish'
// }, {
//     id: 60,
//     question: 'приход',
//     answer: 'dwindle'
// }, {
//     id: 61,
//     question: 'приход',
//     answer: 'parish'
// }, {
//     id: 62,
//     question: 'несоответствие',
//     answer: 'dwindle'
// }, {
//     id: 63,
//     question: 'импровизированный',
//     answer: 'makeshift'
// }];

const fs = require('fs');

// ПРОВЕРКИ
const array1 = base.map(item => item.question);
const array2 = [...new Set(array1)];

function checkDiff(arr1, arr2) {
    const arr = [];
    arr1.forEach((item, index) => {
        if (item !== arr2[index]) {
            arr.push(item);
        }
    });
    return arr;
}

function replaceDup(arr, base) {
    let updatedBase = [...base]; // Создаем копию base, чтобы не изменять оригинальный массив

    arr.forEach((value, index) => {
        const item = updatedBase[index];

        if (item && item.answer === value) {
            if (updatedBase[updatedBase.length - 1].answer === value) {
                updatedBase.pop();
            } else {
                item.answer = updatedBase[updatedBase.length - 1].answer;
                item.question = updatedBase[updatedBase.length - 1].question;
                updatedBase.pop();
            }
        }
    });

    return updatedBase;
}

function refactorArr(arr1, arr2) {
    // debugger
    const arr = checkDiff(arr1, arr2);
    const newArr = replaceDup(arr, base);
    // console.log(newArr);
    return newArr;
}

const a = refactorArr(array1, array2);
console.log(checkDiff(array1, array2)[0]);

// // Преобразуем массив в строку, чтобы записать в файл

const arrayAsJSON = JSON.stringify(a, null, 2);

// Задаем имя файла, в который будем записывать
const fileName = 'output.txt';

// Записываем строку в файл
// fs.writeFile(fileName, arrayAsJSON, (err) => {
//     if (err) {
//         console.error('Ошибка при записи в файл:', err);
//         return;
//     }

//     console.log('Массив успешно записан в файл:', fileName);
// });