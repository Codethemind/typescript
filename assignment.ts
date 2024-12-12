function myFilter(myArray: number[], callback: (num: number) => boolean): number {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (callback(myArray[i])) {
            sum += myArray[i];
        }
    }
    return sum;
}
function isEven(num: number): boolean {
    const digitSum = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return digitSum % 2 === 0;
}
const inputArray = [1, 2, 3, 4, 5,6];
const result = myFilter(inputArray, isEven);

console.log(result);  
