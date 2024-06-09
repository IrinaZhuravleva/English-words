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
    'epOnymous', 'одноименный',
    'amble', 'медленно расслабленно идти',
    'to be magnАnimous to', 'быть великодушным к',
    'get the boot', 'inf быть смещенным с поста',
    'sAturnine', 'мрачный, мистичный',
    'brooding', 'задумчивый',
    'back rAmrod straight', 'с прямой спиной',
    'wail', 'протяжный плач на высокой ноте',
    'vocIferous', 'голосистый',
    'eiderdown', 'одеяло на гагачьем пуху',
    'confined', 'ограниченное, сжатое (пространство, объем)',
    'zilch', 'inf ничего',
    'rEpented', 'раскаивавшийся',
    'build up', 'наращивать, накапливать, подготавливать',
    'rabies', 'бешенство (у животных)',
    'succInct', 'сжатый',
    'sneaky', 'подлый',
    'snug', 'аккуратный',
    'so far so good', 'пока всё хорошо',
    'loathe', 'ненавидеть',
    'squEamish (about)', 'брезгливый (к)',
    'lugUbrious', 'печальный',
    'to be quite a dish', 'inf быть сексуальным',
    'be up to your ears', 'быть по уши',
    'lurch', 'крен, покачнуться',
    'lopsIdedly', 'односторонне, однобоко',
    'squelch', 'хлюпать (по грязи)',
    'tenAcious', 'крепкая (хватка)',
    'fluster up', 'волноваться',
    'go out the window', 'исчезать',
    'sink in', 'осознать, впитать',
    'droop', 'свисать/лицо обвисло',
    // '', '',
    // '', '',
    // '', '',
    // '', '',
    // '', '',
 
 
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

