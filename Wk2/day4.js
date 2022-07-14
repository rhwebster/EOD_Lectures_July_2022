//HiddenCounter

/* Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function. 
When invoked the function returned by hiddenCounter will increment the counter by 1.
Look below to see how this function is invoked:
let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2
let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1
*/



//CountDown

/* Write a function named: countDownTimer(n). This function will represent a count 
down of days till the New Year. The countDownTimer function will take in a number 
argument (n) the first time it is called and if that number is greater than 0 the 
countDownTimer will return a function.
The function returned by countDownTimer can then be invoked n times before it returns 
a string of 'Happy New Year!'. Look closely at how this function is invoked below:
Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"
Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"
Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"
Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"
*/



//SmoothieMachine

/* Write a function named 'smoothieMachine' that accepts any number of params and 
a function.
The return function will also accept any number of params and will return a string 
including all of the parameters of smoothieMachine and return function.
See below examples:
let smoothie1 = smoothieMachine();
console.log(smoothie1('milk')); => prints 'I'm having a smoothie with milk
console.log(smoothie1('kale', 'spinach')) => prints 'I'm having a smoothie with milk
    and kale and spinach'
console.log(smoothie1('honey', 'pears', 'berries')); => prints 'I'm having a smoothie 
    with milk and kale and spinach and honey and pears and berries'
let smoothie2 = smoothieMachine('apples', 'bananas', 'berries');
console.log(smoothie2('pineapple')); => prints 'I'm having a smoothie with apples 
    and bananas and berries and pineapple.'
*/