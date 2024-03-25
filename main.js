// let weather = 'raining';

// if (weather === 'sunny') {
//     console.log('Bugun havo quyoshli, soyabon shart emas!');
// }
// else if (weather === 'snowing') {
//     console.log("Birinchi qor!");
// }
// else if (weather === 'raining') {
//     console.log("Birinchi yomg'ir!");
// }
// else {
//     console.log("Obhavo aniqlanmadi! Dasturiy xato!");
// }


// let x = Number(prompt('Istalgan bir son kiriting', '1')); // String();
// console.log(x % 2 == 0 ? 'Berilgan son juft' : 'Berilgan son toq');

// let x = +prompt('Istalgan bir son kiriting', '1');
// console.log(typeof x);


// if (confirm('Do you want to delete it?')) {
//     console.log('Deleted');
// } else {
//     console.log('Not deleted');
// }

// let a = confirm('Do you want to delete it?');

// console.log(a);

// confirm('Do you want to delete it? 1')
// confirm('Do you want to delete it? 2')
// confirm('Do you want to delete it? 3')

// if1
// let x = +prompt('Son kiriting!');
// if (x > 0) {
//     console.log(++x);
// }
// else {
//     console.log(x);
// }

// if4
// let a = -3, b = -5, c = -10;
// if (a > 0) {
//     a = 1
// }
// else {
//     a = 0
// }


// // B
// if (b > 0) {
//     b = 1
// }
// else {
//     b = 0
// }


// // C
// if (c > 0) {
//     c = 1
// }
// else {
//     c = 0
// }

// console.log(a + b + c);


// Boolean34
// let x = 5, y = 3;
// let n1 = x % 2 !== 0 && y % 2 !== 0;
// let n2 = x != 1 && y != 1;
// console.log(n1 && n2);


// if15
// let a = 20, b = 100, c = 30;
// if (a + c > a + b && b + c > a + b) {
//     console.log(a + c, c + b);
// }
// else if (a + b > a + c && b + c > a + c) {
//     console.log(a + b, c + b);
// }
// else if (a + b > b + c && a + c > b + c) {
//     console.log(a + b, a + c);
// }

// if () {}
// else if () {}
// else if () {}
// else if () {}
// else if () {}
// else if () {}
// else {}

// let operator = prompt('Please enter your operator', '+');

// let num1 = +prompt('Number 1');
// let num2 = +prompt('Number 2');

// switch (operator) {
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '*':
//         console.log(num1 * num2);
//         break;
//     case '/':
//         console.log(num1 / num2);
//         break;
//     default:
//         console.log("Please refresh!");
//         break;
// }

// let a = 3, b = 5;

// console.log(`javob ${a} ga teng`);

// console.log('javob ' + (a + b) + ' ga teng');

// case10
// let s = "Shimol", j = "Janub", q = "Sharq", g = "G'arb";
// let k = 2;
// let y = j;

// if (k == 0) {
//     switch (k == 0) {
//         case y == s:
//             console.log(`${s} yo'nalish bo'yicha harakatlandi`);
//             break;
//         case y == j:
//             console.log(`${j} yo'nalish bo'yicha harakatlandi`);
//             break;
//         case y == q:
//             console.log(`${q} yo'nalish bo'yicha harakatlandi`);
//             break;
//         case y == g:
//             console.log(`${g} yo'nalish bo'yicha harakatlandi`);
//             break;
//         default:
//             break;
//     }
// }
// else if (k == 1) {
//     switch (k == 1) {
//         case y == s:
//             console.log(`${s} yo'nalish bo'yicha chapga burildi`);
//             break;
//         case y == j:
//             console.log(`${j} yo'nalish bo'yicha chapga burildi`);
//             break;
//         case y == q:
//             console.log(`${q} yo'nalish bo'yicha chapga burildi`);
//             break;
//         case y == g:
//             console.log(`${g} yo'nalish bo'yicha chapga burildi`);
//             break;
//         default:
//             break;
//     }
// }
// else if (k == 2) {
//     switch (k == 2) {
//         case y == s:
//             console.log(`${s} yo'nalish bo'yicha o'nga burildi`);
//             break;
//         case y == j:
//             console.log(`${j} yo'nalish bo'yicha o'nga burildi`);
//             break;
//         case y == q:
//             console.log(`${q} yo'nalish bo'yicha o'nga burildi`);
//             break;
//         case y == g:
//             console.log(`${g} yo'nalish bo'yicha o'nga burildi`);
//             break;
//         default:
//             break;
//     }
// }

// else {
//     console.log("Notog'ri komanda");
// }

// case18
// let x = 156;
// let a = parseInt(x / 100);
// let b = parseInt(x / 10) % 10;
// let c = x % 10;
// let d = '';

// switch (a) {
//     case 1:
//         d += 'Bir yuz'
//         break;
//     case 2:
//         d += 'Ikki yuz'
//         break;
//     case 3:
//         d += 'Uch yuz'
//         break;
//     case 4:
//         d += "To'rt yuz"
//         break;
//     case 5:
//         d += 'Besh yuz'
//         break;
//     case 6:
//         d += 'Olti yuz'
//         break;
//     case 7:
//         d += 'Yetti yuz'
//         break;
//     case 8:
//         d += 'Sakkiz yuz'
//         break;
//     case 9:
//         d += "To'qqiz yuz"
//         break;
//     default:
//         break;
// }

// switch (b) {
//     case 1:
//         d += " o'n"
//         break;
//     case 2:
//         d += ' yigirma'
//         break;
//     case 3:
//         d += " o'ttiz"
//         break;
//     case 4:
//         d += " qirq"
//         break;
//     case 5:
//         d += ' ellik'
//         break;
//     case 6:
//         d += ' oltmish'
//         break;
//     case 7:
//         d += ' yetmish'
//         break;
//     case 8:
//         d += ' sakson'
//         break;
//     case 9:
//         d += " to'qson"
//         break;
//     default:
//         break;
// }

// switch (c) {
//     case 1:
//         d += " bir"
//         break;
//     case 2:
//         d += ' ikki'
//         break;
//     case 3:
//         d += " uch"
//         break;
//     case 4:
//         d += " to'rt"
//         break;
//     case 5:
//         d += ' besh'
//         break;
//     case 6:
//         d += ' olti'
//         break;
//     case 7:
//         d += ' yetti'
//         break;
//     case 8:
//         d += ' sakkiz'
//         break;
//     case 9:
//         d += " to'qqiz"
//         break;
//     default:
//         break;
// }

// console.log(d);