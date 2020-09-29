

    // time consuming task : pass this to the web Api yo execeute once executed, add the callback function to callback queue
    // setTimeout : delegated to web api, so js can continue to execute what is on call stack
    // once web api completes executing setTimeout, pushes callabck function to callback queue(console.log(i))
    // once call stack is empty, in this case "code after for loop", execute whatever is in callback queue (console.log(i))
setTimeout(() => {
    console.log("a delayed task")
}, 0);


// only when call stack is empty: execute the callaback from callback queue
console.log("code after for loop")

// setTimeout
// setInterval
// Api calls :
// file read 
// file write