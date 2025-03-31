//----------Array-----------------//

const myArray = [0,1,2,3,4,5,true,"Durgesh"]
const Heroes =["IronMan","CaptainAmerica","Spiderman","Superman"]
const myArray2 = new Array(1,2,3,4,5,6)
// console.log(myArray[7]);
// console.log(Heroes);
// console.log(myArray2);

// Array Method

// myArray.push(6)
// myArray.pop()
myArray.unshift(8)
myArray.shift()
// console.log(myArray);
// console.log(myArray.includes(9));

// const newArr = myArray.join()
// console.log(myArray);
// console.log(typeof newArr);


/// slice, splice Method

console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);
const myn2 = myArray.splice(1,3)
console.log("c",myArray);
console.log(myn2);