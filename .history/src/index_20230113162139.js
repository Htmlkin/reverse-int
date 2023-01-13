module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    const numArr = [...("" + n)].map(Number);
    const newArr = numArr.reverse();
    let newNumber = +newArr.join("");
    return newNumber;
};
