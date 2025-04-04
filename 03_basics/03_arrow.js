const user = {
    username: "Rohan",
    price: 2304,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Durgesh"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Durgesh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "Durgesh"
//     console.log(this.username);
// }

// chai()

// const addTwo = (a,b) => {
//     return a + b
// }

// const addTwo = (a,b) =>  a + b

// const addTwo = (a,b) =>  (a + b)

const addTwo = (a,b) =>  ({username: "Shukla"})

console.log(addTwo(3,5))