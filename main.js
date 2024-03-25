// const h1 = document.querySelector('h1');

// classList
// console.log(h1.classList);

// add()
// h1.classList.add('hello');

// remove()
// h1.classList.remove('hello');

// toogle()
// h1.classList.toggle('hello');

// console.log(h1);


// const paragraph = document.querySelectorAll('p');
// let realArray = Array.from(paragraph);

// realArray.forEach(function (value) {
//     if (value.textContent.includes('error')) {
//         value.classList.add('error')
//     }
//     if (value.textContent.includes('success')) {
//         value.classList.add('success')
//     }
// })

// const parent = document.querySelector('p');

// console.log(parent.parentElement.children);

// cssText
// const element = document.querySelector('p');
// element.style.color = 'red';
// element.style.fontSize = '50px';

// element.style.cssText = `
//     color: red;
//     font-size: 50px;
// `

// let obj = {
//     name: 'elmurod',
//     age: 20,
// }

// for..in va for...of
// for (key in obj) {
//     console.log(key);
// }

// for (key in obj) {
//     console.log(obj[key]);
// }

// let arr = ['hello', 50, 'student', 'center', 1, true];

// for (value of arr) {
//     console.log(value);
// }

// SPREAD
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [...a, ...b];
// console.log(c);

// REST
// let [a, ...b] = ['olma 🍎', 'gilos 🍒', 'shaftoli 🍑'];
// console.log(a, b);

function gogo() {
    document.querySelector('p').textContent = 'hello world!'
}

const btn = document.querySelector('button')

btn.onclick = gogo