
const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    
    let repeat = [];

    while (num > 0) {
        repeat = repeat.concat(string);
        num -= 1;
    }

    return repeat.join("");
}

// Do not edit below this line
module.exports = repeatString;
