

function greet(msg){
    console.log(msg)
}


// function call
greet("hello tom")


class Developer{
    constructor(){

    }
}

Developer.prototype.greet = function(msg){
    console.log(msg)
}

devInstance.greet("hello tom")