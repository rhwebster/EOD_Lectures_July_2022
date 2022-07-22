//dynamicIntervalCount

/*
Write a function `dynamicIntervalCount` that accepts a callback, delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should run indefinitely and `dynamicIntervalCount` should instead
return the Timeout object for the interval.
Examples:
dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely
console.log(timeoutObject); // Timeout { ... }
*/

function dynamicIntervalCount(cb, delay, amount) {
    let result;

    if (amount === undefined) {
        result = setInterval(cb, delay);
        return result;
    } else {
        result = setInterval(function() {
            cb();
            amount--;
            if (amount === 0) {
                clearInterval(result);
            }
        }, delay);
    }
};

// dynamicIntervalCount(cb, 500)
console.log(0 === undefined);
