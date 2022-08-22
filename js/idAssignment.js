const clickBtn = document.getElementById('click');

let newArr = [{
 
//     id: 0,
//     question: 'грабительский',
//     answer: 'extortionate'
// }, {
//     id: 0,
//     question: 'невнимательный к другим',
//     answer: 'inconsIderate'

// }, {
//     id: 0,
//     question: 'заботливый',
//     answer: 'consIderate'
// }, {
//     id: 0,
//     question: 'копить',
//     answer: 'to lay aside'
// }, {
//     id: 0,
//     question: 'осмеивать',
//     answer: 'to rIdicule'
//  }, {
//     id: 0,
//     question: 'полагающийся на свои собственные силы',
//     answer: 'self-reliant'
// }, {
//     id: 0,
//     question: 'души не чаять',
//     answer: 'to dote'
// }, {
//     id: 0,
//     question: 'постоять за/рассчитывать на',
//     answer: 'to fend for myself'
// }, {
//     id: 0,
//     question: 'подавлять чрезмерной заботой',
//     answer: 'to smother'
// }, {
//     id: 0,
//     question: 'бережливый',
//     answer: 'thrifty'
// }, {
//     id: 0,
//     question: 'быть в компании с',
//     answer: 'to knock around with'
// }, {
    //     id: 0,
    //     question: 'засиживаться',
    //     answer: 'to outstay one’s welcome.'
    //  }, {
    //     id: 0,
    //     question: 'смягчать',
    //     answer: 'to tone down'
    // }, {
    //     id: 0,
    //     question: 'притворяться в чем-то',
    //     answer: 'to put it on'
    // }, {
    //     id: 0,
    //     question: 'усваивать',
    //     answer: 'to cotton on'
    // }, {
    //     id: 0,
    //     question: 'готовиться психологически',
    //     answer: 'to psych up'

    // }, {
    //     id: 0,
    //     question: 'отталкивать',
    //     answer: 'to put off'
    // }, {
    //     id: 0,
    //     question: 'напрямик',
    //     answer: 'bluntly/He spoke bluntly'
    //   }, {
//     id: 0,
//     question: 'ограничение доступа',
//     answer: 'gatekeeping'
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
    
    let i = 320;


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

