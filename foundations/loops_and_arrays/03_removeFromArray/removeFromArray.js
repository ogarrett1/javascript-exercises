const removeFromArray = function(arr, arg) {
    // splice where at 


    console.log(arr);

        var i = arr.indexOf(arg);
        arr.splice(i, 1);
    

    console.log(arg);
    console.log(i);
    console.log(arr);
    return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;
