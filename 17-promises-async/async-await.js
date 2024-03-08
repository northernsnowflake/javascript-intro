function promiseTimeout(ms){ //converts the promise into the async/await
    return new Promise((resolve, reject)=> {  
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation(){
    return 42;
}

async function run(){
    //logic
    console.log('Start');
    await promiseTimeout(1000); //required to stop during the program
    console.log('.');
    const response = await longRunningOperation();
    console.log(response);
    await promiseTimeout(1000);
    console.log('Stop');
}
run();