// https://www.youtube.com/watch?v=pt2oW_B4FkU

console.log("before timer starts")


// exceutes a callback after certain time has passes
setTimeout(callbackFunction, 5000) //JS predefines setTimeout

setTimeout(() => {
    console.log("5 sec done")
}, 5000)

console.log("finished")

// // outputs:
// before timer starts
// finished
// 5 sec completed

// q1
for (let i=0; i<4; i++){
        // setTimeout : delegated to web api, so js can continue to execute what is on call stack
    // once web api completes executing setTimeout, pushes callabck function to callback queue (console.log(i))
    // once call stack is empty, in this case "code after for loop", execute whatever is in callback queue (console.log(i))

    setTimeout(()=>{
        console.log(i)
    },0);
}
//  -> 0 1 2 3

// q2
 for (let i = 0; i < 4; i++) {
         // time consuming task : pass this to the web Api yo execeute once executed, add the callback function to callback queue
    setTimeout(() => {
        console.log(i)
        // doesn't matter that it's "0" seconds, still goes to the web API first
    }, 0);
}

// only when call stack is empty: execute the callaback from callback queue
console.log("code after for loop")
// -> code after for loop, 0 1 2 3


// q3
function foo() {
    let bar;
    console.log(`value of the bar in the foo function before setTimeout function :-------- ${bar}------`);

    setTimeout(function () {
        let bar = 5;
        console.log("value of bar in the callback is  " + bar);
    }, 0);

    console.log(`value of the bar in the foo function after setTimeout function :-------- ${bar}------`);
}
foo()

// <!-- pass a callback function to another js function... would this be put on the event loop?? -->

// q7
function callTimeOut() {
    setTimeout(function () {
        console.log("SET TIME OUT: callback function completed")
    }, 0);
}
callTimeOut();

waitThreeSecond(callback);

// my custom wait func to mimic set timeout
function waitThreeSecond(callback) {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {

    }
    callback();
}

function callback() {
    console.log("CALLBACK : 3 seconds completed!");
}
// after 3 sec
// "CALLBACK : 3 seconds completed!
// SET TIME OUT: callback function completed



// modified
function callTimeOut() {
    // went to web api
    setTimeout(function () {
        console.log("SET TIME OUT: callback function completed")
    }, 0);
    // continues on call stack
    console.log("does this run before setTimeout?")
}
callTimeOut();  // put on to call stack

waitThreeSecond(callback);

// my custom wait func to mimic set timeout
// custom fun doesn't get pushed to web api
// waitThreeSecond (call stack)
function waitThreeSecond(callback) {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {

    }
    // setTimeout : goes to web applicationCache, executes only after call stack in empty
    callback();
}

function callback() {
    console.log("CALLBACK : 3 seconds completed!");
}

// ---> does this run before setTimeout?
// SET TIME OUT: callback function completed