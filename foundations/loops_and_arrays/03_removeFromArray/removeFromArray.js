const removeFromArray = function(arr, args) {
    // splice where at 
    return arr.filter(arg => !args.includes(arg));
};

// Do not edit below this line
module.exports = removeFromArray;
