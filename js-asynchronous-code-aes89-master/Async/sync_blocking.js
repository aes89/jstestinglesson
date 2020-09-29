function wait(ms){
    let start = Date.now()
    now = start   //assign current time to variable now
    while(now-start < ms){
        now = Date.now()
    }
}

wait(5000); //blocking code?
console.log("finished")

//sync, blocks and nothing will run until first block completed.

// JAVASCRIPT IS STILL SYNCRANOUS
// https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

// Analogy: https://www.youtube.com/watch?v=s9Zy8ISjxIw&feature=youtu.be

// https://docs.google.com/presentation/d/1w9vDmR4PJTpuCaET5MGro5Vw6Pk6g74ylCUVD7Y1uYM/edit#slide=id.g627c13c13c_0_77
// https://bit.ly/1Btu0Iy  < -- animation of call stack. Web APIs are external environment. 
// When call stack empty, callback queue moves to next thing. Callstack -> web api for tasks that take time. 
// Zeb:  think of the callback queue as being "Full units of work I must do" and the stack as being "The thing I'm working on"


// call stack - sequence of your functions, tracking of execution order of your code.
// series of tasks to execute 