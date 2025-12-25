let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let mycreatedDate = new Date(2025, 2, 23)
// let mycreatedDate = new Date("2025-03-13")
let mycreatedDate = new Date("03-22-2025")

// In Js Month start from 0
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getDay());
// console.log(newDate.getMonth());


// Customize your Values
newDate.toLocaleString('default', {
    weekday: "short"

})
