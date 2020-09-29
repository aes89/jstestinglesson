// syntactic sugar for programmers from other language to ease into js was introducced in ES6

// difference between functions and classes
// 1.functions are hoisted, classes are not hoisted
// 2. class have a class method (called static methods, which can directly be called on a class. function s don't have a static method)

class House{
    static unlock(secretPassphrase){
        if (secretPassphrase == "please"){
            return "Ok I'll open"
        }
        return "not allowed"
    }
}



// don't need an instace to call a class method : use case of static

console.log(House.unlock("please"));
