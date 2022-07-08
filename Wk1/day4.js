/*
Write a function twoSum(arr, target) that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct numbers 
of the array add up to the target value. You can assume that input array contains 
only unique numbers.
*/

let twoSum = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];

        for (let j = i+1; j < arr.length; j++) {
            let second = arr[j]

            if (first + second === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoSum([1,2,4,3,5,4,5,6], 12))