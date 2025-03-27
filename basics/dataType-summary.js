//    primitive =>

     //   7 types : Number,string,boolean,null,undefined,BigInt,Symbol


     const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
 
const id = Symbol('123')
const anotherId = Symbol('123')

 // const BigInt=64576474657n
console.log(id == anotherId);


// Reference (Non Primitive) =>
    //  Array , Object , Function


const heroes = ["Shaktiman","Hatim", "Nagraaj", "Doga"]   // Arrays

let myObj = {       
     Name: "Durgesh",
     age: 22,                 // Object
     Email:"rs00@gmail.com",

}
const myFunction = function(){
    console.log("Hello Durgesh");
}
console.log(typeof myObj);