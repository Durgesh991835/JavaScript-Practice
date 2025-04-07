// const coding = ["js","ruby","java","python","css"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// });

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num) => {
//  return  num >4
// } )
// console.log(newNums);

const newNums = []

// myNum.forEach ( (num) => {
//      if (num >4) {
//         newNums.push(num)
//      }
// } )

// console.log(newNums);

const books = [
    {
        title:'Book one', genre:'Fiction', publise:'1981',edition:'2004'
    },
    {
        title:'Book two', genre:'non-Fiction', publise:'1977',edition:'2006'
    },
    {
        title:'Book three', genre:'History', publise:'1955',edition:'2010'
    },

    {
        title:'Book four', genre:'Grography', publise:'1908',edition:'2025'
    },
    {
        title:'Book five', genre:'History', publise:'1899',edition:'2017'
    },

    {
        title:'Book six', genre:'Novel', publise:'1876',edition:'1999'
    },
    {
        title:'Book seven', genre:'Polity', publise:'1856',edition:'2013'
    },
    {
        title:'Book eight', genre:'€hindi', publise:'1844',edition:'2012'
    },
]

let userbooks = books.filter ( (bk) => bk.genre == 'History' )

userbooks = books.filter ( (bk) =>  {
    return bk.publise >= 1900 && bk.genre == 'History'

} )
console.log(userbooks);