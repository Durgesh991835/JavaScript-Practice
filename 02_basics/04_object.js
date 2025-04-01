//const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "321abc"
tinderuser.name = "Durgesh"
tinderuser.email = "rs877@gmail.com"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularuser = {
    number: 9918838393,
    fullName: {
        userfullName:{
            firstName: "Rohan",
            lastName: "Shukla"
        }
    }
}
// console.log(regularuser.number);
// console.log(regularuser.fullName.userfullName);

const obj1 = {1: "a",2: "b",3: "c"}
const obj2 = {4: "d",5:"e",6:"f"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {

    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('email'));