let screen = document.getElementById("pass-output");
let generateButton = document.getElementById("generate-btn");

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

function passGen() {
    let password = [];
    for (let i = 0; i <= 10; i++) {
        let randNum = Math.floor(Math.random() * textArray.length);
        password += textArray[randNum];
    }
    return password;
}

function print() {
    screen.textContent = passGen();
}
