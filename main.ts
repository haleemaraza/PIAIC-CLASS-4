// CLASS 4 
//         revision 
 let firstName = "hamzah";
let lastName = "syed";
if(firstName == "hamzah" && lastName =="syed"){
  console.log("you are not allowed");
}

else {
   console.log ("you are allowed");
 }



//   function
  function greet(){
          console.log("hello hamzah");
  }
// it doesnot  we have to call function 
 greet();

function sum(){
 console.log(2+3);
}
 sum();

function _greet(name: string){
    console.log("hello" , name);
}
// we can call function many time
 greet();
 greet();


function add(num1:number, num2:number ){
    console.log(num1 +num2);

     return num1 +num2
}

  let ans = add(5 , 10);

function multiply(num1:number){
     console.log(num1 * 2);
 }

multiply(ans);

//     array

// pop
//  popped out value is return 
 let _menu = ["red", "yellow", "blue"];
let myFirstpopped = _menu.pop();
console.log(myFirstpopped);

// push
 let menu = ["red", "yellow", "blue"];
 let pushedReturn = menu.push("black", "pink");
 console.log(pushedReturn);

 

//   slice
  const _fruits = ["banana", "orange", "lemon", "apple", "mango"];
 const  _citrus = _fruits.slice(1);
 // complete array is print
  console.log(_fruits);

 //  now we get the slice
 console.log(_citrus);
 const fruits_ = ["banana", "orange", "lemon", "apple", "mango"];
const  citrus = fruits_.slice(1 ,2);
 console.log(citrus);



//   splice
const fruit_s = ["banana", "orange", "appple", "mango"];
// because of 0 not even a one element is delete 
fruit_s.splice(2,0,"lemon");
console.log(fruit_s);

 const frUits = ["banana", "orange", "appple", "mango"];
 frUits.splice(2,1,"lemon");
 console.log(frUits[2]);





