const clickBtn = document.getElementById('click');

let newArr = [{
    id: 0,
    question: 'слон',
    answer: 'elephant'
 }, {
    id: 0,
    question: 'жираф',
    answer: 'giraffe'
}, {
    id: 0,
    question: 'обезьяна',
    answer: 'monkey'
}, {
    id: 0,
    question: 'тигр',
    answer: 'tiger'
}, {
    id: 0,
    question: 'змея',
    answer: 'snake'
}, {
    id: 0,
    question: 'попугай',
    answer: 'parrot'
}, {
    id: 0,
    question: 'лев',
    answer: 'lion'
}, {
    id: 0,
    question: 'Я люблю(мне нравится)',
    answer: 'I like'
}, {
    id: 0,
    question: 'Я не люблю(мне не нравится)',
    answer: 'I don\'t like'
}, {
    id: 0,
    question: 'но',
    answer: 'but'
}, {
    id: 0,
    question: 'забавный, смешной',
    answer: 'funny'
}, {
    id: 0,
    question: 'слышать',
    answer: 'hear'
  }, {
    id: 0,
    question: 'рычать',
    answer: 'growl'
 }, {
    id: 0,
    question: 'приходить',
    answer: 'come'
}, {
    id: 0,
    question: 'шипеть',
    answer: 'hiss'
}, {
    id: 0,
    question: 'пронхительно кричать',
    answer: 'squawk'
}, {
    id: 0,
    question: 'человек/мужчина',
    answer: 'man'
}, {
    id: 0,
    question: 'верно, правильно',
    answer: 'true'
}, {
    id: 0,
    question: 'язык',
    answer: 'tongue'
}, {
    id: 0,
    question: 'верхняя часть',
    answer: 'top'
}, {
    id: 0,
    question: 'шея',
    answer: 'neck'
}, {
    id: 0,
    question: 'совсем',
    answer: 'at all'
}, {
    id: 0,
    question: 'лист/листья',
    answer: 'leaf/leaves'
}, {
    id: 0,
    question: 'угадывать',
    answer: 'guess'
  }, {
    id: 0,
    question: 'Не пойми это неправильно!',
    answer: 'Don\'t get it wrong'
 }, {
    id: 0,
    question: 'итак',
    answer: 'so'
}, {
    id: 0,
    question: 'рис',
    answer: 'rice'
}, {
    id: 0,
    question: 'морковь',
    answer: 'carrot'
}, {
    id: 0,
    question: 'йогурт',
    answer: 'yogurt'

}, {
    id: 0,
    question: 'хлеб',
    answer: 'bread'
}, {
    id: 0,
    question: 'молоко',
    answer: 'milk'
}, {
    id: 0,
    question: 'сок',
    answer: 'juice'
}, {
    id: 0,
    question: 'Ты любишь мороженое?',
    answer: 'Do you like ice cream?'
}, {
    id: 0,
    question: 'Что ты любишь?',
    answer: 'What do you like?'
}, {
    id: 0,
    question: 'затем',
    answer: 'then'
}, {
    id: 0,
    question: 'заканчивать',
    answer: 'finish'
  }, {
    id: 0,
    question: 'здесь',
    answer: 'here'
 }, {
    id: 0,
    question: 'Не опаздывай!',
    answer: 'Don\'t be late'
}, {
    id: 0,
    question: 'кровать',
    answer: 'bed'
}, {
    id: 0,
    question: 'кафе',
    answer: 'cafe'
}, {
    id: 0,
    question: 'десерт',
    answer: 'dessert'

}, {
    id: 0,
    question: 'или',
    answer: 'or'
}, {
    id: 0,
    question: 'голодный',
    answer: 'hungry'
  }, {
    id: 0,
    question: 'меню',
    answer: 'menu'
 }, {
    id: 0,
    question: 'песочный замок',
    answer: 'sandcastle'
}, {
    id: 0,
    question: 'пляж',
    answer: 'beach'
}, {
    id: 0,
    question: 'краб',
    answer: 'crab'
}, {
    id: 0,
    question: 'море',
    answer: 'sea'
}, {
    id: 0,
    question: 'лодка',
    answer: 'boat'
}, {
    id: 0,
    question: 'ракушка',
    answer: 'shell'
}, {
    id: 0,
    question: 'ракетка',
    answer: 'bat'
}, {
    id: 0,
    question: 'Это хорошая идея',
    answer: 'That\'s a good idea'
}, {
    id: 0,
    question: 'ждать',
    answer: 'wait'
}, {
    id: 0,
    question: 'вместе',
    answer: 'together'
}, {
    id: 0,
    question: 'удивительный',
    answer: 'wonderful'
  }, {
    id: 0,
    question: 'добро пожаловать/пожалуйста',
    answer: 'welcome'
 }, {
    id: 0,
    question: 'Не забудь',
    answer: 'Don\'t forget'
}, {
    id: 0,
    question: 'очень',
    answer: 'very'
}, {
    id: 0,
    question: 'бегать',
    answer: 'run'
}, {
    id: 0,
    question: 'летать',
    answer: 'fly'
}, {
    id: 0,
    question: 'ходить',
    answer: 'walk'
}, {
    id: 0,
    question: 'плавать',
    answer: 'swim'
}, {
    id: 0,
    question: 'взбираться/карабкаться',
    answer: 'climb'
}, {
    id: 0,
    question: 'играть в футбол',
    answer: 'play football'
}, {
    id: 0,
    question: 'действие',
    answer: 'action'
}, {
    id: 0,
    question: 'Приятно встретиться с вами',
    answer: 'Nice to meet you'
 }, {
    id: 0,
    question: 'умный',
    answer: 'clever'
}, {
    id: 0,
    question: 'глупый',
    answer: 'silly'
}, {
    id: 0,
    question: 'что-нибудь',
    answer: 'anything'
}, {
    id: 0,
    question: 'от ... до...',
    answer: 'from ... to ...'

}, {
    id: 0,
    question: 'если',
    answer: 'if'
}, {
    id: 0,
    question: 'пытаться',
    answer: 'try'
}, {
    id: 0,
    question: 'этот/эта/это',
    answer: 'this'
}, {
    id: 0,
    question: 'заставить тебя улыбаться',
    answer: 'make you smile'
}, {
    id: 0,
    question: 'коврик',
    answer: 'rug'
}, {
    id: 0,
    question: 'буфет/шкаф для посуды',
    answer: 'cupboard'
}, {
    id: 0,
    question: 'полка',
    answer: 'shelf'
  }, {
    id: 0,
    question: 'подушка',
    answer: 'pillow'
 }, {
    id: 0,
    question: 'одеяло',
    answer: 'blanket'
}, {
    id: 0,
    question: 'парта/рабочий стол',
    answer: 'desk'
}, {
    id: 0,
    question: '11',
    answer: 'eleven'
}, {
    id: 0,
    question: '12',
    answer: 'twelve'
}, {
    id: 0,
    question: '13',
    answer: 'thirteen'
}, {
    id: 0,
    question: '14',
    answer: 'fourteen'
}, {
    id: 0,
    question: '15',
    answer: 'fifteen'
}, {
    id: 0,
    question: '16',
    answer: 'sixteen'
}, {
    id: 0,
    question: '17',
    answer: 'seventeen'
}, {
      }, {
    id: 0,
    question: '18',
    answer: 'eighteen'
 }, {
    id: 0,
    question: '19',
    answer: 'nineteen'
}, {
    id: 0,
    question: '20',
    answer: 'twenty'
}, {
    id: 0,
    question: 'убираться',
    answer: 'tidy up'
}, {
    id: 0,
    question: 'чистый/прибранный/опрятный',
    answer: 'tidy'

}, {
    id: 0,
    question: 'больше',
    answer: 'more'
}, {
    id: 0,
    question: 'получить',
    answer: 'get in'
}, {
    id: 0,
    question: 'мусорная корзина',
    answer: 'bin'
}, {
    id: 0,
    question: 'консервная банка',
    answer: 'tin'
}, {
    id: 0,
    question: 'звезда',
    answer: 'star'
}, {
    id: 0,
    question: 'письмо',
    answer: 'letter'
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
    
    let i = 391; // уже обновила
    // let i = 367;


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

