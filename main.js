setInterval(() => {
    const cloud = document.querySelector('.cloud');
    const drop = document.createElement('div');
    drop.classList.add('drop');
    cloud.appendChild(drop);

    drop.style.cssText = `
        left: ${Math.floor(Math.random() * 310)}px;
        width: ${1 + Math.random() * 4}px;
        height: ${1 + Math.random() * 15}px;
        animation-duration: ${1 + Math.random() * 0.5}s
    `

    setTimeout(() => {
        cloud.removeChild(drop);
    }, 2000);

}, 20);