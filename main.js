const modal = document.querySelector('.handle_modal');
const openModalBtn = document.querySelector('#newAdd');
const closeModalBtn = document.querySelector('.fa-right-from-bracket');
const addBtn = document.querySelector('#addBtn');

// Modal oynani ochuvchi funksiya
function openModalFun() {
    modal.style.display = 'flex'
}

// Modal oynani yopuvchi funksiya
function closeModalFun() {
    modal.style.display = 'none'
}

openModalBtn.addEventListener('click', openModalFun);
closeModalBtn.addEventListener('click', closeModalFun);
addBtn.addEventListener('click', closeModalFun);