// const objectBase = require('./js/model.js');
import { objectBase } from './js/model.js';
const isCyrillic = (str) => /^[а-яёА-ЯЁDVC1-9., --!?/()\d]+$/.test(str);
const isLatin = (str) => {
    if (str === "a") return false;
    return /[a-zA-Z.,!?/()\d]/.test(str);
};
const questions = objectBase.base.map(item => item.question);

function extractWords(question) {
    return question
        .toLowerCase()
        .split('/')
        .map(w => w.trim())
        .filter(Boolean);
}

function findDuplicates(questions) {
    const seen = new Set();
    const duplicates = new Set();

    questions.forEach(question => {
        extractWords(question).forEach(word => {
            if (seen.has(word)) {
                duplicates.add(word);
            } else {
                seen.add(word);
            }
        });
    });
    console.log('Duplicates found:', [...duplicates]);
    return [...duplicates];
}

test('Check Cyrillic language for each element in the array', () => {
    const nonCyrillicWords = [];

    objectBase.base.forEach((item) => {
        if (!isCyrillic(item.question)) {
            nonCyrillicWords.push(item.question);
        }
    });

    if (nonCyrillicWords.length > 0) {
        console.log('Non-Cyrillic words:', nonCyrillicWords);
    }

    expect(nonCyrillicWords).toHaveLength(0);
});

test('Check Latin language for each element in the array', () => {
    objectBase.base.forEach((item) => {
        const result = isLatin(item.answer);
        if (!result) {
            console.log('Non-Latin word:', item.answer);
        }
        expect(result).toBe(true);
    });
});

test('Check for duplicates in questions', () => { 
    const duplicates = findDuplicates(questions);
    expect(duplicates.length).toBe(0);
});

test('Check for duplicates in answers', () => {
    const answers = objectBase.base.map(item => item.answer);
    const duplicates = findDuplicates(answers);
    expect(duplicates.length).toBe(0);
});
