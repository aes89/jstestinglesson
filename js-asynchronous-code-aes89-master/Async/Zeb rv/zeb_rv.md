    Query Vs Command

    Queries: Return a result and do not change the observable state of the system (are free of side effects). Commands: Change the state of a system but do not return a value.
    
    Queries are questions that your functions will answer - THERE WILL BE AN ANSWER
    Some queries are pure functions - they have no side effects

    Commands are instructions that your operations will follow - THERE WILL NOT BE AN ANSWER

    let funcOne = (x) => {return console.log(x)}
    let funcTwo = (x) => {x * 2}
    let funcThree = (x) => {
    console.log(`Y'know what I love? ${x}`)
    return x + 1
}
console.log is a query that gives undefined as an answer, so technically a query.

    let funcTwo = (x) => {return x * 2} // query because it returns a value

    let funcThree = (x) => {console.log(x)} // command because I have no idea

    let funcFour = (x, y) => {return x + y} // query because it's returning a value you can use

Side effect - writing to the hard drive, changing the state of something but not returning??
Things in, things out -> query
Things in, things out/things change in a different place -> command?

    let funcFive = (x) => {
        console.log(`Y'know what I love? ${x}`)
        return x + 1
    } // dirty query, answers question, has a side effect and a return value.

    Side effects such as writing files, sending a message over the network, or printing to the console are all commands, forEach alters outside of the loop (is a side effect). 

    Every useful program must have a side effect (otherwise the only purpose of it would be to evaluate functions without ever doing anything with the result of those functions)

    The exception here would be purposefully creating a large amount of computation to warm up your study by getting your CPU or GPU cooking

    Asynchronous JS review

    https://eloquentjavascript.net/11_async.html

    Callbacks

    what is a callback?

    call stack

    callback queue

    Promises

    potential states

    what can you do with a promise?

    handling collections

    Async Await

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

    async functions

    how do we declare it async?

    what does an async function return?

    await

    error handling