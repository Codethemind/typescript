function myFilter(myArray, callback) {
    var sum = 0;
    // Loop through each element in myArray
    for (var i = 0; i < myArray.length; i++) {
        // If the callback returns true, add the number to sum
        if (callback(myArray[i])) {
            sum += myArray[i];
        }
    }
    return sum;
}
// Callback function that checks if the sum of digits is even
function isEven(num) {
    var digitSum = num.toString().split('').reduce(function (acc, digit) { return acc + parseInt(digit); }, 0);
    return digitSum % 2 === 0;
}
// Sample input
var inputArray = [1, 2, 3, 4, 5, 6];
var result = myFilter(inputArray, isEven);
// Output the result
console.log(result); // Output: 15
