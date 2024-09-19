// Number 1://
var burgerPrice= 500;
{
    // If the burger price is more than 500tk, Coke is free
    if (burgerPrice > 500) {
        console.log('Coke is free!') ;
    } 
    // Else, Coke costs 30tk
    else {
        console.log('Coke costs 30tk') ;
    }
}

// Number-6//
var age=60;
var isStudent= "yes";
{
    // Children under 10 get free tickets
    if (age < 10) {
        console.log('Ticket is free!');
    } 
    // Students get a 50% discount
    else if (isStudent) {
        console.log("50% discount") ;
    } 
    // Senior citizens aged 60 or above get a 15% discount
    else if (age >= 60) {
        console.log("15% discount") ;
    } 
    // Regular fare for everyone else
    else {
       console.log("regular fare") ;
    }


}
// number-5

// Variables
let num1 = 5;
let num2 = 3;
let result;

// Using if-else
if (num1 > num2) {
    result = 2 * num1;
} else {
    result = num1 + num2;
}

console.log(result);


// Number-3//
let score=65;
{
   if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score <= 89) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 60 && score <= 69) {
        grade = 'D';
    } else if (score >= 0 && score <= 59) {
        grade = 'F';
    } else {
        grade = 'Invalid score'; // In case of input outside the valid range
    }

    console.log(grade);
}







    

    