// let fun_expression = function() {
//     let a = 5;
//     return a
//     // returndan keyingi qator ishlamaydi
//     // let b = 10
// }

// console.log(fun_expression() ** 2);


// let fun = function(x) {
//     let a = (x % 10) * 10;
//     let b = parseInt(x / 10);
//     console.log(a + b);
// }

// fun(57)


// Arrow function
// Method 1
// const arrow_fun = (a, b) => {
//     console.log(a + b);
// }

// arrow_fun(5, 10);


// Method 2
// const arrow_fun = a => {
//     console.log(a + 10);
// }

// arrow_fun(10)


// Method 3
// const arrow_fun = a => console.log(a + 10);

// arrow_fun(10)

// console.log(Math.random());

// console.log(Math.ceil(4.4));

// console.log(Math.floor(4.9));

// console.log(Math.round(4.5));

// console.log(Math.round(Math.random() * 10));









// let unordered = ['z', 'w', 'elmurod', 'abc', 123, 'jayjay', 5, '#', '@']
// let massiv1 = [false, 'hola', 789, 47, 'true', 9];
// let massiv2 = [undefined, 'world', null, 471];
// let massiv3 = [undefined, 'world', null, 475];
// massiv1.push('yangi element');
// let global_array = massiv1.concat(massiv2, massiv3);
// console.log(massiv1.indexOf('hola'));

// unordered.splice(0)
// console.log(unordered);

// const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
// console.log(data[2][2]);

// massiv[6] = 'salom';

// Arrayga yangi element qo'shish
// massiv.push('salomsalom', 123);

// massiv.unshift(456);

// Arraydan element o'chirish
// massiv.pop()

// let abc = massiv.shift()
// let abc = massiv.unshift(456)

// console.log();

// let a = ['hello', 10, true, undefined, null, NaN, 5, false, 'yangi element'];
// let number = [11, 22, 36, 40, 51, 16, 70, 6, 3, 10, 8, 4, 1, 7, 2, 5];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);
// console.log(a[7]);

// massiv.push('salomsalom');
// let empty = [];

// for (let i = 0; i < a.length; i++) {

// }
// console.log(empty);









// Array (massiv)
// let a = ['hello', 10, true, undefined, 100, null, NaN, 5, false, 45, 2];
// a.sort();
// console.log(a);

// let number = [10, 100, 4, 60, 80, 1021, 2023, 1, 5, 9];
// let number = [];
// for(let a = 0; a <= 10; a++) {
//     number.push(Math.round(Math.random() * 100));
// }
// number.sort(numFun);
// function numFun(a, b) {
//     return a - b
// }

// let a = number.findIndex(function(item){
//    return item > 10
// })
// console.log(a);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(function (value) {
//     return value > 18;
//   });
// console.log(first);

// console.log(number[number.length - 1]);
// let number = [];
// for (let i = 0; i < a.length; i++) {
//     // if (typeof a[i] === 'number') {
//     //     number.push(a[i])
//     // }
//     console.log(a[i]);
// }


// const numbers = [45, 4, 9, 16, 25];
// let foo = numbers.forEach((a, b, c) => {
//     return a > 10;
// })
// console.log(foo);

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// };

// let baz = numbers.filter(function (a, b) {
//     return a > 10;
// });

// console.log(baz);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const result = fruits.includes("Mango");

// console.log(result);

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce((a, b) => {
// 	return a + b
// });
// console.log(sum);

//example1
// const fruits = ["Banana", "Orange", "Apple", "Mango", 123];
// let text = fruits.join(" and ");
// console.log(text);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const dataType = [undefined, null, NaN];

// let newArray = [...fruits, ...numbers, ...dataType];

// console.log(newArray);




// Palindrome fundtion
// function palindromeFunction(text) {
//     let spreadText = text.split('').reverse().join('');
//     if (spreadText === text) {
//         console.log('Palindrome');
//     } else {
//         console.log('Not-palindrome');
//     }
// }

// palindromeFunction(prompt('Istalgan so\'zni kiriting.', 'radar'));