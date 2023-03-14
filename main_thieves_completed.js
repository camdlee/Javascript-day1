console.log('testing')

/* 
This
is
a
multiline
comment
*/

// declaring a variable using var (the old way)
var x = 5;
var y = 5;
console.log(x + y);

// Reassigning values
x = 3;
y = 2;
console.log(x + y);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
var int = 4;
var float = 2.13;

console.log(typeof int, int);
console.log(typeof float, float);

// strings in js
var cohort = 'thieves';
console.log(typeof cohort, cohort)

// Arrays AKA Python Lists
var instructors = ['christian', 'dylan', 'lordchristopher']
console.log(typeof instructors, instructors)

// Objects AKA Python Dicts
var bio = {
    first_name: 'christian',
    'last name': 'askew',
    age: 27,
    'location': 'New Mexico'
};

console.log(typeof bio, bio)

// Hoisting
console.log(hoist)
var hoist = 'I\'ve been hoisted!'
console.log(hoist)

// NOTE: Instead of using VAR to define variables, use LET and CONST
// Because of var hoisting behaviors
// LET and CONST are also variable declarations using the ES6 Syntax
// LET vs CONST
// Let allows for reassignment of values (Just like Python)
// Const does NOT allow for reassignment of values

// LET
let fav_num = 3
console.log(fav_num)
fav_num = 12
console.log(fav_num)

// CONST
const fav_color = 'purple'
console.log(fav_color)
// fav_color = 'red'

// ------------------------ Math Operations ----------------------------

// Addition
let sum = 5 + 5
console.log(sum)

// Incrementing
sum += 5
console.log(sum)

// Increment by 1
sum++
console.log(sum)

// Subtraction
let diff = 12 - 5
console.log(diff)

// Decrement by 1
diff--
console.log(diff)

// Decrementing
diff -= 3
console.log(diff)

// Multiplication
let multiply = 5 * 5
console.log(multiply)

multiply *= 2
console.log(multiply)

// Division
let divide = 20 / 5
console.log(divide)

divide /= 2
console.log(divide)

// Exponents
let expo = 5 ** 2
console.log(expo)

expo **= 1
console.log(expo)

// ---------- More Math Operations ---------------
let floor = Math.floor(12.56)
console.log(floor)

let ceiling = Math.ceil(12.56)
console.log(ceiling)

// Watch out for these behaviors when adding number and strings
let num1 = 5
let num2 = '54'
result = num1 + num2
console.log(typeof result, result)

// -------------- Javascript Functions ----------------------
// 3 Ways to make functions in JS
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}

fullName('Christian', 'Askew')

// Function Expression
const nflTeam = function(city, name) {
    console.log(city, name)
}

nflTeam('Seattle', 'Seahawks')

// Arrow Function (ES6)
const goatPlayer = (name) => {
    return `The GOAT will always be ${name}`
}
console.log(goatPlayer('michael jordan'))

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block if condition is true }
const checkWeather = (temp) => {
    if (temp < 60){
        return 'I\'ts pretty cold outside! 🥶 #hoodieseason'
    } else if (temp < 80) {
        return 'What a beautiful day!'
    } else {
        return 'It\'s cooking outside!! Avoid wearing black!'
    }
}

console.log(checkWeather(70))

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)

const oddOrEven = (num) => {
    return (num % 2 == 0) ? ('Even') : ('Odd')
}

console.log(oddOrEven(11))

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
for(let i = 0; i < 10; i++){
    console.log(i)
}

// loop through an array
thievesStudents = ['student1', 'student2', 'student3']

for(let i = 0; i < thievesStudents.length; i++){
    console.log(thievesStudents[i])
}

// loop through an array with for-of loop (values) (ES6)
for (let name of thievesStudents){
    console.log(name)
}

// loop through an array with for-in loop (indices) (ES6)
for (let name in thievesStudents){
    console.log(name)
}

// ----- While Loops -----
let num = 0
while(num < 10){
    console.log(num)
    num++
}

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once
num = 0
do {
    console.log(num)
    num++
} while (num < 10)

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Kendrick Lamar', 'Bruno Mars', 'Chris Brown']

// index
console.log(artists[0])

// indexing from the end
console.log(artists[artists.length-1])

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString())

// joining an array with a seperator
// syntax: array.join(seperator)
console.log(artists.join('$$$'))

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(-1))
console.log(artists)

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
console.log(artists.splice(1))
console.log(artists)  