// for of
// ["","","","",]
// [{},{},{},{}]

const arr = [1,2,3,4,5,6,9]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`Each char is : ${greet}`);
}

// Maps

const map = new Map()

map.set('India',"Delhi")
map.set('Shrilanka',"jayavardhane")
map.set('USA',"Vashington")
map.set('India',"Delhi")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, '-:' ,value);
}