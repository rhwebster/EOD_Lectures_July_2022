//RestSum
/* Write a function named `restSum` that accepts all incoming parameters and sums 
them.
**Hint**: Use the rest parameter syntax!
Examples:
restSum(3, 5, 6); => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); => 45
restSum(0); => 0
*/

function restSum(...otherNums) {
    let sum = 0;
    console.log(otherNums);
    otherNums.forEach(num => sum += num);

    return sum;
}

restSum(1, 2, 3, 4, 5, 6, 7, 8, 9) // expected output: 45;

//CountScores
/* Write a function `countScores(people)` that takes in an array of score objects 
(people) as its input. A score object has two key-value pairs: the scorer (string) 
and a point value (number). `countScores(people)` should return an object that has 
key-values listing each person who scored as a key and the sum of the total points 
for the game as their value.
Examples:
let ppl = [{name: 'Anthony', score: 10},
            {name: 'Fred', score:10},
            {name: 'Anthony', score: -8},
            {name: 'Winnie', score: 12}];
console.log(countScores(ppl)); => { Anthony: 2, Fred: 10, Winnie: 12 }
let peeps = [{name: 'Anthony', score: 2},
             {name: 'Winnie', score: 2},
             {name: 'Fred', score: 2},
             {name: 'Winnie', score: 2},
             {name: 'Fred', score: 2},
             {name: 'Anthony', score: 2},
             {name: 'Winnie', score: 2}];
console.log(countScores(peeps)); => { Anthony: 4, Fred: 4, Winnie: 6 }
*/

function countScores(people) {
    let totalScored = {};

    people.forEach(player => {
        let name = player.name;
        let score = player.score;

        if (totalScored[name] === undefined) {
            totalScored[name] = score;
        } else {
            totalScored[name] += score;
        }
    });

    return totalScored;
}

let peeps = [{ name: 'Anthony', score: 2 },
{ name: 'Winnie', score: 2 },
{ name: 'Fred', score: 2 },
{ name: 'Winnie', score: 2 },
{ name: 'Fred', score: 2 },
{ name: 'Anthony', score: 2 },
{ name: 'Winnie', score: 2 }];
console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of 
objects as the first parameter and a string as the second. The `keyInObjectArray` 
will return `true` if any of the objects contains the `keyString` as a key within them, and 
`false` if not.
Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];
keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false
***********************************************************************/

function keyInObjectArray(objArray, keyString) {
    for (let i = 0; i < objArray.length; i++) {
        let myObj = objArray[i];
        for (key in myObj) {
            if (key === keyString || myObj.key === keyString) {
                return true;
            }
        }
    }
    return false;
}

let objArray = [
    { name: "Rupert" },
    { age: 42 },
    { planet: "Earth", system: "Milky Way" }
];
console.log(keyInObjectArray(objArray, 'planet')); // => true
console.log(keyInObjectArray(objArray, 'age')); // => true
console.log(keyInObjectArray(objArray, 'food')); // => false
console.log(keyInObjectArray(objArray, 'animal')); // => false