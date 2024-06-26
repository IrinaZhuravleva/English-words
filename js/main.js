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
const questionElem = document.querySelector('.question');
const version = document.querySelector('.version span');
const versionWrapper = document.querySelector(".version");

const navBtn = document.querySelector('.nav .nav__btn');
const linkPopup = document.querySelector('.nav');
const linksPopup = document.querySelector(".nav__content");
const allLinksPopup = document.querySelectorAll('.nav__content .nav__item');

const buttonsWrapper = document.querySelector(".buttons-wrapper");

let questionCounter = 0; // useState
let currentQuestionIndex = 0; // useState - currentQuestionIndex
let length = base.length;
nextButton.disabled = true;


let tralivaliShuffled = shuffle(data); // в самом начале при загрузке страницы перемешиваем массив БД
let questions = tralivaliShuffled.map(({question}) => question); // создаем массив вопросов
let answers = tralivaliShuffled.map(({answer}) => answer); // создаем массив ответов
const selectQuestion = () => tralivaliShuffled[currentQuestionIndex]; 
// по перемешанному массиву БД выбираем вопрос из массива вопросов - setState for currentQuestionIndex

let correct;

function showQuestion() {
    let questionToShow = selectQuestion();
    nextButton.disabled = true;
    addQuestionToSite(questionToShow);
}

function addQuestionToSite(item) {
    questionElem.innerHTML = item.question;
    correct = item.answer;
    let shuffledAnswers = shuffle(answers);

    let readyAnswers = shuffledAnswers.length > 5 ? shuffledAnswers.slice(1, 5) : shuffledAnswers;
  
    if (!readyAnswers.includes(item.answer)) {
        readyAnswers.push(item.answer);
        readyAnswers.splice(0, 1);
        readyAnswers = shuffle(readyAnswers);
    }
    
    readyAnswers.forEach((item) => {
        answersBlock.insertAdjacentHTML("beforeend", "<button>" + item + "</button> &nbsp;")
    })
}

let elements = [...allLinksPopup].forEach(item => {
    item.addEventListener('click', () => {
        linkPopup.classList.contains('active') ? linkPopup.classList.remove('active') : linkPopup.classList.add('active');
    });
});

navBtn.addEventListener('click', () => {
    if (!linkPopup.classList.contains('active')) {
        linkPopup.classList.add('active');
    } else {
        linkPopup.classList.remove('active');
    }
})

answersBlock.addEventListener('click', (e) => {
    if (correct === e.target.innerText) {
        document.querySelector('.checking-correct').style.display = 'block';
       
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';

    } else {
        document.querySelector('.checking-incorrect').style.display = 'block';
        if (!nextButton.disabled) {
            nextButton.disabled = true;
        }
    }
})

function nextQuestion() {
    checkVisibility();
    questionElem.innerHTML = tralivaliShuffled[currentQuestionIndex].question;
}

function nextButtonClickHandler() {
    if (questionCounter % 5 === 0) {
        proverb.style.display = "flex";
        let j = randomInteger(0, proverbList.length - 1);
        proverbPhrase.insertAdjacentHTML("beforeend", proverbList[j])
        buttonsWrapper.style.display = "none";
        versionWrapper.style.display = "none";
       
        document.querySelector('.click-me').addEventListener("click", () => {
            proverb.style.display = "none";
            proverbPhrase.innerHTML = "";
            buttonsWrapper.style.display = "flex";
            versionWrapper.style.display = "block";
        });
    }

    if (currentQuestionIndex === tralivaliShuffled.length - 1) {
        clearAnswersHTML();
        if (document.querySelector('.checking-correct').style.display == 'block') {
            document.querySelector('.checking-correct').style.display = 'none';
        }
        document.querySelector('.nextButton').style.display = 'none';
        questionElem.innerHTML = `Поздравляем!!! Вы справились))). Хотите продолжить?<button style="color: black; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
        
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

nextButton.addEventListener('click', () => {
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
    data = base.slice((length - 100), length);
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

[...fifty].forEach((item) => {
    item.addEventListener('click', () => {
        chooseArray50();
    });
});

[...cent].forEach((item) => {
    item.addEventListener('click', () => {
        chooseArray100();
    });
});

[...centfifty].forEach((item) => {
    item.addEventListener('click', () => {
        chooseArrayAfter100();
    });
});

[...lastfifty].forEach((item) => {
    item.addEventListener('click', () => {
        chooseArrayLast();
    });
});

[...resetDataBtn].forEach((item) => {
    item.addEventListener('click', () => {
        resetData();
    });
});

//случайное число от 0 до tralivaliShuffled.length - это индекс вопроса/ответа
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

version.innerHTML = (new Date).toISOString().split('T').join(' ').slice(0, 19);

expressionNumber.innerText = `Слово: ${currentQuestionIndex + 1} из ${data.length}`;
