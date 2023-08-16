const modalBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.close');
const modal = document.getElementById('modal');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal)


function openModal(e) {
    modal.style.display = 'block';
}

function closeModal(e) {
    modal.style.display = 'none';
}