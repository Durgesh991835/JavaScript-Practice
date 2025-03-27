
// Stack Memory => Primitive datatype save ,  Heap Memory=>Non Primitive

let Email = "rs00877@gmail.com"

let anotherEmail= Email
anotherEmail="durgesh@gmail.com"  // Stack Memory

// console.log(anotherEmail);
// console.log(Email);

let user = {
    Name:"durgesh",
    email:"rs00@gmail.com"
}

let user2 = user
user2.email="ds@gmail.com"  //Heap Memory
console.log(user2);
console.log(user);