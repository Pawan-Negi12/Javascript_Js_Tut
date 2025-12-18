const accountId = 12345;
let accountEmail = "abc@email.com";
var accountPassword = "1234534";
accountCity = "Pune";
let accountState;


// Cannot Change const variables
// accountId = 23212;


/*
    Prefer not to use var
    because of issue in block and functional scope.
*/

accountEmail = "xyz@email.com"
accountPassword = "25432"
accountCity = "Banglore"


// console.log(accountId);

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




