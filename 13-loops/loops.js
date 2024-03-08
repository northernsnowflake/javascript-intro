// ****** while loop ****** 
console.log('-- while loop--');
const all = ['Jupiter','Saturn','Uran'];
let whileindex = 0;

while(whileindex < all.length){   //do té doby, dokud bude něco v tom našem poli
    const name = all[whileindex]; // abychom získali 1 prvek ze seznamu, podle toho, jaký je index
    console.log(name); //vypiš mi jméno
    whileindex++; //index zvyšujeme
}

// ****** for loop ****** 
console.log('-- for loop--');
const names = ['Jupiter','Saturn','Uran'];
//let my forindex equal O as long as my forindex is less then my names lenghth and then finally 
for (let forindex = 0; forindex < names.length; forindex++){  
    const name = names[forindex]; 
    console.log(name)
}

// ****** for .. of loops ****** 

console.log('-- for ... of --');
const planets = ['Jupiter','Saturn','Uran'];
for (let planet of planets){
    console.log(planet)
}
