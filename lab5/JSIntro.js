
//Q_1 Find the Max Number:
function max(num1, num2){

    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
   // alternative method using for loop
// let max = -Infinity;
// let i ;
// for(i = 0; i < arguments.length; i++){
//     if(arguments[i] > max){
//         max = arguments[i];
//     }
// }
// return max;

}
let theMax = max(10,20);
console.log(theMax);

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
console.log(result);

//Q_3
function isVowel(char){
   let vowels = "aeiouAEIOU";
   return vowels.includes(char); // include works like contains in java and it returns true or false
}
let Vowel = isVowel("e");
console.log(Vowel);

//Q_4  USING IMPERATIVE PROGRAMMING
// a function sum()
function sum(arr){
    let totalSum = 0;
    for(let i = 0; i < arr.length; i++){
       totalSum += arr[i];
    }
    return totalSum;
}
console.log("The sum of 1 + 2 + 3 + 4 = " + sum([1,2,3,4]));

// b function multiply()
function multiply(arr){
    let totalProduct = 1;
    for(let i = 0; i < arr.length; i++){
        totalProduct *= arr[i];
    }
    return totalProduct;
}
console.log("The product of 1*2*3*4 = " + multiply([1,2,3,4]));

//Q_5 function that reverse a string in reverse order
function reverse(str){
    let s =" ";
    for(let i = str.length-1; i >= 0; i--){
        s += str[i];
    }
    return s;
}
console.log("The reversed string of jag testar =", reverse("jag testar"))


//Q_6 findLongestWordLength

let arr = ["Nahom", "Mango", "Michal"];
// using pure function map
let longestWord = arr.map(function (i) {
  return i.length;
});

console.log("Length of the longest words:", longestWord);
