// fizzBuzz (for loop && while loop)

/* 
Define a function fizzBuzz(max) that takes a number (max) and prints every number 
from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

Polya:
Understand the problem
    - takes in a number
    - if its divisible by 3, print the number
    - if its divisible by 5, print the number
    - if its not divisible by either, do nothing
    - if its divisible by both, do nothing

Sample input: 20
Sample output: 3, 5, 6, 9, 10, 12, 18
Make a plan
    - create a loop that iterates from 0 to max-1
    - checking if divisible by 3 and not divisible by 5 (i % 3 === 0 && i % 5 !== 0)
    - checking if divisible by 5 and not divisible by 3 (i % 3 !== 0 && i % 5 === 0)
Carry out the plan
    -
Look back and improve the plan
    -

*/

function fizzBuzzForLoop(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i)
        } else if (i % 3 !== 0 && i % 5 === 0) {
            console.log(i)
        }
    } 
}

// fizzBuzzForLoop(20);

function fizzBuzzWhileLoop(max) {
    let i = 0;

    while (i < max) {
        if (i % 3 === 0 && i % 5 !== 0 || i % 3 !== 0 && i % 5 === 0) {
            console.log(i);
        }
        i++;
    }
};

fizzBuzzWhileLoop(20);