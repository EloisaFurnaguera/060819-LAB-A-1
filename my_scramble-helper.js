"use strict";

// Create a function that reverses a word
function reverseWord (word){
    
    return word.split("").reverse().join("");
}


// console.log (reverseWord("hello"))


// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.



 function splitString (pharase){

    const array = [];

    const pharaseInArray = pharase.split(" ").reverse();

    for (const x of pharaseInArray){
        array.push(reverseWord (x));       
    }

return array;
    
 }

// console.log(splitString ("your foto"))

// Alternatively:

// function splitString (pharase){

//     return pharase.map(reverseWord);

// }



 //Take an array of letters and merge them into a string








// Create a function that returns a random word from an array


// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
