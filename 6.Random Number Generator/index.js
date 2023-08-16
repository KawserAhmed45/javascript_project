const btn = document.getElementsByClassName('btn-primary')[0];
const randNumber = document.getElementById('randNumber');

btn.addEventListener('click', generarateNumber);

function generarateNumber(k){
    const rand = Math.floor(Math.random() * 10) + 1;
    randNumber.innerHTML = rand;
}
generarateNumber();