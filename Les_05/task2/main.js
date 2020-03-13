let elementP = document.getElementById("mainElem");

function spinner(obj) {
    elementP.innerHTML = obj.dots[obj.counter];
    obj.counter++;
    if (obj.counter == obj.dots.length) {
        obj.counter = 0;
    }
}

const dots = {
    dots: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
    counter: 0
};

setInterval(spinner, 100, dots);
