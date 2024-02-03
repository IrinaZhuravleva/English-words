const clickBtn = document.getElementById('click');
const id = lastId + 1; // lastId - последний id в базе данных
// questions  - русские слова
// answers - английские слова
const newArr = [
    'divert', 'отвлекать /перенаправлять',
    'notorious', 'печально известный',
    'nefarious activities', 'сомнительные развлечения',
    'tabard', 'плащ (у рыцаря)',
    'newfangled', 'новомодный',
    'come across smth', 'столкнуться c чем-то',
    'to be in favour', 'быть за',
    '', '',
    '', '',
    '', '',
    '', '',
    '', '',
    '', '',
 
];

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
