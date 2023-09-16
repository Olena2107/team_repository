// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

// function Person(firstName, lastName, age, gender, interest) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;

//     // this.bio = function () {
//     //     console.log(
//     //         `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     //     );
//     // };
//     // this.greeting = function () {
//     //     console.log(`Привіт, я ${this.firstName}`);
//     // };
// }
// Person.prototype.bio = function () {
//     console.log(
//         `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     );
// };
// Person.prototype.greeting = function () {
//     console.log(`Привіт, я ${this.firstName}`);
// };
// const newPerson = new Person("Mango", "Cooper", 19, "female", "JS");

// console.log(newPerson);
// newPerson.bio();
// newPerson.greeting();

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

class User {
    constructor({ username, age, numberOfPosts }) {
        (this.username = username),
            (this.age = age),
            (this.numberOfPosts = numberOfPosts);
    }
    getInfo() {
        console.log(
            `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
        );
    }
    bio = () => {
        console.log(
            `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
        );
    };
}
const person = new User({
    username: "Mango",
    age: 25,
    numberOfPosts: 155,
});
console.log(person);
person.getInfo();
person.bio();

class NewUser extends User {
    constructor({ username, age, numberOfPosts }) {
        super({ username, age, numberOfPosts });
    }
}

const teacher = new NewUser({ username: "Ajax", age: 40, numberOfPosts: 78 });
console.log(teacher);
teacher.getInfo();

//ЗАДАЧА 3
//Напиши клас Storage який створює об'єкти для керування складом товарів.
//При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
//Добавте методи класу:

//getItems() - повертає масив товарів.
//addItem(item) - отримує новий товар та додає його до поточних.
//removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.


class Storage{
    constructor (items){
        this.items=items;
         
    }
    getItems() {
        return this.items
    }
    addItem(item){
this.items.push(item);
    }
    removeItem(item){
        const index = this.items.indexOf(item);
if (index === -1){return} else{this.items.splice(index,1)}
    } 
}
const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
items.addItem("Манго");
items.removeItem("Ківі")
console.log(items);

ЗАДАЧА 4
Напиши клас Client який створює об'єкт із властивостями login і email.
Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.