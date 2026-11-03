const reverseString = function(str) {
    let reverse = "";
    const arr = str.split('')
    
    for (let i = 0; i < arr.length; i++) {
        reverse += arr.pop();
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
