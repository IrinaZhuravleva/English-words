const objectBase = require('./js/model.js');

const isCyrillic = (str) => /^[а-яёА-ЯЁDVC1-9., --!?/()\d]+$/.test(str);
const isLatin = (str) => /[a-zA-Z.,!?/()\d]/.test(str);

test('Check Cyrillic language for each element in the array', () => {
    objectBase.base.forEach((item) => {
        expect(isCyrillic(item.question)).toBe(true);
    });
});

test('Check Latin language for each element in the array', () => {
    objectBase.base.forEach((item) => {
        expect(isLatin(item.answer)).toBe(true);
    });
});

test('Check for duplicates in questions', () => {
    const array1 = objectBase.base.map(item => item.question);
    const array2 = [...new Set(array1)];
    expect(array1.every((value, index) => value === array2[index])).toBe(true);
});

test('Check for duplicates in answers', () => {
    const array1 = objectBase.base.map(item => item.answer);
    const array2 = [...new Set(array1)];
    expect(array1.every((value, index) => value === array2[index])).toBe(true);
});
