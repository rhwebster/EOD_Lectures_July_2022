//Flatten

/*Write a recursive function called `flatten` that takes a single array with any 
number of nested arrays and returns an array with all the nested contents on one 
level.
Examples:
flatten([]); => []
flatten([1, 2]) => [1, 2]
flatten([1, [2, [3]]]); [1, 2, 3]
*/

function flatten(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr = [...newArr, arr[i]]
        }
    }

    return newArr;
};

[[1, 2], 3]

console.log(flatten([]));
console.log(flatten([1, 2]));
console.log(flatten([1, [2, [3]]]));