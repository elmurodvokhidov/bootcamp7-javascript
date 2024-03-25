const body = document.querySelector('body');
const gameStatus = document.querySelector('.status');
const turn = document.querySelector('#turn');
const cells = document.querySelectorAll('li');
const btnA = document.querySelector('#btnA');
const btnB = document.querySelector('#btnB');
const btnC = document.querySelector('#btnC');
let player = prompt('Who do you want to play as, X or O')?.toLowerCase();
let isOver = false;

const playerX = '❌';
const playerO = '⭕';

if (player == 'x') {
    player = playerX
}
else if (player == 'o') {
    player = playerO
}
else if (player == null) {
    body.innerHTML = `
         <div class="warning">
            <i class="fa-regular fa-circle-question"></i>
            <h1>Do you want to play?</h1>
            <button id="refreshBtn" onclick="document.location.reload()">refresh</button>
        </div>`
}
else {
    body.innerHTML = `<div class="warning"><h1>You choose an existent hero, please refresh!</h1></div>`
}

turn.innerHTML = player;

// Win list
const winlist = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
];

// Next step
let nextStep = player == playerX ? playerO : playerX;

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.textContent == '' && !isOver && player == playerX || player == playerO) {
            nextStep = nextStep == playerX ? playerO : playerX;
            cell.innerHTML = nextStep;
            turn.innerHTML = nextStep == playerX ? playerO : playerX;
            winCheck();
        }
        else {
            alert(isOver ? 'Game over, please refresh!' : 'Already clicked!')
        }
    })
});


function winCheck() {
    let winner = winlist.find((item) => {
        let a = cells[item[0]].textContent
        let b = cells[item[1]].textContent
        let c = cells[item[2]].textContent

        if (a == b && b == c && c != '') return item
    })

    if (!winner) {
        return false
    }

    gameStatus.innerHTML = `Game over!`
    isOver = true;
};

btnA.addEventListener('click', () => {
    cells.forEach(item => {
        item.style.filter = 'drop-shadow(0 0 10px blue) drop-shadow(0 0 15px blue)'
        item.style.borderColor = 'blue'
    })
    gameStatus.style.filter = 'drop-shadow(0 0 10px blue) drop-shadow(0 0 15px blue)'
})

btnB.addEventListener('click', () => {
    cells.forEach(item => {
        item.style.filter = 'drop-shadow(0 0 10px #0f0) drop-shadow(0 0 15px #0f0)'
        item.style.borderColor = '#0f0'
    })
    gameStatus.style.filter = 'drop-shadow(0 0 10px #0f0) drop-shadow(0 0 15px #0f0)'
})

btnC.addEventListener('click', () => {
    cells.forEach(item => {
        item.style.filter = 'drop-shadow(0 0 10px blueviolet) drop-shadow(0 0 15px blueviolet)'
        item.style.borderColor = 'blueviolet'
    })
    gameStatus.style.filter = 'drop-shadow(0 0 10px blueviolet) drop-shadow(0 0 15px blueviolet)'
})