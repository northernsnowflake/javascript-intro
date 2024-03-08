/* -----------------------------
    This code reverses a string 
    ----------------------------
    
let value = "Reverse me";
let reversedValue = "";

value.split(""). forEach((char) => {
    reversedValue = char + reversedValue;
});
console.log(reversedValue);
*/

function reverseString(value){
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });
}
console.log(reverseString("Reverse Me"))