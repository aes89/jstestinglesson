let onReject = (err) => {console.error(`Promise machine broke: ${err}`)}
let onResolve = (val) => {console.log(`Promise machine went brrrrrr and gave us: ${val}`)}
let onResolveTwo = (x) => {console.log(`I will have a val of: ${x}`)}


// write a promise that takes a bool and resolves if true and rejects if false
// if we resolve, return a random number 0<=x<1
// if we reject, throw an error with whatever msg you'd like
let boolPromise = (b) => {
    return new Promise((resolve, reject) => { // placeholder names, could be "callback 1, callback 2", goes off order?
        b ? resolve(Math.random()) : reject("what the heck?!") // DOESN'T NEED TO BE A TERNARY, can be a function etc
    })
}

boolPromise(true).then(onResolve, onReject) // -> Promise machine went brrrrrr and gave us: 0.12836612521263846
boolPromise(false).then(onResolve, onReject) // -> Promise machine broke: what the heck?!
boolPromise(true).then(onResolveTwo, onReject) // -> I will have a val of: 0.2055762367629883

// does .then need two arguments passed? MDN using promises, always need a resolve, not necessarily a reject.
// monad - like promises/functions of functions

// Validate it works as intended

// write a method that takes a number, and returns that number +1 as a promise
// reject case is if it's less than 0
let addOneAsPromise = (x) => {
    return new Promise((resolve, reject) => {
        x >= 0 ? resolve(x + 1) : reject("below 0, please use a positive number")
    })
}

// Validate it works as intended
addOneAsPromise(3).then(onResolve, onReject) // -> Promise machine went brrrrrr and gave us: 4
addOneAsPromise(-1).then(onResolve, onReject) // -> Promise machine broke: below 0, please use a positive number
// Add several more simple arithmetic functions to a promise chain

// Validate it works as intended

//tripple 
addOneAsPromise(5)
    .then(x => x * 3) // x is value returned from previous function, can be whatever
    .then(onResolve) // -> Promise machine went brrrrrr and gave us: 18

// add 5
addOneAsPromise(5)
    .then(x => x * 3) // .then(returnedDataFromPreviousFunction => nextFunction)
    .then(x => x + 5)
    .then(onResolve)

// nothing to handle if breaks, e.g addOneAsPromise(-1)
addOneAsPromise(-1)
    .then(x => x * 3)
    // .then(x => x*3, err => console.log(`I am an error ${err}`)) could do this for error
    .then(x => x + 5)
    .then(onResolve)
    .catch(err => console.log(`no! brih ${err}`)) // --> no! brih can't remember the message he wanted, something about negativity

// Now lets try and use promises to apply a function over all of an arr
// First step: build an array of promises with x  + 1
let promiseArr = [...Array(10).keys()].map((x) => {
    return addOneAsPromise(x)
})

// Second step: Print and Validate
console.log(promiseArr) //-> [
//     Promise { 1 },
//     Promise { 2 },
//     Promise { 3 },
//     Promise { 4 },
//     Promise { 5 },
//     Promise { 6 },
//     Promise { 7 },
//     Promise { 8 },
//     Promise { 9 },
//     Promise { 10 }
//   ]

// just evens

Promise.all(promiseArr).then(x => console.log("evens only", x.filter(y => y % 2 == 0))) // -> evens only [ 2, 4, 6, 8, 10 ]
 

//clearer naming:
Promise
    .all(promiseArr)
    .then(promiseArr => console.log(promiseArr.filter(eachPromise => eachPromise % 2 == 0)))


// Docs give hints on the static methods to use for specific situations --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Build another array of promises
// Reject a promise if the value of the promise is 5
let promiseArrWithErr = [...Array(10).keys()].map((x) => {
    return addOneAsPromise(x)
        .then((x) => x != 5 ? x * 2 : Promise.reject("No fives!"))
})

// Print promiseArrWithErr to validate (don't forget a catch clause)
Promise.all(promiseArrWithErr)
    .then((promiseArr) => console.log `IT WORKED! ${promiseArr}`)
    .catch((err) => console.log `this is the error: ${err}`) // docs says it will reject as soon as one of the promises inside .all rejects. We don't have a reject callback -> error.

    //fixed
Promise.all(promiseArrWithErr)
    .then((promiseArr) => console.log(`IT WORKED! ${promiseArr}`),
    (reject) => console.log(`this is the rejection: ${reject}`)) // -> this is the rejection: No fives!


// Print promiseArrWithErr to validate, even if one of them is rejected

Promise.allSettled(promiseArrWithErr).then((x) => console.log("all settled:", x)) // -->all settled: [
//     { status: 'fulfilled', value: 2 },
//     { status: 'fulfilled', value: 4 },
//     { status: 'fulfilled', value: 6 },
//     { status: 'fulfilled', value: 8 },
//     { status: 'rejected', reason: 'No fives!' },
//     { status: 'fulfilled', value: 12 },
//     { status: 'fulfilled', value: 14 },
//     { status: 'fulfilled', value: 16 },
//     { status: 'fulfilled', value: 18 },
//     { status: 'fulfilled', value: 20 }
//   ]
//   [ 'this is the error: ', '' ] No fives! 


///states: fulfilled, pending, rejected
// pending means: The promise's outcome hasn't yet been determined, maybe in the cue
//  what does a promise return: 
// promise is used to solve callback hell/pyramid

// also to answer one questions from yesterday :
// can we write a custom function to put our code on the callback queue (just like we have setTimeout)


// Answer : yes you can if you write a function that returns promise
// A promise is asynchronous so it is removed from the call stack while it processes and brought back onto the call stack by the event loop once the call stack is clear.

potential states

fulfilled

rejected

pending

what does a promise return

resolve

reject

what can you do with a promise?

catch

then

finally

chaining

What is it, and why does it benefit us?

collections of promises

all

allSettled

any

race