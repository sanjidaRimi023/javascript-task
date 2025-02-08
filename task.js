// 1st task

var money = 3000;
var applePrice = 100;
var orangePrice = 2000;
var totalPrice = applePrice + orangePrice;
change = money - totalPrice;
console.log(change);


// 2nd task

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var Bangle = 99.50;
var totalMark =( math + biology + chemistry + physics + Bangle );
average = totalMark/5;
console.log(average);


// burger task

var burgerPrice = 200;

if (burgerPrice > 500) {
    console.log("get a free coke with love");
}
else {
    console.log("coke 30 tk");
}

/*** 
BMI Calculator and Health Category
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
var BMI = 21.5;
if ( BMI < 18.5) {
    console.log("you are underweight.");
} else if ( BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal.")
} else if ( BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight!")
} else {
    console.log("you are obese.")
}

// 4th task about grade calculator
/***
Grade Calculator:
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100, B: 80-89,  C: 70-79, D: 60-69, F: 0-59
***/
let mark = 71;
if (mark >= 90) {
    console.log("your grade : A");
}
else if (mark >= 80) {
    console.log("your grade : B");
}
else if ( mark >= 70) {
    console.log("your grade : C");
}
else if ( mark >= 60) {
    console.log("your grade : D");
}
else {
    console.log("you are fall!!")
}

/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
*/

let myResult = 99;
let myFriendResult = 79;

if (myResult >80){
    if(myFriendResult > 80) {
        console.log("let's go a lunch");
    }
    else if (myFriendResult >= 60) {
        console.log("good luck for next time");
    }
    else if (myFriendResult >= 40) {
        console.log("message unseen..!!");
    }
    else{
        console.log("go to hell..!!");
    }
}
else {
    console.log("go to home and sleep and act very sad i'm :( ");
}


/***
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.
 */

// simple if-else

let num1 = 41;
let num2 = 9;
let result;
if(num1 > num2) {
    result = num1 * 2;
}
else{
    result = num1 + num2;
}

console.log(result);

// using ternary operation

let number1 = 12;
let number2 = 6;
let ternaryResult = number1 > number2 ? number1 * 2 :  number1 + number2; 
console.log(ternaryResult);

