const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0) || (!Number.isInteger(num1)) || (!Number.isInteger(num2)) ) {
        return 'ERROR';
    }

    //var diff = Math.abs(num1-num2);

    //i feel like theres an easier way to do this
    if (num1 > num2) {
        var lg = num1;
        var sm = num2;
    }
    else {
        var lg = num2;
        var sm = num1;
    }

    console.log(lg);
    console.log(sm);
    
    var sum = 0;
    for (var i = sm; i <= lg; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
