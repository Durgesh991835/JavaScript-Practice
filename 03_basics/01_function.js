
function sayMyName(){
    console.log("D");
    console.log("U");
    console.log("R");
    console.log("G");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(a,b){
//     console.log(a + b);
// }

function addTwoNumber(a,b){
//   let result = a + b
//   return result
   return a + b
}

const result = addTwoNumber(4,5)
// console.log("Result: ",result);


function loginUserMessage(userName = "Rohan"){
    if(!userName){
        console.log("Please Enter userName");
        return
        
    }
    return `${userName} just logged in `
}

// console.log (loginUserMessage("Durgesh"))
// console.log(loginUserMessage("Durgesh"))


// .... -> rest operator
function calculateCardPrice(...num1){
    return num1
}
// console.log(calculateCardPrice(200,300,400))



//  call  object in function 

const user = {
    userName: "durgesh",
    price: 1340
}


function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`)
}
// handleObject(user)

// array in function

const myNewArray = [200,100,400,600,800]

function returnSecondValue(getArray){
    return getArray[4]
}
console.log(returnSecondValue(myNewArray));