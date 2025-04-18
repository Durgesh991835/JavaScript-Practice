function SetUsername(username){
    //complex DB calls
    this.username = username
      console.log("Rohan");
}

function createUser(username, email, password){
    SetUsername.call(this,username)
    
    this.email = email
    this.password = password
}

const chai = new createUser("rohan", "rs00877@fb.com", "123")
console.log(chai);
