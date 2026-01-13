const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const evenNumbers = arr.filter((num) => num % 2 === 0);

// console.log(evenNumbers);


const books = [
    { title: "Book A", genre: "Fiction", rating: 4.5 },
    { title: "Book B", genre: "Non-Fiction", rating: 4.0 },
    { title: "Book C", genre: "Fiction", rating: 3.5 },
    { title: "Book D", genre: "Science", rating: 4.8 },
    { title: "Book E", genre: "Fiction", rating: 4.2 }
]

const fictionBooks = books.filter((book) => book.genre === "Fiction");

// console.log(fictionBooks);

const nums = [1, 2, 3, 4, 5];

const newNums = nums.map((num) => num + 10)
// console.log(newNums);


const vals = [5, 10, 15, 20];
const sum = vals.reduce((acc, val) => acc + val, 0)

console.log(sum);


