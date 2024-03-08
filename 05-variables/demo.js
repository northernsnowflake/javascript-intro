var hello = "Hello";

console.log(hello)
hello = "Hello World";
console.log(hello)

if(true){
    //let musí být v bloku, je to lepší použít, ptž to budu měnit v bloku
    let world = "Hello World"; //block, let musí být před použitím v bloku
    console.log(world) // musím pak world použít v bloku
}

const aaron = "Aaron"; // mělo by se to použít jen jedno
console.log(aaron);

//aaron = "Aaron Powell" // nepůjde, nepůjde měnit