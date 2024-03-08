 // type
 const black = {};
 console.log("Blank type:", typeof blank);

 /*
 //object
 const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false
 };
 console.log("Book type:", typeof book);
 console.log("Book value: \n", book)
*/

/*
 //define actions on that object
 const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false,
    checkIn: function(){ this.isAvailable = true; }, // another property
    checkOut: function(){ this.isAvailable = false; } // another property
 };
 console.log("Book type:", typeof book);
 console.log("Book value:\n", book);
 */

 // constructors 
const book = new Object(); // created instance of the object
console.log("Book value:\n", book);

const data = {title:"Made by hand",author:"Mark Frauenfelder"}
const book1 = new Object(data);
console.log("Book1 value:\n", book1)



const dataFunc = {
    title: "Made by hand",
    author: "Mark Frauenfelder",
    isAvailable: true,
    checkIn: function(){ this.isAvailable = true; }, // another property
    checkOut: function(){ this.isAvailable = false; } // another property
}
const book2 = new Object(dataFunc)
console.log("Book2 value:\n", book2)

//Dot notation
console.log(book2.title)
book2.author = "M. Frauenfelder"
console.log(book2)

// Brackets Notation
console.log(book2["author"])
book2["author"]="M.Frauenfelder"
console.log(book2)


//for methods

// Dot notation
console.log(book2.isAvailable);
book2.checkOut();
console.log(book2);

// Brackets Notation
console.log("--Brackets");
console.log(book2.isAvailable);
book2["checkOut"]();
console.log(book2);


book2["checkIn"]();
console.log(book2);
console.log(book2.isAvailable);

//this is handler for runtime
//when uses inside the function, references runtime context of that object  
const bookObj = {
    checkIn:function(){
        return this; 
    }
}
console.log("\n\nthis is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === bookObj); //this represents the owner === book

function anotherCheckIn(){//defined at the global scope, NOT attached to the object inside the 
    return this;
}
console.log("\n\nthis is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);
