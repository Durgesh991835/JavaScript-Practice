const marvel_heroes = ["Thor","IronMan","Hulk","CaptainAmerica"]
const Dc_heroes = ["SuperMan","Flash","BatMan"]

// marvel_heroes.push(Dc_heroes)
// // console.log(marvel_heroes);
// // console.log(marvel_heroes[4][2]);

const allheroes = marvel_heroes.concat(Dc_heroes)
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes,...Dc_heroes]

// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("durgesh"));
// console.log(Array.from("durgesh"));

console.log(Array.from({name: "durgesh"}));

let score1= 100
let score2= 300
let score3= 400

console.log(Array.of(score1,score2,score3));

































































































