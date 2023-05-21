const clickBtn = document.getElementById('click');
const id = 595; // уже обновила
// questions  - русские слова
// answers - английские слова
const newArr = ['in hindsight', 'непредусмотрительно',
'at the eleventh hour', 'в последний момент',
'at the drop of a hat', 'сразу, без раздумий',
'casualties', 'жертвы',
'cormorant', 'баклан',
'a mazer bowl', 'деревянный кубок',
'wrap up', 'завершить',
'sermon', 'проповедь',

]





const getWords = () => {
    const   questions = [],
            answers = [],
            words = Array(newArr.length / 2)
                .fill('')
                .map((item) => item = { id: '', question: '', answer: ''});

    for (const [index, value] of newArr.entries()) { index % 2 !== 0 ? questions.push(value) : answers.push(value) };
    
    for(const[index, word] of words.entries()) {
        word.id = id + index;
        word.question = questions[index];
        word.answer = answers[index];
    };
        
    console.log(JSON.stringify(words)); 
};

clickBtn.addEventListener('click', function(){
    getWords();
})
