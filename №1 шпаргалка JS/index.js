"use strict";
// lesson 22.03.2020

//true false


// &&   ||    !


// ============== && =================>
// let a = 5;
// let hello = "Hello";
// (a === 5) && console.log(hello);
// (a !== 5) && console.log("Bad");

// ============== || =================>

// let a = true;
// let b = false;
// let c = false;

// let result = a || b || c; //true || false || false 

// console.log('result', result);

// ================= ! ====================>

// let a = true;
// let b = false; //true
// let c = false;

// // let result = a && !b && !c; //true true true
// // console.log('result', result);

// let newResult = !b;
// console.log('newResult', newResult);

// ===============================

// const num = 5;

// const result = (num < 10) && (num < 0); //true && false = false

// const result = (num < 10) || (num < 0); //true || false = true

// console.log('result', result);

// ===================== if =============== true  false ======

// let a = Number(prompt("Введите число a"));
// let b = Number(prompt("Введите число b"));

// if (a > b) {
//     console.log(`${a} > ${b}`, true);
// }

// if (a < b) {
//     console.log(`${a} < ${b}`, false);
// }

// if (a === b) {
//     console.log(`${a} === ${b}`, "===");
// }

// ====================== if else ========================
// let a = Number(prompt("Введите число a"));
// let b = Number(prompt("Введите число b"));

// if (a > b) {
//     console.log(`${a} > ${b}`, true);

// } else if (a < b) {
//     console.log(`${a} < ${b}`, false);

// } else if (a === b) {
//     console.log(`${a} === ${b}`, "===");
// }

// ============ if else =================
// let a = Number(prompt("Введите число a"));
// let b = Number(prompt("Введите число b"));

// if (a > b) {
//     console.log(`${a} > ${b}`, true);

// } else {
//     console.log("false")
// }


// ================= ( a > b ) ? console.log("true") : console.log("false");
// let a = Number(prompt("Введите число a"));
// let b = Number(prompt("Введите число b"));

// (a > b) ? console.log("true") : console.log("false"); //Вопросительный знак в JavaScript нужен для того, чтобы в зависимости от условия присвоить переменную

// ================== switch ========================>
// switch () {
//     case1: "" = ""; break;
//     case2: "" = ""; break;
//     case3: "" = ""; break;
//     case4: "" = ""; break;
// }w

// ===================
// let password = prompt("Enter your password");

// switch (password) {
//     case "12345":
//         console.log("Вы зарегистрированы!");
//         break;

//     case "23456":
//         console.log("Ваш пароль устарел!");
//         break;

//     default:
//         console.log("Вы ввели ошибочный пароль");
// }

// ========================

// let country = prompt("Enter your country").toLowerCase();
// console.log('object :', country);

// country = prompt("Enter your country").toUpperCase();
// console.log('object :', country);

// ===========================
// let country = prompt("Enter your country");

// const china = 100;
// const japan = 250;
// const australia = 170;

// switch (country.toLowerCase()) {
//     case "китай":
//         alert(`Доставка в ${country} будет стоить ${china} кредитов`)
//         break;

//     default:
//         alert("Доставка в указаную страну не осуществляется");
// }

// =========================== variable scope ===============================

// let a = 5;

// const myFunc = function () {
//     let a = 15;
//     console.log('a in funciton :', a);
// }
// myFunc();

// console.log('a :', a);


// ====

// let country = prompt("Enter your country");

// const china = 100; // .....


// switch (country.toLowerCase()) {
//     case "китай":
//         const china = 150; // .....
//         alert(`Доставка в ${country} будет стоить ${china} кредитов`)
//         break;

//     default:
//         alert("Доставка в указаную страну не осуществляется");
// }


// ================================


// let a = prompt("enter number"); //2, 3,4,5 ..10  /"2" !== 2
// console.log('a :', a);
// console.log('2 :', 2);
// let result = (2 === Number(a)); //2 !== "2"  //number !== string 
// console.log('result :', result);


// =================================

// let a = 10;
// let sum = 1;

// while (a !== 10) {
//     a = Number(prompt("enter number"));
//     sum += 1;
//     console.log('sum :', sum);
// }

// console.log("Цикл завершен");

// ===============================

// let a = 10;
// let sum = 0;

// do {
//     a = Number(prompt("enter number")); //a = 2
//     sum += 1;
//     console.log('sum :', sum - 1);
// } while (a !== 10);
// console.log("Цикл завершен");

// ===================== for ================

// const array = ["asd", "fsdfdf", "fesdfdf", "fsdfdsf", "fsdfsdfsdf"]

// for (let i = 0; i < array.length; i + 1) {
//     console.log('i :', array[i]);

// }

// ++++++++++

// let a = 5;
// let sum = 0;

// for (let i = 0; i <= a; i += 1) { //1,2,3,4,5
//     sum += i
//     console.log('i :', i);
//     console.log('sum :', sum);
// }

// console.log('sum :', sum);


let input;
let total = 0;

do {
    input = prompt("Enter your number");
    if (input === null) {
        break;
    }
    if (Number.isNaN(Number(input))) {
        alert("Было введено не число");
    } else {
        total += Number(input)
    }

} while (input !== null);

alert(`Total summ = ${total}`);


// ===========================

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 1) {
//         continue;
//     }

//     console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }