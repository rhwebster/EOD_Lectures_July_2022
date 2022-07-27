// Fancy Calculator

/*
1. Import the Calculator class.
2. Create a FancyCalculator class with the Calculator class as its parent class.
3. Add the following instance methods which should all return the total property 
of the instance: a. setTotal(newTotal) - sets the totals to the newTotal, b. modulo(num) - 
sets the total to the remainder of dividing by num, c. squared() - multiplies the 
total by itself.
*/


let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5));
console.log(fancyCalculator.squared());
console.log(fancyCalculator.modulo(4));
console.log(fancyCalculator.total)
console.log(fancyCalculator.add(9))