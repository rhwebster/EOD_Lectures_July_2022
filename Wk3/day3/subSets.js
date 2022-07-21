/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function factorial(num) {
    if (num === 1) return 1

    num * factorial(num-1);

    return num;
}

function iterativeFactorial(num) {
    let product = 1;

    if (num === 1) return num;

    product * helper(num);

    return num
}

let helper = function(num) {
    let product = 1
    while (num > 1) {
        product *= num;
        num--;
    }

    return product
}