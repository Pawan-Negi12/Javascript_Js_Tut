const arr = [1, 2, 3, 4, 5]
// console.log(arr[0]);

arr.push(6)
// console.log(arr);

// unshift adds values in the beginning
// arr.unshift(0)
// console.log(arr);

// shift removes values from beginning
// arr.shift()
// console.log(arr);

// console.log(arr.includes(5));
// console.log(arr.indexOf(4));


// converts the whole array into a string
// const newArr = arr.join()
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

// Slice will not manipulate the original array while splice will manipulate the original array
// console.log("A: ", arr);

// console.log(arr.slice(1, 3));
// console.log("B: ",arr);

// console.log(arr.splice(1, 3));

// console.log("C: ", arr);


const marvel_heroes  = ["Iron Man", "Thor", "Captain America"]
const dc_heroes = ["Superman", "Batman"]

// Array add any type of element so when you push another array it treats it as an element
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);


// Spread operator

// const all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes);

// const new_array = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
// console.log(new_array.flat(Infinity));


// console.log(Array.isArray("Chris"));
// console.log(Array.from("Chris"));
// console.log(Array.from({name : "Chris"})); // It will return empty array until we define that we want array of key or values


let score1 = 30
let score2 = 40
let score3 = 50
console.log(Array.of(score1, score2, score3));

