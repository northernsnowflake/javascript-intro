console.log(" -------- Throwing exceptions ----------- ");

function criticalCode(){
    throw "throwing an exception"
}

function logError(theException){
    console.log(theException)
}

//throw 'myException';
//throw true;

//Try_catch
console.log(" ----------- Try .. Catch -----------")
try {
    criticalCode();
} catch(ex){
    console.log(" ---------- Got an error -----------");
    logError(ex);
}

// Try...Catch...

try {
    throw "Throwing exception right away"
} catch(ex){
    console.log("Got an error");
    logError(ex);
}
// Try...Catch...Finally
try {
    criticalCode();
} catch(ex){
    console.log(" **** Got an error ****");
    logError(ex);
} finally{
    console.log('that will always run')
}