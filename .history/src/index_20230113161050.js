module.exports = function reverse(n) {
    if (number < 0) {
        number = Math.abs(number);
    }

    const numArr = [...("" + n)].map(Number);
    const newArr = numArr.reverse();
    let newNumber = newArr.join("");
    return newNumber;
};
