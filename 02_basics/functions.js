const addTwoNumbers = function(num1, num2){
    return num1 + num2;
}

// console.log(addTwoNumbers(3, 5)); // 8
// console.log(addTwoNumbers(3, "5")); // 35
// console.log(addTwoNumbers(3, null)); // 3 
// console.log(addTwoNumbers(3, undefined)); // NaN
// console.log(addTwoNumbers("3", 5)); // 35
// console.log(addTwoNumbers("3", "5")); // 35

// console.log(3 + 3 + "5"); // 65
// console.log("3" + "3" + 5); // 335

function login(userName = "Sam"){
    if(!userName){
        console.log("Please enter a valid username");
        return;
    }

    return `${userName} logged in successfully`;
}

// console.log(login()); 

// ... is rest operator which collects all the arguments into an array
// function calculateCartPrice(...price){
//     return price
// }
function calculateCartPrice(num1, num2, ...price){
    return price
}

// console.log(calculateCartPrice(10, 20, 30, 40, 50));



const user = {
    name: "John",
    ages: 30,
}

function handleObject(anyObj){
    return `User ${anyObj.name} is ${anyObj.age} years old`;
}

console.log(handleObject(user));



