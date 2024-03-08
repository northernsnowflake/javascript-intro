function promiseTimeout(ms){
    //new Promise = promise object, 
    //anonymous function - put whatever we want to happpen inside the function there 
    return new Promise((resolve, reject)=> {  //resolve indicate success, reject indicate failure
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('Done!!');
        return promiseTimeout(1000);
    }).then(() => {
        console.log('Also done!!');
        return Promise.resolve(42);
    }).then((result) => {
        console.log(result);
    }).catch(() => {
        console.log('Error');
    })