// synchronous : one at a time , executes first line of code only after its completed goes for the next line
// Asynchronous : Non blocking code: code continues to execute while waiting for a blocking task to be completed
// delay :
// api call : to fetch some data

// waiting to load a picture
// file read and write

// Callbacks:  A callback function is a function passed into another function as an argument which is then invoked inside the function

function adder(x, y, callback){
    answer = x + y
    if(callback){
        return callback(answer)
    }
    return answer
}


function shoutSomething(input){
    console.log(input)
}

// syntax1:
adder(1,2,shoutSomething)  // function passed as an argument to another function


// anonymous function
adder(1,2,function(input){
    console.log(input)
})

adder(1,2, (input) =>{console.log(input)})







// functionCall(num,string,boolean,object,function)

