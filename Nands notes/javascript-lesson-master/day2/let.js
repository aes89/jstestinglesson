// Thumb rule :

// var for global variable
// let for block variable
// const does not change and can be used where defined (in or outside block)

// step 1: correct way

var x = "sarah";
{
    let x = "maya"
    console.log(x);
}

console.log(x);


//step 2: even if global is set to let it still works like global.

let x = "sarah";
{
    let x = "maya"
    console.log(x);
}

console.log(x);

//step 3: let when defined in a block can't be accessed out of the block

{
    let x = "maya"
    console.log(x);
}

console.log(x);

// // step 4: var defined in block can be accessed out of the block

{
    var x = "maya"
    console.log(x);
}
console.log(x)


