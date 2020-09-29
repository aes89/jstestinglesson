// definition
function wait(ms){
    let start = Date.now()
    now = start   //assign current time to variable now
    while(now-start < ms){
        now = Date.now()
    }
}

wait(5000);  //call function wait
console.log("finished")