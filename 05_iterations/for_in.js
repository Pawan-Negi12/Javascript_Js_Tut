
const myObject = {
    name: 'John',
    age: 25,
    city: 'London'
};

// for...in loop
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}