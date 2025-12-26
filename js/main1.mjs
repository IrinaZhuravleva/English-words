import { base } from "./model.js";

let currentIndex = 0;
const front = document.getElementById("front");
const back = document.getElementById("back");
const card = document.getElementById("word-card");
const nextButton = document.getElementById("next-button");

function updateCard() {
  const word = base[currentIndex];
  front.textContent = word.answer;
  back.textContent = word.question;
}

function nextWord() {
  currentIndex = (currentIndex + 1) % words.length;
  updateCard();
}

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

nextButton.addEventListener("click", () => {
  if (!card.classList.contains("flipped")) {
    card.classList.add("flipped");
  } else {
    card.classList.remove("flipped");
    nextWord();
  }
});

// Инициализация первой карточки
updateCard();
