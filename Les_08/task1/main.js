function checkUserInput() {
    input.value = input.value.replace(/\d/g, '');
}

let input = document.querySelector('#inpt');
input.addEventListener('keyup', checkUserInput);
