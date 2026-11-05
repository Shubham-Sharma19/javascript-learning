// Primitive
// 7 types : String , Number , Boolean , null, undefined ,Symbol,bigInt
// Primitive Data Types = Basic aur single value wale data types.


const score=100
const scoreValue =100.3
const isLoggedIn=false
const outsideTemp=null

let userEmail;  // undefined 

const id =Symbol("123")
const anotherId=Symbol('123')

console.log(id===anotherId) // false symbol 


// reference  ( non-primitive)
// array , objects , functions
// Isme multiple values hain, isliye non-primitive.

const heros= ["shaktimaan",'naagraj',"bheem"]  //array

// let my_object=
// {
//     name:"Hitesh",                // {} Curly wala data kau object bolte hai
//     age: 22

// }

// function(){}  // function syntax and niche isko variable mai store kkr diya gya hai 

let seek=null

const constMyFunction =function()
{
   console.log("Hello world"); 
}

console.log(typeof seek)

// non primitive type ka datatype function hota hai 
// null ka data type object he hoga typeof use kroge to 

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object