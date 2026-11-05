let score ="30abc"
let cool =null
let b =undefined
console.log("answer is ",typeof score)
// console.log(typeof (score))

let c =Number(b)
let nic =Number(cool)
let valuInNumber= Number(score)

console.log(typeof valuInNumber)

console.log(valuInNumber) // nan means not a number 
console.log(nic) // number

console.log(b) // undefined
console.log(c) //nan


// "33" => 33
//"33abc" =>nan
// true => 1 , false => 0

// convert value in Boolean
let isLoggedIn = 0   // 0,1 false or true
let booleanIsLoggedIn= Boolean(isLoggedIn)


console.log(booleanIsLoggedIn) // true

let d =""
let e=Boolean(d)
console.log(e) // if "" false  , if "Shubham"  true 



// ------------------------------------------

let  somenumber =33

let x =String(somenumber)
console.log(x)
console.log(typeof x) // convert number to string 
