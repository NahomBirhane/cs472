
// console.log("Hello world this is Javascript!!");
// alert("Example of alert");

// console.log(a);
// var a;
// a = 5+7
// console.log(a);

// let str = "Nahom"
// str.indexOf("n")

// function sum(x,y){
//     return x+y;
// }
// console.log(sum(2,3));
// console.log(sum());

// let username = " Nahom";
// function greet(){
//     console.log("hi");
// }
// console.log("here is the result ", result + username);

const x = function(num){ return num*num;}
const finalvalue = x(4);
console.log(finalvalue);
console.log(x(2));
console.log(x(9));

function f(x,y){console.log(x+y);};
f(5,6); // no overloading in javascript

function log(x,y){
  console.log("2 arguments " + x + ", " + y);
}

log();
log(5);
log(4,5);

function findMax(){
    let i;
    let max = -Infinity;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    console.log(arguments, arguments.length);
    return max;
}

let theMax = findMax(1, 123, 500, 115, 66, 88);
let theMax1 = findMax(3,8,6);
console.log(theMax);
console.log(theMax1);


function add(x,y,...more){
let total = x+y;
if(more>0){
    for(let i = 0; i< more.length; i++){
     total += more[i];
    }
}
return total
}
const val = add(5,5,5);
console.log(val);

