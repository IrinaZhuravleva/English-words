const clickBtn = document.getElementById('click');
const id = lastId + 1; // lastId - последний id в базе данных
// questions  - русские слова
// answers - английские слова
const newArr = [
    'froth', 'пена',
    'croon', 'нежно петь',
    'dissuade', 'отговаривать',
    'billowy', 'бурный /объемный',
    'touchstoune', 'камень преткновения',
    'slosh', 'брызгать',
    'air is murderously hot', 'воздух убийственно жаркий',
    'the traffic lights change to green', 'светофор переключается на зеленый',
    'toot', 'гудок',
    'sandpiper', 'береговая кулик',
    'chipped tooth', 'сколотый зуб',
    'clammy', 'липкий',
    'musing', 'задумчивый',
    'pass out', 'вырубиться',
    'to be torn', 'быть разорванным',
    'mardy', 'капризный',
    'knickers', 'трусы',
    'rummage', 'рыться',
    'bleak', 'мрачный',
    'common sense', 'здравый смысл',
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
