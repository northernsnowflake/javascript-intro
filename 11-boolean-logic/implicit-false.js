const jmeno = '';

if (!jmeno){
    console.log('No name provided')
} else {
    console.log('We have name');
}

const stav = 'error';
if (stav.toUpperCase() === 'ERROR'){   // transfer our stav to ERROR and compare with ERROR
    console.log('Something went wrong!');
} else {
    console.log('Looks great')
}
