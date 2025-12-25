// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null

// console.log(typeof score);
// console.log(typeof (score));

// let scoreToNumber = Number(score)
// console.log(scoreToNumber); // NaN for null it will be 0 and for undefined NaN.
// console.log(typeof scoreToNumber);

// "33" => 33
// "33abc" => NaN
// undefined => NaN
// null => 0
// true/false => 1/0


let loggedIn = 1
let valueInLoggedIn = Boolean(loggedIn)
// console.log(valueInLoggedIn);

// 1 => true
// 0 => false 
// "" => false
// "abc" => true



//*************************Operations****************************/

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Hello"
let str2 = " David"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log(1 + 1 + "2")
// console.log("2" + 1 + 1)

// console.log(+true); // + will convert true to 1 vice versa will give error
// console.log(+""); // + will convert "" to 0

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);   // >, <, >=, <= converts null to 0
// console.log(null == 0);
// console.log(null >= 0);


// primitive
// 7 types --- number, string, boolean, null, undefined, symbol, bigint
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// reference (Non primitive)
// arrays, objects, functions

// Array
const marvel = ["IronMan", "Captain America", "Thor"]

// Objects
let myObj = {
    name: "Tony Stark",
    age: 45
};

const myFunction = function func (){
    console.log("Hello");
    
}



//--------------------------------------------------------------------------------------------------


// Stack Memory(primitive) -- Stores copy
// Heap Memory(Non-Primitive) -- stores reference

let name = "Tony Stark"
let anotherName = name

console.log(name);
console.log(anotherName);

anotherName = "Captain America"
console.log(anotherName);



let objOne = {
    email: "abc@google.com",
    upi: "abc@ybl"
}

let objTwo = objOne

console.log(objOne);

objTwo.email="xyz@google.com"
console.log(objOne);
