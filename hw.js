//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog , and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
// let new = ["kbhj"]

function findWords(string, list){
    string_list=string.split(" ")
    // return(string_list)
    for (names in list){
    
    for (words in string){
        if (names == words){
            return "Matched dog_name"
        }
        else{
            return "No Matches"
        }
    }
}
}
console.log(findWords(dog_string, dog_names))


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arrays){
    for (i in arrays){
        if (i % 2 == 0){
            arrays.splice(0,1,"even index")
    }
}
    return arrays
}

console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// --------------------------CODEWARS IN JAVASCRIPT------------------

// PYTHON EXAMPLE:
// def multiply(a, b):
//   return a * b

// JAVASCRIPT EXAMPLE:

multiply = function (a, b) {
    return a * b;
  }

  // PYTHON EXAMPLE:
//   def even_or_odd(number):
//   if number % 2 == 0:
//     return "Even"
//   else:
//     return "Odd"

// JAVASCRIPT EXAMPLE:
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

// PYTHON EXAMPLE:
    // def opposite(number):
    // return -number

// JAVASCRIPT EXAMPLE:
function opposite(number) {
    return(-number);
  }