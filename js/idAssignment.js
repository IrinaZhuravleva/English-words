const clickBtn = document.getElementById('click');

let newArr = [{
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
//   }, {
//     id: 0,
//     question: '',
//     answer: ''
//  }, {
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
    // const date = Date().split(' ').splice(2, 1);
    // const month = Date().split(' ').splice(1, 1);
    // const upperCaseMonth = month.toString().toUpperCase();
    // console.log(date, upperCaseMonth);
    
    let i = 367;


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

