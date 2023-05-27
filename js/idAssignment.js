const clickBtn = document.getElementById('click');
const id = lastId + 1; // lastId - последний id в базе данных
// questions  - русские слова
// answers - английские слова
const newArr = [
    'yokel', 'деревенщина',
    'yoke', 'ярмо',
    'herbaceous', 'травянистый',
    'bemuse', 'смущать',
    'fussing', 'суетиться',
    'salvage', 'спасать',
    'a stretch', 'inf. сложная задача',
    'beckon', 'манить',
    'grumpily', 'ворчливо',
    'fidgeting', 'ерзая',
    'genially', 'дружелюбно',
    'twitch', 'дергаться',
    'altercation', 'перебранка',
    'sallow', 'болезненно-желтый',
    'collate', 'сопоставлять',
    'purposefully', 'целенаправленно',
    'poignant', 'горький',
    'deaden', 'подавлять /ослаблять /притуплять',
    'quipped', 'пошутил',
    'sodding', 'проклятый',
    'canopy', 'навес',
    'hedgerow', 'живая изгородь',
    'dodgy', 'подозрительный',
    'ridge', 'гребень',
    'shallow-pitched', 'плоский',
    'slate', 'шифер',
    'slurry', 'грязь',
    'bale', 'тюк',
    'slaughterhouse', 'скотобойня',
    'sod', 'земля',
    'redolent', 'пронизанный',
    'dung', 'навоз',
    'hobble', 'прихрамывать',
    'insipid-looking', 'безвкусный',
    'fidgety', 'непоседливость',
    'sum it up', 'в двух словах',
    'sift', 'просеивать',
    'jabber', 'болтать',
    'patty', 'котлета',
    'it\'s bonkers', 'это безумие',
    'have struck a chord', 'зацепило',
    'sod off', 'отвали',
    'sod\'s law', 'закон подлости',
    'modicum', 'малая часть',
    'put the world to rights', 'решить все проблемы',
    'run a bath', 'набрать ванну',
    
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
