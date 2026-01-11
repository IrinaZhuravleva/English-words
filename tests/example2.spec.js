// tests/ui.test.js
const { test, expect } = require('@playwright/test');

test.describe('English Trainer UI Tests', () => {

  const BASE_URL = 'http://best-turn.surge.sh/';

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  // 1️⃣ Проверка главной страницы
  test('Главная страница загружается', async ({ page }) => {
    await expect(page).toHaveTitle(/Английские слова - тренажёр/i);
  });

  test('Переход на страницу словаря', async ({ page }) => {
  // Заходим на главную страницу
  await page.goto(BASE_URL);

  // Находим кнопку "Словарь" и кликаем
  const dictionaryLink = page.locator('a.new-words-link');
  await expect(dictionaryLink).toBeVisible();
  await dictionaryLink.click();

  // Проверяем, что URL изменился на страницу словаря
  await expect(page).toHaveURL(/\/dictionary/); // или полный URL, если знаешь точный
});

  // 2️⃣ Проверка наличия кнопки "Начать тренировку"
  test('Кнопка Start Training видна и кликабельна', async ({ page }) => {
    const startButton = page.locator('button', { hasText: 'Start Training' });
    await expect(startButton).toBeVisible();
    await expect(startButton).toBeEnabled();
    await startButton.click();
    await expect(page).toHaveURL(/\/training/); // проверяем переход на страницу тренировки
  });

  // 3️⃣ Проверка ввода ответа и подсказки
  test('Пользователь может ввести ответ и получить подсказку', async ({ page }) => {
    await page.locator('button', { hasText: 'Start Training' }).click();

    const question = page.locator('.question'); // элемент с вопросом
    const answerInput = page.locator('input[name="answer"]');
    const checkButton = page.locator('button', { hasText: 'Check' });
    const hintButton = page.locator('button', { hasText: 'Hint' });
    const result = page.locator('.result');

    await expect(question).toBeVisible();
    await answerInput.fill('cat');
    await checkButton.click();
    await expect(result).toContainText(/Correct|Wrong/); // проверка появления результата

    await hintButton.click();
    const hint = page.locator('.hint');
    await expect(hint).toBeVisible();
    await expect(hint).not.toBeEmpty();
  });

  // 4️⃣ Проверка завершения тренировки
  test('Тренировка можно завершить и увидеть результат', async ({ page }) => {
    await page.locator('button', { hasText: 'Start Training' }).click();

    // Предположим, есть кнопка "Next" для вопросов
    const nextButton = page.locator('button', { hasText: 'Next' });
    const finishButton = page.locator('button', { hasText: 'Finish' });

    // Проходим несколько вопросов
    for (let i = 0; i < 3; i++) {
      const answerInput = page.locator('input[name="answer"]');
      await answerInput.fill('test'); // тестовый ответ
      await page.locator('button', { hasText: 'Check' }).click();
      await nextButton.click();
    }

    await finishButton.click();
    const score = page.locator('.score');
    await expect(score).toBeVisible();
    await expect(score).toContainText(/\d+\/\d+/); // например "3/3"
  });

});
