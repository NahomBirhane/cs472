
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


let strArr = ["hello", "world", "All"];

let sentence = strArr.reduce(function(acc, ele, i, arr2){ 
    return acc + ele + "_";}, "")

console.log(sentence);

 let x1 = strArr.reduce((x,y) => x + y + " " , "");
console.log(x1);


const a = [1,3,4,5,3,3];
const words = ["nahom", "Michal","mangomogog"];
const long = words.filter(f => f.length>6);
const long1 = words.find(f => f.length> 6);
const long2 = words.findIndex( f=> f.length>6);
console.log(long);
console.log(long1);
console.log(long2);

let theNumber = a.find(function(x,y,arr){ return x > 4;}); console.log(theNumber); // always returned the first that have found
let theIndex = a.findIndex(function(x,y , arr){ return x>3;}); console.log(theIndex);

let myArr = [[5,2,10],[4,5,3],[7,8,9]];
for(let arr of myArr)
for(let e of arr)
console.log(e);
myArr.sort(); // sort by first element
console.log(myArr);
// sorting by last element

let user = {
    fName: "Nahom Birhane",
    dob: new Date(1990,10, 24), "billingAddress":[{street: "1000 N 4th street", city: "Fairfield", zip: 52557}
                                                 , {street: "1000 N 4th street", city: "Fairfield", zip: 52557}
                                                ], 
                                "shippingAddress":[{street: "1000 N 4th", city: "Fairfield", state: "MN", zip:52557},
                                                 {street: "123 N 4th", city: "Fairfield", state: "CO", zip:52557},
                                                 {street: "1000 N 4th", city: "Fairfield", state: "IA", zip:52557}
                                                ]
}
console.log(user.fName);
console.log(user['billingAddress'][0].city);
console.log(user['shippingAddress'][0].state);

let nana = {
    a:1,b:2,c:4
};
alert(nana.a + nana.b + nana.c);
let na = {name: "nahom", age: 22, address: "Fairfield" }
for(let key in na){
    alert(na[key]);
}

