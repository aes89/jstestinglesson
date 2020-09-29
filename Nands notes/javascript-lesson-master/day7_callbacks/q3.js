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