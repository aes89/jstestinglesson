let waitBeforeRandom = (napTime = 2000) => {
    return new Promise(res => {
        setTimeout(res, napTime)
    }).then(() => Math.floor(Math.random() * 100))
}


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


let promiseSum = (num) => {
    let arr = []
    for(let i = 0; i < num; i++) {
        arr.push( waitBeforeRandom(5000) )
    }
    console.log(`The arr is: ${arr}`)
    return Promise.all(arr)
        .then(x => console.log(`The resolved arr is: ${x}`))
}

promiseSum(3) // array is just promises


asyncSum(3)

// differnt times for things but I'm confused about it. output:
// Promise { <pending> }
// The arr is: [object Promise],[object Promise],[object Promise]
// arr: [ 77, 5, 90 ]
// arr: [ 74, 9, 56 ]
// The resolved arr is: 84,70,24

//if code blocked in the wrong spots then the whole things takes too long

//async returns a promise, not an array even if that's what you ask for


// Something useful to read if you wanna see how to mix promises & async/await usage: https://dmitripavlutin.com/javascript-fetch-async-await/