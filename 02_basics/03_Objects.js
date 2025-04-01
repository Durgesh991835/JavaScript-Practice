//-----------Object litterals---------///

const mySym = Symbol("key1")

const JsUser = {
   name: "Durgesh",
   "FullName": "Durgesh Kumar Shukla",
   mySym: "mykey1",
   age: 18,
   location: "Lucknow",
   email: "rs0087@gmail.com",
   isLoggedIn: false,
   lastloginDays: ["monday","sunday","Thursday"]


}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["FullName"]);
// console.log(typeof JsUser.mySym);


JsUser.email = "durgesh213@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "obs321@gmail.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Rohan shukla");
}

JsUser.greetingTwo = function (){
    console.log(`Hello Js User ${this.FullName}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());