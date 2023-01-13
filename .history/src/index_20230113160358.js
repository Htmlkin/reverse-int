module.exports = function reverse(n) {
    const numArr = [...("" + n)].map(Number);
    const newArr = numArr.reverse();
    let newNumber = newArr.join("");
    return newNumber;
};
