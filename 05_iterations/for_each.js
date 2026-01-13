const arr = ["JavaScript", "C++", "Python", "Java", "Ruby"];

// arr.forEach(function(element, index, array) {
//     console.log(`Element at index ${index} is ${element}, in array ${array}`);
// })

arr.forEach((element) => {
    // console.log(`Element: ${element}`);
})


const response = [
    {
        language: "JavaScript",
        languageFileName: "js"
    },
    {
        language: "Python",
        languageFileName: "py"
    },
    {   
        language: "Java",
        languageFileName: "java"
    }
]

response.forEach((obj) => {
    console.log(`${obj.language} --> ${obj.languageFileName}`);
    
})
