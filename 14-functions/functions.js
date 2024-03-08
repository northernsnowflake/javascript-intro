function sayHello(name) {  // there must be parameter
    console.log("Hello "+name)  // to say my name, make sure there is variable
    // called name that has this data that should be replaced with actual name
    return "Hello " +name;
    //console.log(sayHello.name)
}

//sayHello("Microsoft! ");
let result = sayHello ("Microsoft!")
console.log(result);
//console.log(typeof sayHello);
 
function computePrice(cost, discount){
    let reduction = cost*discount;
    console.log("You saved: $"+reduction);
    return cost-reduction
} 
computePrice(100,0.02)