const btn = document.getElementsByClassName('btn-primary')[0];
const randColor = document.getElementById('randColor');

btn.addEventListener('click', generarateColor);

function generarateColor(k){
    const rand = Math.random().toString(16).substring(2, 8);
    randColor.innerHTML = `#${rand}`;
    document.querySelector('body') .style.backgroundColor = `#${rand}`;
}
generarateColor()