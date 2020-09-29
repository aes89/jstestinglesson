// <!-- pass a callbacxk function to another js function... would this be put on the event loop?? -->


function callTimeOut() {
    // went to web api
    setTimeout(function () {
        console.log("SET TIME OUT: callback function completed")
    }, 0);
    // continues on call stack
    console.log("does this run before setTimeout?")
}
// callTimeOut();  // put on to call stack

waitThreeSecond(callback);

// my custom wait func to mimic set timeout
// custom fun doesn't get pushed to web api
// waitThreeSecond (call stack)
function waitThreeSecond(callback) {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {

    }
    // setTimeout : goes to web applicationCache, executes only after call stack in empty
    setTimeout(function () {
        console.log("SET TIME OUT: callback function completed")
    }, 0);
    callback();
}

function callback() {
    console.log("CALLBACK : 3 seconds completed!");
}

// after 3 sec
// "CALLBACK : 3 seconds completed!
// SET TIME OUT: callback function completed
