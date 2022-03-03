const screen = document.getElementById("pass-output");
const generateButton = document.getElementById("generate-btn");
let lengthSet = document.getElementById("pass-length").value;

let textArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];

function passGen(length) {
    let password = [];
    for (let i = 0; i < length; i++) {
        let randNum = Math.floor(Math.random() * textArray.length);
        password += textArray[randNum];
    }
    return password;
}
function getLength() {
    lengthSet = document.getElementById("pass-length").value;
    if (lengthSet === "") {
        return 3;
    }
    if (lengthSet > 20) {
        document.getElementById("pass-length").value = "20";
        return 20;
    }
    return lengthSet;
}
function print() {
    screen.textContent = passGen(getLength());
}
