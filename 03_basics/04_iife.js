/// Immediately Invoked Function Expressions (IIFE)

( function chai (){
    console.log(`DB CONNECTED`);
}

) ();

((name) => {
    console.log(`my name is ${name}`);
})("akshukla");