const clickBtn = document.getElementById('click');
const id = lastId + 1; // lastId - последний id в базе данных
// const id = 440;
// questions  - русские слова
// answers - английские слова
const newArr = [
    'mooch around', 'бродить без цели',
    'loiter', 'бродить',
    'fug', '(inf). туман, warm, stuffy atmosphere',
    'bona fide', 'добросовестный, законный',
    'a slouch', 'лентяй, бездельник',
    'cram', 'зубрить/запихать',
    'with great panache', 'c бравадой, шиком',
    'jerry-build', 'построить небрежно',
    'to feel off-kilter', 'не в своей тарелке',
    'teal', 'чирок',
    'How is the sticks?', 'Как там в провинции?',
    'to be in the sticks', 'быть в провинции',
    'a run-in', 'ссора, конфликт',
    'niggle', 'критика, раздражение',
    'pout', 'дуться',
    'twinge', 'укол боли',
    'vintner', 'виноторговец',
    'lower end', 'низкого уровня',
    

  
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
