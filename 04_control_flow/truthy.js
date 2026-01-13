const userEmail = ""
if (userEmail) {
  console.log(`You have an email: ${userEmail}`);
} else {
  console.log("You don't have an email");
}


// Flasy values in JavaScript ---- false, 0, BigInt, -0, 0n, "", null, undefined, NaN
// truthy values in JavaScript ---- "0", 'false, " ", [], {}, function(){}, Any other value that is not falsy

const emptyObject = {}
if (Object.keys(emptyObject).length == 0) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}


// Nullish Coalescing Operator (??) : null or undefined
let val1;
val1 = null ?? 10; 

console.log(val1);


// Ternary Operator
const age = 17;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote);

