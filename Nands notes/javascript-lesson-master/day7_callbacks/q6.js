function callTimeOut() {
    setTimeout(function () {
        console.log("time out callback function completed")
    }, 0);
}

callTimeOut();
waitThreeSecond();

function waitThreeSecond() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {

    }
    console.log("3 seconds completed!")
}
