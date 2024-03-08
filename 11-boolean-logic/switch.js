const state = 200;

switch (state){
    case 200:
        console.log('OK')
        break;//without it, it will go through everything
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown');
        break;
        

}