//////////////////////////////////////////////// Завдання 1 /////////////////////////////////////////////////////


// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// const newNumber = numbers => numbers.map(number => number ** 2)

// console.log(newNumber(numbers));












//////////////////////////////////////////////// Завдання 2 /////////////////////////////////////////////////////


// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data => data.flatMap(obj => obj.values)

// console.log(newArray(data));








//////////////////////////////////////////////// Завдання 3 /////////////////////////////////////////////////////


// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const peopleAudit = people => people.some(user => user.age > 20)

// console.log(peopleAudit(people));








//////////////////////////////////////////////// Завдання 4 /////////////////////////////////////////////////////


// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const numbersAudit = numbers => numbers.every(number => number % 2 === 0)

// console.log(numbersAudit(numbers));









//////////////////////////////////////////////// Завдання 5 /////////////////////////////////////////////////////


// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstOddNumber = numbers => numbers.find(number => number % 2 !== 0)

// console.log(firstOddNumber(numbers));






//////////////////////////////////////////////// Завдання 6 /////////////////////////////////////////////////////


// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const numbersArraySorted = numbersArr => numbersArr.toSorted((a, b) => a - b)

// console.log(numbersArraySorted(numbersArray));









//////////////////////////////////////////////// Завдання 7 /////////////////////////////////////////////////////


// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const stringArraySorted = stringArr => stringArr.toSorted((firstString, secondString) => firstString.localeCompare(secondString))

// console.log(stringArraySorted(stringArray));










//////////////////////////////////////////////// Завдання 8 /////////////////////////////////////////////////////


//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const userSortedAge = users => users.toSorted((firstObj, srcondObj) => firstObj.age - srcondObj.age)

// console.log(userSortedAge(users));






//////////////////////////////////////////////// Завдання 9 /////////////////////////////////////////////////////


// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ]

// const userFilterAge = users => users.filter(user => user.age > 20)

// console.log(userFilterAge(user));







//////////////////////////////////////////////// Завдання 10 /////////////////////////////////////////////////////


// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumNumber = numbersArr => numbersArr.reduce((acc, number) => {
//     return acc += number
// }, 0)

// console.log(sumNumber(numbers));








//////////////////////////////////////////////// Завдання 11 /////////////////////////////////////////////////////


// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка


// class Calculator {

//     number(value) {
//         this.total = value;
//         return this
//     }

//     add(value) {
//         this.total += value
//         return this
//     }

//     substruct(value) {
//         this.total -= value
//         return this
//     }

//     divide(value) {
//         if (value !== 0) {
//             this.total /= value
//             return this
//         }
//         console.log(`Помилка.На 0 ділити не можна`);
//         return this
//     }

//     multiply(value) {
//         this.total *= value
//         return this
//     }

//     getResult() {
//         return this.total
//     }
// }


// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//     .number(10)   // Встановлюємо початкове значення 10
//     .add(5)       // Додаємо 5 (10 + 5 = 15)
//     .substruct(3)  // Віднімаємо 3 (15 - 3 = 12)
//     .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//     .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//     .getResult(); // Отримуємо результат: 24


// console.log(result); // 24







//////////////////////////////////////////////// Завдання 12 /////////////////////////////////////////////////////


// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email


// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login,
//             this.#email = email
//     }

//     get login() {
//         return this.#login
//     }

//     set login(newLogin) {
//         this.#login = newLogin
//     }

//     get email() {
//         return this.#email
//     }

//     set email(newEmail) {
//         this.#email = newEmail
//     }
// }

// const user = new Client("SAPPER", "sapper@gmail.com")

// user.login = 'SAPPER_UA'
// user.email = 'sapper.ua@gmail.com'
// console.log(user);

// console.log(user.login);
// console.log(user.email);




//////////////////////////////////////////////// Завдання 13 /////////////////////////////////////////////////////


//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.


// class Person {
//     constructor(userObj) {
//         this.name = userObj.name,
//             this.age = userObj.age,
//             this.gender = userObj.gender,
//             this.email = userObj.email
//     }

//     getDetails() {
//         return {
//             name: this.name,
//             age: this.age,
//             gender: this.gender,
//             email: this.email
//         }
//     }
// }

// class Employee extends Person {
//     constructor(userObj) {
//         super({
//             name: userObj.name,
//             age: userObj.age,
//             gender: userObj.gender,
//             email: userObj.email
//         })
//         this.salary = userObj.salary,
//             this.department = userObj.department
//     }

//     getEmployeeDetails() {
//         return {
//             salary: this.salary,
//             department: this.department
//         }
//     }
// }

// const user = new Employee({
//     name: 'Sapper',
//     age: 99,
//     gender: 'mal',
//     email: "sapper@gmail.com",
//     salary: 50000,
//     department: 'Army'
// })



// console.log(user);
// console.log(user.getDetails());
// console.log(user.getEmployeeDetails());





