let length = +prompt("Enter the length of the room");
let height = +prompt("Enter the height of the room");
let width = +prompt("Enter the width of the room");
const capacity = 16;

let wallArea = (length * height + width * height) * 2;
let countOfPaintCans = Math.ceil(wallArea / capacity);

alert(countOfPaintCans);