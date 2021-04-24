/**
 * 1  Print the number of integers in an array that are above the given input and the number 
 * that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.

 */
// Define a function `aboveAndBelowNum` that takes an array of integers and a number as arguments
// and return the total number of integers in the array above the input number and the below the in put numbers

function aboveAndBelowNum(integersList, num) {
    // Initialize an object that will tally the number of integers above and below
    const counts = { above: 0, below: 0 };
    // iterate over the integer list and increment the above or below counts 
    //if the integer is above or below the num  respectively
    integersList.forEach(int => {
        if (int === num) return;
        counts[int < num ? "below" : "above"] += 1;
    });
    console.log(`above: ${counts.above}, below: ${counts.below}`);
};
/**
 * #2  Rotate the characters in a string by a given input and have the overflow appear at the beginning
 * e.g. “MyString” rotated by 2 is “ngMyStri”.

 */

// Define a function `rotateStringChar` that takes a string and the number of rotations as arguments
// and returns the rotated string.
function rotateStringChar(string, numOfRotation) {
    const length = string.length;
    return string.slice(length - numOfRotation) + string.slice(0, length - numOfRotation);
}


/**
 * #3  If you could change 1 thing about your favorite framework/language/platform (pick one),
 * what would it be?

 */

// Answer
/**
 * If I could change anything about JavaScript, it will be making the strict mode mandatory as this
 * will really help new developers to easily debbug their codes like avoiding to create a global 
 * variable by mistyping an existing variable name or using reserved keywords as variables name. Raising 
 * exceptions for those common mistakes help fixing them in a promptly manner, 
 * thus avoiding worst problems down the road
 */