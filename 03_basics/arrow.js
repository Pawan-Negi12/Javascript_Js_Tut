const user = {
    name: "John",
    age: 30,

    greeting: function() {
        console.log(`Hello User, ${this.name}`);
    }
}

// console.log(user.greeting());
// user.name = "Alice"
// console.log(user.greeting());


function greeting() {
    let name = "John";
    console.log(`Hello User, ${name}`);
}

// greeting(); // Hello User, John

const func = () => {
    let username = "David"

    console.log(`Hello, ${username}`);
    
}

// func()


const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}   

console.log(addTwoNumbers(3, 5)); // 8

// If there is only one parameter, you can omit the parentheses
const square = num => {
    return num * num;
}

// If the function body has only one expression, you can omit the curly braces and the return statement
const multiply = (a, b) => a * b;   
console.log(multiply(4, 5)); // 20


