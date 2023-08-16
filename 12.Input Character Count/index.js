
const input = document.getElementById('input');
const displayCharacter = document.getElementById('displayCharacter');

input.addEventListener('keyup', characterCount);

function characterCount(e) {
    let count = (e.target.value).length;
    displayCharacter.innerHTML = count;
}