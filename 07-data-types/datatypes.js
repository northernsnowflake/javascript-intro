const people = ["Aaron","Mel","John"]
const one = 1;
const str = true;
const b = true
//object
const person = {
    firstName: "Aaron",
    lastName: "Powell"
};
//function
function sayHello(person){
     console.log("Hello " + person.firstName);
}
console.log("-- fypeof -- ")
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log(" -- instanceof -- ")
console.log(people instanceof Array) // variable name instance of constructor we would like to test
console.log(one instanceof Number)
console.log(str instanceof String)
console.log(b instanceof Boolean)
console.log(person instanceof Object)
console.log(sayHello instanceof Function)