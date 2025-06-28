//////////////////////////////////////////////// Завдання 1 /////////////////////////////////////////////////////

// 1 - отримай body елемент і виведи його в консоль;

const bodyEl = document.querySelector('body')
console.log(bodyEl);

// 2 - отримай елемент id="title" і виведи його в консоль;

const titleEl = document.querySelector('#title')
console.log(titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;

const listEl = document.querySelector('.list')
console.log(listEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const dataTopic = document.querySelectorAll('[data-topic]')
console.log(dataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const dataTopicFirst = document.querySelector('[data-topic]')
console.log(dataTopicFirst);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

console.log(dataTopic[dataTopic.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

console.log(titleEl.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const allTites = document.querySelectorAll('h3')
allTites.forEach(item => console.log(item))

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

allTites.forEach(item => item.classList.add('active'))

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navLiEl = document.querySelector('[data-topic="navigation"]')
console.log(navLiEl);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navLiEl.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

navLiEl.lastElementChild.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, 
// яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const topicLiEl = document.querySelector(`[data-topic=${currentTopic}]`)
console.log(topicLiEl);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

topicLiEl.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedEl = document.querySelector('.completed')
console.log(completedEl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completedEl.parentNode.remove()

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа
// (Document Object Model)"

const p = document.createElement('p')
p.textContent = "Об'єктна модель документа (Document Object Model)"

titleEl.after(p)

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити
// всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const itemEl = document.createElement('li')
itemEl.innerHTML = '<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>'
listEl.append(itemEl)

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

listEl.insertAdjacentHTML('beforeend', '<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>')

// 20 - очисти список

listEl.innerHTML = '';






//////////////////////////////////////////////// Завдання 2 /////////////////////////////////////////////////////


// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const numberContainerEl = document.querySelector('.number-container')

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const elements = []

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div')
    div.classList.add('number')

    const randomNum = randomNumber();
    div.textContent = randomNum;
    if (randomNum % 2 === 0) {
        div.classList.add('even')
    } else {
        div.classList.add('odd')
    }
    elements.push(div)
}

numberContainerEl.append(...elements)





//////////////////////////////////////////////// Завдання 3 /////////////////////////////////////////////////////


// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`


const formEl = document.querySelector('.contact-form')
const inputEl = document.querySelector('.contact-form-input')
const checkBox = document.querySelector('.contact-form-checkbox')
const spanEl = document.querySelector('.js-username-output')


inputEl.addEventListener('input', (event) => {
    const value = inputEl.value.trim();
    if (value.length > 6) {
        inputEl.classList.add('success')
        inputEl.classList.remove('error')
    } else {
        inputEl.classList.add('error')
    }

    spanEl.textContent = value !== '' ? value : "Anonymous"
})

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`


inputEl.addEventListener('focus', () => {
    const value = inputEl.value.trim();
    if (value === '') {
        inputEl.style.outline = '3px solid red'
    } else {
        inputEl.style.outline = '3px solid green'
    }
})

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`


inputEl.addEventListener('blur', () => {
    const value = inputEl.value.trim();
    if (value === '') {
        inputEl.style.outline = '3px solid red'
    } else {
        inputEl.style.outline = '3px solid lime'
    }
})

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

formEl.addEventListener('submit', onFormElSubmit)

function onFormElSubmit(event) {
    event.preventDefault();
    const value = inputEl.value.trim();
    const checkbox = checkBox.checked

    if (value !== '' && checkbox === true) {
        console.log({
            userName: value
        })
    } else {
        alert(`Ви не заповнини поля`)
    };
    formEl.reset()
}







//////////////////////////////////////////////// Завдання 4 /////////////////////////////////////////////////////


// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.


const btnDecreaseEl = document.querySelector('#decrease');
const btnIncreaseEl = document.querySelector('#increase');

const boxEl = document.querySelector('.box');

let sizeStep = 20;

btnDecreaseEl.addEventListener('click', () => {

    const widthBox = boxEl.offsetWidth
    const heightBox = boxEl.offsetHeight

    if (widthBox < 20) {
        alert('no')
        return
    }

    boxEl.style.height = `${heightBox - sizeStep}px`
    boxEl.style.width = `${widthBox - sizeStep}px`
})

btnIncreaseEl.addEventListener('click', () => {
    const widthBox = boxEl.offsetWidth
    const heightBox = boxEl.offsetHeight
    boxEl.style.height = `${heightBox + sizeStep}px`
    boxEl.style.width = `${widthBox + sizeStep}px`
})


