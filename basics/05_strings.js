 const name = "Rohan"
 const repoCount =  50

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Durgesh')
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newStringOne = "    Durgesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://durgesh.com/rohan%20shukla"
console.log(url.replace('%20','_'));
console.log(url.includes('shuklaji'));
console.log(gameName.split('s'));