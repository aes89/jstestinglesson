// Let's create an object o from function f with its own properties a and b:
function myFunc () {
    this.a = 1;
    this.b = 2;
}
let obj = new myFunc();

myFunc.prototype.b = 3;
myFunc.prototype.c = 4;

console.log(obj.a);
console.log(obj.b); 
console.log(obj.c); 
console.log(obj.d); 