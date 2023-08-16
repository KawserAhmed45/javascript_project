//Define UI Elements

const input = document.getElementById('input');
const button  = document.getElementById('check');
const displayVowel  = document.getElementById('displayVowel');

//Define Event listener
button.addEventListener('click', countVowel)

//Define function
function countVowel(k){
    let count = 0;
    const words = input.value;
    [...words].forEach(word => {
        if(word.match(/([a,e,i,o,u])/)){
            count++
            displayVowel.innerHTML= words +' has'+ ' ' + count + ' ' +'vowels';
            displayVowel.style.color = 'tomato';
        }else {
            displayVowel.innerHTML = words +' ' +'has no vowel';
            displayVowel.style.color ='red'
        }
    })
    input.value = '';
}