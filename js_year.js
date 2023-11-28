const a = prompt("Введите год:");
const checkResult = isLeapYear(a);
console.log(checkResult);
alert(checkResult)

function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) {
        return (year + ' год - високосный');
    } else {
        return (year + ' год - невисокосный');
    }
}
