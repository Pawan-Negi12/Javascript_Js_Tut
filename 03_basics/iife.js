// Immediately Invoked Function Expressions

/*
    Sometimes there might be a problem with the global scope pollution,
    for that we use iife
*/


// Named IIFE
(function func(){
    console.log("DB Connected");
    
})();


((name) => {
    console.log(`Second DB Connected ${name}`);
    
})(`David`)

// func()