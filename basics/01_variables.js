const account_Id=991835
let accountEmail="durgeshfgiet@gmail.com"
var accountPassword="123456"
accountCity="Lucknow"
let accountState;

 // account_Id=3444  //not allowed

 /*
 prefer not to use var 
 beacuse of issue in block scope and functional scope 
 */
  accountEmail="rs00@gmail.com"
  accountPassword="654321"
  accountCity="Jaipur"
 console.log(account_Id);
 console.table([account_Id,accountEmail,accountPassword,accountCity,accountState]);