
const now = new Date();
const win95Launch = new Date(1995, 7, 24);

console.log(now);
console.log(win95Launch)

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${now.getDay()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Date: ${now.getDate()}`)
console.log(`Year: ${now.getFullYear()}`)