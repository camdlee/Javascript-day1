//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_names, dog_string){
    //let's loop through each word in dog_names
    for(let i in dog_names){
        // check to see if each index is in dog_string using includes() method
        if (dog_string.includes(dog_names[i])) {
            // return matched dog name if true
            console.log(`Matched ${dog_names[i]}`)
        } // else if not true, then return 'No Match'
        else {
            console.log('No Match')
        }
    }
}

findWords(dog_names, dog_string)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    // console.log(arr)
    // console.log(arr.length)
    //need to loop through every even index in the list
    for(let i in arr){
        // console.log(i)
        // how to check for even index? use modulo 2
        if (i % 2 == 0){
            // if true, then at that index we need to splice and replace with "even index"
            arr.splice(i, 1, 'even index')
        }
    }
    //console.log once it has looped through all the even indices
    console.log(arr)
}

replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]






//---------------------------CODE WARS QUESTIONS-------------------------

//1. Write a function that removes the spaces from the string, then return the resultant string.
// let x = "8 j 8   mBliB8g  imjB8B8  jl  B"
// //Answer should be = "8j8mBliB8gimjB8B8jlB"

// function no_space(x){
//     x_no_space = x.replaceAll(' ','')
//     console.log(x_no_space)
// }

// no_space(x)

//2. Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
//("Hello", "o")  ==>  1
//("Hello", "l")  ==>  2
//("", "z")       ==>  0

// function str_count(str, letter){
//     //need to set up counter for lett
//     let count = 0 
//     //need to loop through string for letter
//     for(let i in str){
//         //check if str[i] is equal to letter
//         if (str[i]==letter){
//             // add to counter if true
//             count += 1
//         } //else it won't count
//     }//outside of for loop, we need to console.log count
//     console.log(count)
// }

// str_count('Hello', 'o')
// str_count('Hello', 'l')
// str_count('Hello', 'z')