const clickBtn = document.getElementById('click');

let newArr = [{
//     id: 0,
//     question: 'аннотация /реклама',
//     answer: 'blurb'
// }, {
//     id: 0,
//     question: 'мы почти закончили',
//     answer: `we're rather coming to the dregs`
// }, {
//     id: 0,
//     question: 'кружится голова',
//     answer: 'to feel faint'
// }, {
//     id: 0,
//     question: 'поднимать /вертикальные колебания',
//     answer: 'heave'
// }, {
//     id: 0,
//     question: 'грязный',
//     answer: 'filthy'
// }, {
//     id: 0,
//     question: 'потертый',
//     answer: 'threadbare (carpet)'
// }, {
//     id: 0,
//     question: 'неистовый',
//     answer: 'frenetic'
// }, {
//     id: 0,
//     question: 'перебежать /сильный дождь',
//     answer: 'pelt across/ down'
// }, {
//     id: 0,
//     question: 'замешкаться',
//     answer: 'fumble'
// }, {
//     id: 0,
//     question: 'темный /затуманенный',
//     answer: 'murky'
// }, {
//     id: 0,
//     question: 'непосредственный',
//     answer: 'unmediated'
// }, {
//     id: 0,
//     question: 'трепаться',
//     answer: 'schmooze'
// }, {
//     id: 0,
//     question: 'терпеть что-то',
//     answer: 'put up with smth'
// }, {
//     id: 0,
//     question: 'я не теряю бдительности',
//     answer: 'keep me on my toes'
// }, {
//     id: 0,
//     question: 'у него сорвало крышу',
//     answer: 'he blew his gasket'
// }, {
//     id: 0,
//     question: 'ров',
//     answer: 'moat'
// }, {
//     id: 0,
//     question: 'сказываться на чем-то',
//     answer: 'take a toll on smth'
// }, {
//     id: 0,
//     question: 'постоять за себя',
//     answer: 'speak up'
// }, {
//     id: 0,
//     question: 'отговорка /увертка',
//     answer: 'subterfuge'
// }, {
//     id: 0,
//     question: 'злорадство',
//     answer: 'shadenfreude'
// }, {
//     id: 0,
//     question: 'препирательство',
//     answer: 'altercation'
// }, {
//     id: 0,
//     question: 'партия',
//     answer: 'batch'
// }, {
//     id: 0,
//     question: 'extremely drunk',
//     answer: 'get plastered'
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
    // const date = Date().split(' ').splice(2, 1);
    // const month = Date().split(' ').splice(1, 1);
    // const upperCaseMonth = month.toString().toUpperCase();
    // console.log(date, upperCaseMonth);
    
    let i = 520; // уже обновила

    newArr.forEach(item => item.id = i++);
    console.log(JSON.stringify(newArr)); //то, что надо

    newArr.forEach(item => {
        item.id = 0;
        item.question = '';
        item.answer = '';
    });
    
    console.log(JSON.stringify(newArr)); //то, что надо
    // return date;
})


// var array = [{
//         "Item": "A",
//         "Quantity": 2
//     },
//     {
//         "Item": "B",
//         "Quantity": 7
//     },
//     {
//         "Item": "C",
//         "Quantity": 1
//     }
// ];
// var result = array.map(function (item) {
//     return "(" + item.Item + "," + item.Quantity + ")"
// }).join(",");

