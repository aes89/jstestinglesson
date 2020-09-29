// callstack : LIFO :  1st prioroty
// callback queue : FIFO second prioroty
// every time consuming tasks( setTimeout,setInterval, fetch API, file read : passes the task to the web api )
// once web api completes the task, the callback function get pushed to callback queue
// only after callstack is empty, cb functions from callback queue gets executed


// Not every time consuming task gets put on to web api : ex your own custom wait fun will not be executed by web api