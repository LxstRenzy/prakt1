const prompt = require("prompt-sync")();
const a = prompt("Введите год: ");
let year = a;
if (year % 4 === 0 || year % 400 === 0) {
    console.log(year + ' год - високосный');
} else {
    console.log(year + ' год - невисокосный');
}
