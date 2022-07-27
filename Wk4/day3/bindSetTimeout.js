// Bind Set Time Out

/*
Write a function named boundFuncTimer(obj, func, delay) that will accept an object 
obj, a function func, and delay which is a number representing milliseconds. The 
boundFunctimer should invoke the function func with obj as its context after a delay.
*/


const zazu = new Animal(1);
const simba = new Animal(10);

boundFuncTimer(zazu, zazu.growOlder, 1000);
boundFuncTimer(simba, simba.growOlder, 2000);