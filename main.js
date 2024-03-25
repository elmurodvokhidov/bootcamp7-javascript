// Inline event handlers
// let tarjima = () => {
//     document.querySelector('h1').textContent = 'Halo munda!'
// }


// Inline event properties
// function gogo() {
//     document.querySelector('h1').textContent = 'Halo mucha!'
// }

// const btn = document.querySelector('button');
// btn.onclick = gogo;

// Event listeners
// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     document.querySelector('h1').textContent = 'Salom olam!'
// })

// btn.addEventListener('dblclick', () => {
//     document.querySelector('h1').textContent = 'Hello world!'
// })

// document.addEventListener('keypress', (e) => {
//     console.log(e.key);
// })


// Todo List
const items = document.querySelectorAll('li');
const btn = document.querySelector('button');
const unordered = document.querySelector('ul');


btn.addEventListener('click', function () {
    let a = document.createElement('li');
    unordered.appendChild(a);
    // unordered.prepend(a);
    a.textContent = 'new todo';
})

items.forEach((a) => {
    a.addEventListener('click', (e) => {
        a.classList.add('deleted')
        // e.target.remove()
    });
});

// const heading = document.querySelector('h1');
// heading.remove();
