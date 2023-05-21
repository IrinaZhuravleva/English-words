const clickBtn = document.getElementById('click');
// const newArr = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
// const newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой', 'восьмой', 'девятый', 'десятый'];
const a = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
const questions = [];
const answers = [];
for (const [index, value] of a.entries()) {
    if(index % 2 !== 0) {
        questions.push(value);
    } else {
        answers.push(value);
    }
};

const wordsQuantity = a / 2;
const words = Array(wordsQuantity)
    .fill('')
    .map((item) => item = { id: '', question: '', answer: ''});
for(const[index, word] of words.entries()) {
    word.id = id + index;
    word.question = questions[index];
    word.answer = answers[index];
};



let newArr = [{
// }, {
//     id: 0,
//     question: 'сражать',
//     answer: 'smite /smote /smitten '
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
// }, {
//     id: 0,
//     question: '',
//     answer: ''
}];

// It must be said that natural beauty is not just in the eye of the beholder.
// Maintaining one 's work-life balance is definitely a key ingredient for happiness.
// feel like they always have a fellow shoulder to lean on when times get tough
// const date = '';
clickBtn.addEventListener('click', function(){
    let i = // уже обновила

    newArr.forEach(item => item.id = i++);
    console.log(JSON.stringify(newArr)); //то, что надо

    newArr.forEach(item => {
        item.id = 0;
        item.question = '';
        item.answer = '';
    });
    
    console.log(JSON.stringify(newArr)); 
})
