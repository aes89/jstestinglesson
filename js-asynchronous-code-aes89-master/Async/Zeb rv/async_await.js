let waitBeforeRandom = (napTime = 2000) => {
    return new Promise(res => {
        setTimeout(res, napTime)
    }).then(() => Math.floor(Math.random() * 100))
}

waitBeforeRandom().then(console.log)
// waitBeforeRandom().then((x) => console.log(x)) // doesn't need to be this because console.log is a function that takes an argument and logs it.

console.log(waitBeforeRandom()) //gets a pending promise, waitBeforeRandom returns a promise that hasn't been resolved. Unpacks internal value of the promise with .then()