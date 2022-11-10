// Global Functions:

eval() //Used to evaluate the expression.

//example

window.console.log(eval("2 + 2"));
//Returns     4


isFinite()  //Property of the global object.  To determine whether a number is a finite number.

// If the argument is NaN, positive infinity, or negative infinity, this method returns false;
// otherwise, it returns true.
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false
isFinite(0); // true
isFinite(64); // true
isFinite(null); // true


isNaN() //To check whether a given value is an illegal number or not.


isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN(true); // false
isNaN(null); // false
isNaN(37); // false
isNaN("37"); // false: converted to the number 37 which is not NaN
isNaN("37.37"); // false: converted to the number 37.37 which is not NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: string w/ spaces is converted to 0 which is not NaN

parseFloat() //parses an argument (converting it to a string first if needed) and returns a floating point number.

parseFloat("3.14"); // returns 3.14
parseFloat("0.0314E+2"); // returns 3.14
parseFloat("3.14 more non-digit characters"); // returns 3.14


parseInt() //The parseInt(string, radix) converts its first argument to a string, parses it, and returns an integer or NaN.

parseInt("015", 10); // Returns 15
parseInt(15.99, 10); // Returns 15
parseInt("15*3", 10); // Returns 15
parseInt("15px", 10); // Returns 15


decodeURI()  //decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.

window.console.log(encodeURI("http://www.vectacorp.com/press/january 30 2015.html"));
//Returns     http://www.vectacorp.com/press/january%2030%202015.html

encodeURI() //encodes a URI by replacing each instance
// of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

window.console.log(decodeURI("http://www.vectacorp.com/press/january%2030%202015.html"));
//returns http://www.vectacorp.com/press/january 30 2015.html

String() // Converts value to a string.

window.console.log(String(Boolean(0)));  //returns false
window.console.log(String(Boolean(1))); // returns true
window.console.log(String(new Date()));  //Wed Aug 26 2015 14:36:24 GMT-0700 (Pacific Daylight Time)
window.console.log(String("12345"));  //12345
window.console.log(String(12345)); //12345

Number()  //Values of other types can be converted to numbers.

window.console.log(Number(true));   // 1
window.console.log(Number(false));   // 0
window.console.log(Number(new Date()));   //  1382704503079
window.console.log(Number("12345"));  //   12345
window.console.log(Number("123 45"));  //  NaN


// Named Function Declarations

function displayCar() {
    window.console.log("I own a white Chevy Camaro");
}

// Calling the function
displayCar();

// Passing Parameters
function displayCar(color, make, model) {
    window.console.log("I own a " + color + " " + make + " " + model + ".");
}
displayCar("white", "Chevy", "Camaro");

//By Value vs. By Reference

// By Value

function displayCar(make, model) {
    window.console.log("You own a " + make + " " + model + ".");
}
displayCar("Chevy", "Camaro");

//By Reference

// An object is passed into a function by reference
function displayCar(car) {
    window.console.log("You own a " + car[0] + " " + car[1] + ".");
    car[0] = "Chevy";
}
var vehicle = ["Honda", "Civic"];
displayCar(vehicle);
window.console.log(vehicle[0]);

//The arguments Object
/*
The arguments object is a local variable available within all functions. You can refer to a function's arguments within the function by using
the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0. For
example, if a function is passed two arguments, you can refer to each argument as follows:
*/

function displayCar(make, model) {
    window.console.log("You own a " + arguments[0] + " " + arguments[1] + ".");
}
displayCar("Chevy", "Camaro");

/*
he arguments object is available only within a function body. Attempting to access the arguments object outside a function declaration
results in an error.
*/

function calculate(numbers) {
    var base = Number(numbers);
    for (var i = 1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    window.console.log(base);
}
calculate(2, 2, 20);

/*
The arguments object is most useful in scenarios where you've defined a function with more arguments
than it is formally declared to accept. This technique is useful for functions that can be
passed a variable number of arguments. You can use arguments.length to determine
the number of arguments passed to the function, and then process each argument by using the arguments object.
*/

// Returning values

function calculate(numbers) {
    var base = Number(numbers);
    for (var i = 1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    return base;  // returns the calculated value
}
window.console.log(calculate(2, 2, 20));


// Scope and Hoisting

var make = "Chevy"; // Global variable
var model = "Camaro"; // Global variable
function displayCar(make, model) {
    var year = 2015; // Local variable
    return "I own a " + year + " " + make + " " + model + ".";
}
window.console.log(displayCar(make, model)); // 1
window.console.log(year, make, model); // 2
// 1: Returns: I own a 2015 Chevy Camaro
// 2: Returns: Uncaught ReferenceError: year is not defined

//Hoisting

function displayCar() {
    var make = "Chevy";
}
// is actually interpreted like this:
function displayCar() {
    var make;
    make = "Chevy";
}

// Where you can run into problems is when you write code that looks like this:
var model = "Camaro";
function displayCar() {
    window.console.log("I own a 2015 Chevy " + model);
    var model = "Suburban";
}
// Because it becomes this in the interpreter:
    var model = "Camaro";
function displayCar() {
    var model; // Hoisted to the top of its function
    window.console.log("I own a 2015 Chevy " + model); // model is now undefined
    model = "Suburban";
}

//Strict Mode
/*
Strict mode was introduced in ECMAScript 5 as a way of addressing the problem of JavaScript
creating unwanted variables when you misspell an identifier or omit the var keyword.
To use strict mode, you code the “use strict”; directive at the top of every function that you declare.
*/
function displayCar() {
    "use strict";
    var model = "Suburban";
    window.console.log("I own a 2015 Chevy " + model);
}

//Anonymous Functions

// Syntax for a variable assignment function
var variableName = function(parameters) {
// ... Statements that run when the function is executed
};
// A variable assignment function that calculates the sum of two numbers and returns it
var sum = function(num1, num2) {
    return num1 + num2;
};
window.console.log(sum(1, 1)); // returns: 2


// Using an anonymous function to select a DOM element and retrieve its value
//HTML with an input type email

// <input type="email" id="email" value="zruvalca@sdccd.edu">

//An anonymous function with one parameter that returns a DOM element
var $ = function(id) {
    return window.document.getElementById(id);
};
{/*//Calling the function and displaying the result*/}
var emailAddress = $("email").value;
window.console.log(emailAddress);
