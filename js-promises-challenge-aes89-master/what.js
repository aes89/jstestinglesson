// we'll start with a simple function that resolves or rejects a promise based on input
function isNumber(input) {
    return new Promise((resolve, reject) => {
        if (typeof input === 'number') {
            resolve(input);
        }
        reject(new Error("Must be a number"))
    });
}

//this is a little contrived it's probably fine to double a negative number but it's for demonstration
function double(number) {
    return new Promise ((resolve, reject) => {
        if (number < 0) {
            reject(new Error("Must be positive"))
        }
        resolve(number * 2)
    })
}

//try changing the input to create an error and see if the .catch handles it
console.log(isNumber(4))
    .then(double)
    .then(result => console.log(result))
    .catch(error => console.error(error.message))

