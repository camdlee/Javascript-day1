// Testing javascript link through web console
console.log('testing');
// Multi-line Comment
/*
This is a multi-line
comment
*/

// Declaring a variable using var (the old way)
var firstName = 'christian';
console.log(firstName);
// Reassigning values
firstName = 'dylan';
console.log(firstName);

// christian likes to use camelcase in frontend and snakecase in backend

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
console.log(typeof firstName);

// strings in js

// Arrays AKA Python Lists
var instructors = ['christian', 'dylan','kevin'];
console.log(instructors);

// Objects AKA Python Dicts
var bio = {
    'firstName': 'Christian',
    'lastName': 'Askew',
    'age': 30,
};

// Can make keys with or without quotes, but try to stay consistent

// Hoisting
console.log(hoist);
var hoist = 'Im being hoisted';
console.log(hoist);

// Not an ideal way to use var because it allows reassigning to var, which could affect other lines of code that depend on it

/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let
let favNum = 3;
favNum = 5;
console.log(favNum)

//if you try reassigning it will give you an error
//let favNum = 10;

// const
const favColor = 'blue';
//favColor = 'red'

// ------------------------ Math Operations ----------------------------

// Addition
let sum = 5 + 5;
console.log(sum)

// Incrementing
sum += 5
console.log(sum)

// Increment by 1
sum ++
console.log(sum)

// Subtraction
sum = 10 - 5;
console.log(sum)

// Decrement by 1
sum --
console.log(sum)

// Decrementing
sum -= 5
console.log(sum)

// Multiplication
let product = 5 * 5;
console.log(product)

// Division
let quotient = 20/5;
console.log(quotient)

// Exponents
let exponent = 2**3
console.log(exponent)

// ---------- Math is a built-in for javascript ---------------

// Math.floor()
let floor = Math.floor(12.56)
console.log(floor);

// Math.ceil()
let ceiling = Math.ceil(12.56)
console.log(ceiling);

// Watch out for these behaviors when adding number and strings
let num1 = 6
let num2 = '55'
console.log(num1 + num2 + instructors);

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName){
    console.log(firstName + ' '+ lastName)
}

fullName('christian', 'askew')

// Function Expression
const nflTeam = function(city, name){
    console.log(city, name)
}

nflTeam('seattle', 'seahawks')

// Arrow Function (ES6)
const goatPlayer = (name) => {
    return `The GOAT will always be ${name}`
}
console.log(goatPlayer('Michael Jordan'))


// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }
const checkWeather = (temp) => {
    if (temp < 60) {
        console.log('Its pretty cold outisde!')
    } else if (temp < 80) {
        console.log('Its a perfect day!')
    } else {
        console.log('Its hot outside!')
    }
}

checkWeather(40)
checkWeather(70)
checkWeather(100);

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
const oddOrEven = (num) => (num % 2 == 0) ? 'Even' : 'Odd'

console.log(oddOrEven(12))

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
for(let i = 0; i < 10; i++){
    console.log(i)
};

// loop through an array
for(let i = 0; i < instructors.length; i++){
    console.log(instructors[i])
};

// loop through an array with for-of loop (values) (ES6)
for(let name of instructors){
    console.log(name)
}

// loop through an array with for-in loop (indices) (ES6)
for(let i in instructors){
    console.log(i)
};

// ----- While Loops -----
let num3 = 0
while(num3 < 10){
    console.log(num3)
    num3++
};

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once
num3 = 11
do { 
    console.log(num3)
} while(num3 < 10)

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown'];

// index
console.log(artists[1]);
// indexing from the end
console.log(artists[artists.length-1]);
// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(num3.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join(', '))

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
// console.log(artists.slice())
// console.log(artists)
console.log(artists.slice(1))
console.log(artists.slice(0,2))
console.log(artists.slice(-1))

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
console.log(artists)
console.log(artists.splice(1))
console.log(artists)