// object literal

const sym = Symbol("key1")

const jsUser = {
    name: "John",
    age: 30,
    [sym]: "value1",
    isLoggesIn: true,
    loginDays: [ "Monday", "Tuesday", "Friday" ]
}

// console.log(jsUser.name);
// console.log(jsUser.loginDays);
// console.log(jsUser["name"]);
// console.log(jsUser);
// console.log(jsUser[sym]);

jsUser.age = 31
// Object.freeze(jsUser) // prevent modification of object
jsUser.age = 32 // will not work
// console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello JS User, ${this.name}`);
}

// console.log(jsUser.greeting());


// -----------------------------------------------------------------------------------------------------------------------------


const tinderUser = new Object()
tinderUser.name = "Alice"
tinderUser.age = 25
tinderUser.isLoggedIn = false
tinderUser.friends = [ "Bob", "Charlie" ]
// console.log(tinderUser);


const regularUser = {
    email: "alice@example.com",
    userName: {
       userFullName: {
            firstName: "Alice",
            lastName: "Smith"
       }
    }
}

// console.log(regularUser.userName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = {...obj1, ...obj2}

/* 
    If you use Object.assign, it mutates the target object (first object), so obj1 will be changed.
    If you want to avoid mutating the original object, you can pass an empty object as the first argument:
*/
const obj3 = Object.assign({},obj1, obj2)
// console.log(obj1);

// console.log(obj1 === obj3);

// console.log(obj3);

const user = [
    {userId: 1, userName: "John"},
    {userId: 2, userName: "Alice"},
    {userId: 3, userName: "Bob"}    
]

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));

// -------------------------------------------------------------------------------------------------------------------------------------

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Jane Doe"
}

/*  
    This is called Object Destructuring. If we have to use values multiple times, 
    rather than writing course.courseName again and again, we can destructure it once.
*/
const { courseName, price: coursePrice, courseInstructor: instructor } = course
// const { courseInstructor: instructor } = course
console.log(instructor);

// console.log(courseName);
console.log(coursePrice);
// console.log(courseInstructor);


// {
//     name: "John",
//     age: 30,
//     email: "john@example.com"
// }