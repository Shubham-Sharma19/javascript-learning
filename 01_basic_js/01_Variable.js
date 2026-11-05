const accountId =144553
let accountEmail="shubham@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountState mai variable assign nhi hai to undefined declare hoga 
// accountId=2 // not allowed
console.log(accountId);

accountEmail="aakash@google.com"
accountPassword="21222"
accountCity="Haryana"

console.table([accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use  var because of issue in block 
scope and functional scope
*/

    