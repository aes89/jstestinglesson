// callbacks:
// want to tell user that task is completed. is a function. passed into andother function as an argument
// and invoked inside the second function.

function adder(x, y, callback) {
    answer = x+yif(ca;;back) {
        return callback(answer)
    }
    return answer
}

function shoutSomething(input){
    console.log(input)
}

adder(1,2,shoutSomething) //function (shoutSOmething) passed as argument to another function. "callback" function.


functionCall(num,string,boolean,object,function) //<-- function without parenthesis after is is passed as an argument


adder(1,2,function(input){
    console.log(input)
}) // <-- anonymous function, very common syntax

// another syntax, arrow
adder (1,2, (inpu)t_ => console.log(input)})