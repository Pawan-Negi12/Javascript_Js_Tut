// Array specific loops

const fruits = ['apple', 'banana', 'cherry'];
// for...of loop
for (const fruit of fruits) {
    // console.log(fruit); 
}

const map = new Map();
map.set('IN', 'INDIA');
map.set('US', 'USA');
map.set('FR', 'FRANCE');

// for...of with Map
for (const [key, value] of map) {
    // console.log(`${key} : ${value}`);
}

const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// You cannot use for...of directly on objects, you can use Object.entries()
for (const [key, value] of Object.entries(person)) {
    console.log(`${key} : ${value}`);
    
}