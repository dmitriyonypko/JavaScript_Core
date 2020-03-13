let counter = 0;
button.addEventListener("click", function () {
    let divs = div.querySelectorAll('div');
    if (counter == divs.length) counter = 0;
    for (let divIndex = 0; divIndex < divs.length; divIndex++) {
        if (divIndex == 0) {
            divs[divIndex].style.backgroundColor = (divIndex == counter) ? 'green' : 'gray';
        } else if (divIndex == 1) {
            divs[divIndex].style.backgroundColor = (divIndex == counter) ? 'yellow' : 'gray';
        } else if (divIndex == 2) {
            divs[divIndex].style.backgroundColor = (divIndex == counter) ? 'red' : 'gray';
        }
    }
    counter++;
})