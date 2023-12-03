
// JAVASCRIPT INTRODUCTION HOME WORK
//Q_1 Find the Max Number:

function max(num1, num2){

    if(num1 > num2){
        return num1;
    }else if(num1 < num2){
        return num2;
    }else return "The numbers are Equal";

}
let theMax = max(100,10);
console.log("Q_1 The largest number is: ",theMax);

// Q_2 function maxOfThree
function maxOfThree(){
    let maxOF3 = -Infinity;
   for(let i = 0; i < arguments.length; i++){
       if(arguments[i] > maxOF3){
        maxOF3 = arguments[i];
       }
   }
   return maxOF3;
}
let result = maxOfThree(11,-2,3);
console.log("Q_2 The largest number is: ",result);

//Q_3
function isVowel(char){
   let vowels = "aeiouAEIOU";
   return vowels.includes(char);
}
let Vowel = isVowel("e");
console.log("Q_3 Is the character a vowel: ",Vowel);

//Q_4  USING IMPERATIVE PROGRAMMING
// a function sum()
function sum(arr){
    let totalSum = 0;
    for(let i = 0; i < arr.length; i++){
       totalSum += arr[i];
    }
    return totalSum;
}
console.log("Q_4a The sum of 1 + 2 + 3 + 4 = " + sum([1,2,3,4]));

// b function multiply()
function multiply(arr){
    let totalProduct = 1;
    for(let i = 0; i < arr.length; i++){
        totalProduct *= arr[i];
    }
    return totalProduct;
}
console.log("Q_4b The product of 1*2*3*4 = " + multiply([1,2,3,4]));

//Q_5 function that reverse a string in reverse order
function reverse(str){
    let s =" ";
    for(let i = str.length-1; i >= 0; i--){
        s += str[i];
    }
    return s;
}
console.log("Q_5 The reversed string of: jag testar =",reverse("jag testar"))

//Q_6 findLongestWordLength
function findLongestWordLength(words) {
    return words.reduce((maxLength, currentWord) => {
        return Math.max(maxLength, currentWord.length);
    }, 0);
}
let arr = ["Nahom", "Mango", "Michal"];
let longestLength = findLongestWordLength(arr);
console.log("Q_6 Length of the longest word:", longestLength);

//Q_7 This programme does find the lonest word and it returns the length of the word.
function filterLongWords(arr, len){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > len){
            len = arr[i].length;
        }
    }
    return len;
}
let arrNames = ["Nahom", "Michal", "Lenovox"];
let wordLength = 5;
console.log("Q_7 The longest word on the given array is:", filterLongWords(arrNames, wordLength));

//Q_8 find the sqare value of the given numbers and display thier squared sum using functional programming
function computeSumOfSquares(numbers){
    return numbers.map(m=>m*m)
                  .reduce((sum, current) => sum + current, 0);
}
console.log("Q_8 The sum of the three numbers is: ", computeSumOfSquares([1,2,3]));

//Q_9 Printing out all the odd numbers 
function printOddNumbersOnly(myArr){
         return myArr.filter(n => n % 2 !== 0);
   }
console.log("Q_9 Printing odd numbers from a given array element: ",printOddNumbersOnly([1,2,3,4,5,6,7]));

//Q_10 This programme does add all the sqaured number of even numbers
function computeSumOfSquaresOfEvensOnly(arrNum) {
    return arrNum.filter(f => f % 2 === 0) 
                 .map(m => m * m) 
                 .reduce((x, y) => x + y, 0);
}
console.log("Q_10 The Square sum of all even numbers is:", computeSumOfSquaresOfEvensOnly([1, 2, 3, 4]));

//Q_11 Add numbers using pure function 

// Add
function sumNum(arr){
   return arr.map(m => m).reduce((x,y) => x+y,0);
}
console.log("Q_11a Here is the sum: " + sum([1,2,3,4]));

// Multiply
function multiplyNum(arr){
    return arr.map(m => m).reduce((x,y) => x*y,1);
 }
 console.log("Q_11b Here is the product: " + multiplyNum([1,2,3,4]));

//Q_12 Display Fibonacci sequence of a give number
function printFibo(n, a, b) {
    let result = "";
    let temp;
    while (n > 0) {
        result += a + ",";
        temp = a + b;
        a = b;
        b = temp;
        n--;
    }
    result = result.substring(0, result.length - 1);
    return result;
}
console.log("Q_12 Here is the series: ", printFibo(8, 0, 1));