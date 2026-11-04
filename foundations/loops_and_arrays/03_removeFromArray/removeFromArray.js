const removeFromArray = function(arr, arg) {
    // splice where at 

    var i = arr.indexOf(arg);
    arr.slice(i);

    return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;
