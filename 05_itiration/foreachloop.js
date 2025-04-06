const coding = ["html","css","php","laravel","React"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//   console.log(item);
// } )

function printMe (item){
   console.log(item);
}
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        LanguageName: "Javascript",
        LanguagefileName: "Js"
    },

    {
        LanguageName: "Python",
        LanguagefileName: "Py"
    },

    {
        LanguageName: "Php",
        LanguagefileName: "ph"
    },
]

mycoding.forEach( (item)=> {
      console.log(item.LanguageName);
} )