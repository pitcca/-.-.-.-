// Циклы while и for
// #1
// for (i = 1; i <= 100; i++) {
//     console.log(i);
// }

// #2
// for (i = 11; i <= 33; i++) {
//     console.log(i);
// }

// #3
// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }  
// }

// #4
// let result = 0;
// for (i = 1; i <= 100; i++) {
//     result += i;
// }
// console.log(result);

// Работа с for для массивов
// #1
// const arr = [1, 2, 3, 4, 5];
// for (let i in arr) {
//     console.log(arr[i]);
// }

// #2
// result = 0;
// var arr = [1, 2, 3, 4, 5];
// for (let i in arr) {
//     result += arr[i];
// }
// console.log(result);

// Работа с for-in
// #1
// var obj = {'green': 'зеленый', 'red': 'красный','blue': 'синий'};
// for (let i in obj) {
//     console.log(i);
// }

// #2
// var obj = {'Коля': 200, 'Вася': 300, 'Петя': 400};
// for (let i in obj) {
//     console.log(`${i} - зарплата ${obj[i]}$`);
// }

// Задачи
// #1
// var arr = [2, 5, 9, 15, 0, 4];
// for(let i in arr) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// #2
// let result = 0;
// var arr = [-1, 5, 3, -9, 7]
// for (let i in arr) {
//     if (arr[i] > 0) {
//         result += arr[i];
//     }
// }
// console.log(result);

// #3
// var arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i in arr) {
//     if (arr[i] == 4) {
//         console.log('Есть!');
//         break;
//     }
// }

// #4
// var arr = [10, 20, 30, 50, 235, 3000];
// for (let i in arr) {
//     if (String(arr[i])[0] == '1' ||
//     String(arr[i])[0] == '2' || 
//     String(arr[i])[0] == '5') {
//         console.log(arr[i]);
//     } 
// }

// #5
// let result = '';
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i in arr) {
//     if (i == 0) {
//         result += '-' + arr[i] + '-';
//     }
//     else {
//         result += arr[i] + '-';
//     }
// }
// console.log(result);

// #6
// var daysOfWeek = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// for (let i in daysOfWeek) {
//     if (i == '5' || i == '6') {
//         console.log(daysOfWeek[i].bold());
//     }
//     else {
//         console.log(daysOfWeek[i]);
//     }
// }

// #7
// let day = new Date().getDay();
// var daysOfWeek = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// for (let i in daysOfWeek) {
//     if (i == day - 1) {
//         console.log(daysOfWeek[i].italics());
//     }
//     else {
//         console.log(daysOfWeek[i]);
//     }
// }

// #8
// let n = 1000;
// let num = 0;
// do {
//     n /= 2;
//     num += 1;    
// } while (n > 50);
// console.log(num);