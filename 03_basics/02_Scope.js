// let a = 10
// const b = 30
// var c= 40

// console.log(a)
// console.log(b)
// console.log(c)


// var c= 38
let a = 50

if(true){
    let a = 10
    const b = 30
    var c= 40
//    console.log("Inner: ",a)
}

// console.log(a)
//  console.log(b)
// console.log(c)


function one(){
    const userName = "durgesh"

    function Two(){
        const website = "Facebook"
        console.log(userName);
    }
    // console.log(website);
    Two()
}
// one()

if(true){
    const userName = "Rohan"
    if(userName === "Rohan"){
        const website = "Whatsapp"
        // console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);


//++++++++++++++++++Interesting+++++++++++++//


// console.log(addOne(5))

function addOne(a){
    return a+1
}

addTwo(7)

const  addTwo = function(b){
    return b+2
}