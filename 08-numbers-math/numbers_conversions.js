let num1 = '150';
let flo1 = '1.50';

console.log(" Converting strings to integers ");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); //Hexadec 

console.log(" Converting strings to float ");
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log(" More Conversion Examples ");
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

//Template literals 
console.log(parseInt(`${1 + 1}`))

console.log(" Converting numebrs to string ");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
