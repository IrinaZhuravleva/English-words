// import { date } from './idAssignment.js';
// import { proverbList } from './proverbs.js';
// import { base } from './model.js';
const button = document.querySelector('button');
const nextButton = document.querySelector('button.nextButton');
const expressionNumber = document.querySelector('.expression-number');
const proverb = document.querySelector('.proverb');
const fifty = document.querySelectorAll('.fifty');
const cent = document.querySelectorAll('.cent');
const centfifty = document.querySelectorAll('.centfifty');
const lastfifty = document.querySelectorAll('.lastfifty');
const downloadCSVBtn = document.querySelector('.download-csv');
const resetDataBtn = document.querySelectorAll('.reset-data');
const proverbExpression = document.querySelector('.proverb-expression');
const proverbPhrase = document.querySelector('.proverb-expression p')
const answersBlock = document.querySelector('.answers');
// const version = document.querySelector('.version span');
// version.innerText = date;
// const version = document.querySelector('.version');
let questionCounter = 0;
let currentQuestionIndex = 0;
let length = base.length;
nextButton.disabled = true;
// const v = new Date;
// const date = v.toISOString().split('T').join(' ').slice(0, 19);



expressionNumber.innerText = `Слово: ${currentQuestionIndex + 1} из ${data.length}`;

function showQuestion() {
    let questionToShow = selectQuestion();
    nextButton.disabled = true;

    //функция добавления вопроса на сайт, принимающая слово для показа
    addQuestionToSite(questionToShow);
}

//проверка, если индекс вопроса == индекс ответа

let tralivaliShuffled = shuffle(data);

let questions = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].question;
});
let answers = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].answer;
});

function selectQuestion() {
    return tralivaliShuffled[currentQuestionIndex];
}

let correct;

function addQuestionToSite(item) {
    document.querySelector('.question').innerHTML = item.question;
    correct = item.answer;
    let shuffledAnswers = shuffle(answers);

    let readyAnswers = shuffledAnswers.length > 5 ? shuffledAnswers.slice(1, 5) : shuffledAnswers;
  
    if (!readyAnswers.includes(item.answer)) {
        readyAnswers.push(item.answer);
        readyAnswers.splice(0, 1);
        readyAnswers = shuffle(readyAnswers);
    }
    
    readyAnswers.forEach(function (answer, index) {
        answersBlock.insertAdjacentHTML("beforeend", "<button>" + answer + "</button> &nbsp;")
    })
}
const a = document.querySelector('.nav .nav__btn');
const linkPopup = document.querySelector('.nav');
const linksPopup = document.querySelector('.nav__content');
const allLinksPopup = document.querySelectorAll('.nav__content .nav__item');

let elements = [...allLinksPopup].forEach(item => {
    item.addEventListener('click', () => {
        if (linkPopup.classList.contains('active')) {
            linkPopup.classList.remove('active');
        } else {
            linkPopup.classList.add('active');
        }
    });
});

a.addEventListener('click', () => {
    if (!linkPopup.classList.contains('active')) {
        linkPopup.classList.add('active');
    } else {
        linkPopup.classList.remove('active');
    }
})

answersBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (correct == target.innerText) {
        document.querySelector('.checking-correct').style.display = 'block';
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }

    } else {
        document.querySelector('.checking-incorrect').style.display = 'block';
        if (!nextButton.disabled) {
            nextButton.disabled = true;
        }
    }
})

function nextQuestion() {
    checkVisibility();
    document.querySelector('.question').innerHTML = tralivaliShuffled[currentQuestionIndex].question;
}

function nextButtonClickHandler() {
    if (questionCounter % 20 === 0) {
        proverb.style.display = "flex";
        let j = randomInteger(0, proverbList.length - 1);
        proverbPhrase.insertAdjacentHTML("beforeend", proverbList[j])
       
        document.querySelector('.click-me').addEventListener("click", function () {
            proverb.style.display = "none";
            proverbPhrase.innerHTML = "";
        });
    }

    if (currentQuestionIndex === tralivaliShuffled.length - 1) {
        clearAnswersHTML();
        if (document.querySelector('.checking-correct').style.display == 'block') {
            document.querySelector('.checking-correct').style.display = 'none';
        }
        document.querySelector('.nextButton').style.display = 'none';
        document.querySelector('.question').innerHTML = `Поздравляем!!! Вы справились))). Хотите продолжить?<button style="color: black; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
        
    } else {
        clearAnswersHTML();
        currentQuestionIndex++;
     
        document.querySelector('.expression-number').innerText = `Номер слова: ${currentQuestionIndex + 1} из ${tralivaliShuffled.length}`;
        checkVisibility()
        showQuestion();
    }
}

function clearAnswersHTML() {
    answersBlock.innerHTML = "";
}

nextButton.addEventListener('click', function () {
    questionCounter++;
    nextButtonClickHandler();
})

showQuestion();

//вспомогат функции
//тасование фишера-йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
}

function chooseArray50() {
    data = base.slice(0, 50);
    localStorage.setItem('data', JSON.stringify(data));
    location.reload();
}

function chooseArray100() {
    window.localStorage.removeItem('data');
    data = base.slice(0, 100);
    localStorage.setItem('data', JSON.stringify(data));
    location.reload(); 
}

function chooseArrayAfter100() {
    window.localStorage.removeItem('data');
    data = base.slice(100, length);
    localStorage.setItem('data', JSON.stringify(data));
    location.reload();
}

function chooseArrayLast() {
    window.localStorage.removeItem('data');
    let beginningLastFifty = length - 50;
    data = base.slice(beginningLastFifty, length);
    localStorage.setItem('data', JSON.stringify(data));
    location.reload();
}

function chooseArrayHun() {
    window.localStorage.removeItem('data');
    debugger
    let length = base.length;
    data = base.slice(100, length);
    localStorage.setItem('data', JSON.stringify(data));
    location.reload();
}

function checkVisibility() {
    document.querySelectorAll('.checking').forEach(function (item) {
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    });
}

function resetData() {
    window.localStorage.removeItem('data');
    location.reload();
}

[...fifty].forEach(function (item) {
    item.addEventListener('click', () => {
        chooseArray50();
    });
});

[...cent].forEach(function (item) {
    item.addEventListener('click', () => {
        chooseArray100();
    });
});

[...centfifty].forEach(function (item) {
    item.addEventListener('click', () => {
        chooseArrayAfter100();
    });
});

[...lastfifty].forEach(function (item) {
    item.addEventListener('click', () => {
        chooseArrayLast();
    });
});

[...resetDataBtn].forEach(function (item) {
    item.addEventListener('click', () => {
        resetData();
    });
});

//случайное число от 0 до tralivaliShuffled.length - это индекс вопроса/ответа
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


