let waitBeforeRandom = (napTime = 2000) => {
    return new Promise(res => {
        setTimeout(res, napTime)
    }).then(() => Math.floor(Math.random() * 100))
}

// waitBeforeRandom()
//     .then(x => {
//         return waitBeforeRandom().then(y => x + y)
//     })
//     .then(x => {
//         return waitBeforeRandom().then(y => x + y)
//     })
//     .then(console.log)

    // "icky" above

let asyncFunc = async () => {
    console.log(`first log: ${waitBeforeRandom()}`)
    waitBeforeRandom().then(x => console.log(`second log: ${x}`))
    // What happens if we await the promise and log the result?
    let res = await waitBeforeRandom()
    console.log(`third log: ${res}`)
    return 5 // this doesn't log, it returns a promise??
}

//await makes everything under it wait. await useful instead of a chain of .thens
// promise not going to block??

asyncFunc()
waitBeforeRandom().then(x => console.log(`second.5 log: ${x}`))
asyncFunc().then(console.log) // returns the 5
// console.log(await asyncFunc()) // does not work, wait can't use the await keyword outside of an async function


// let asyncSum = async (num) => {
//     let arr = [] //use wait before random function to get a value in this array that is not a promise
//     for(let i = 0; i < num; i++) {
//     }
// }


let asyncSum = async (num) => {
    let arr = []
    for(let i = 0; i < num; i++) {
        let ret = await waitBeforeRandom(500) //awaits every single time
        arr.push(ret)
    }
    console.log("arr:", arr)
    return arr
}

let x = asyncSum(3)
console.log(x) //returns a promise first??