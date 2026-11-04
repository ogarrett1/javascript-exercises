const removeFromArray = function(arr, arg) {
    // splice where at 

    console.log(arr);

    var i = arr.indexOf(arg);
    arr.splice(i, i);
    console.log(arg);
    console.log(i);

    return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;
