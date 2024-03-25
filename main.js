const body = document.querySelector('body');
const box = document.querySelector('.box');

body.addEventListener('mousemove', (e) => {
    box.style.cssText = `
        transform: translate(${e.pageX - 10}px, ${e.pageY - 10}px)
    `
})