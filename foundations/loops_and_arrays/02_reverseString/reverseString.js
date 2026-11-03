const reverseString = function(str) {
    let reverse = "";
    const arr = str.split('')
    const len = arr.length;
    
    for (let i = 0; i < len; i++) {
        reverse += arr.pop();
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
