
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
console.log(loginUserMessage("Durgesh"))