const userEmail = "rs00@gmail.com"

if(userEmail){
    console.log("Got user Email");
} else {
    console.log("Dont have user Email");
}


// falsy value 

// false 0, -0 ,BigInt On ,"" , null , undefined ,NaN


// truthy value 

// true -> "0", 'false' , " ", [] , {}, function(){}

const Email = []
 
if (Email.length===0){
    console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing operator(??)

let val1;
// val1 = 6 ?? 43
// val1 = null ?? 65
// val1 = undefined ?? 16
val1 = null ?? 34 ?? 65

// console.log(val1)


// Ternery operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80")