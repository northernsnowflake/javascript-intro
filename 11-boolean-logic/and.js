const state = 500;

if (state == 200){
    console.log('OK');
} else if (state === 400 || state === 500){
    console.log('Error!');
} else {
    console.log('Unknown state');
}