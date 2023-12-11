// CLASS 4 
//         revision 
var firstName = "hamzah";
var lastName = "syed";
if (firstName == "hamzah" && lastName == "syed") {
    console.log("you are not allowed");
}
else {
    console.log("you are allowed");
}
//   function
function greet() {
    console.log("hello hamzah");
}
// it doesnot  we have to call function 
greet();
function sum() {
    console.log(2 + 3);
}
sum();
function _greet(name) {
    console.log("hello", name);
}
// we can call function many time
greet();
greet();
function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
var ans = add(5, 10);
function multiply(num1) {
    console.log(num1 * 2);
}
multiply(ans);
//         array
// pop
//  popped out value is return 
var _menu = ["red", "yellow", "blue"];
var myFirstpopped = _menu.pop();
console.log(myFirstpopped);
// push
var menu = ["red", "yellow", "blue"];
var pushedReturn = menu.push("black", "pink");
console.log(pushedReturn);
//   slice
var _fruits = ["banana", "orange", "lemon", "apple", "mango"];
var _citrus = _fruits.slice(1);
// complete array is print
console.log(_fruits);
//  now we get the slice
console.log(_citrus);
var fruits_ = ["banana", "orange", "lemon", "apple", "mango"];
var citrus = fruits_.slice(1, 2);
console.log(citrus);
//                              splice
var fruit_s = ["banana", "orange", "appple", "mango"];
// because of 0 not even a one element is delete 
fruit_s.splice(2, 0, "lemon");
console.log(fruit_s);
var frUits = ["banana", "orange", "appple", "mango"];
frUits.splice(2, 1, "lemon");
console.log(frUits[2]);
var fruits = ["banana", "orange", "appple", "mango"];
