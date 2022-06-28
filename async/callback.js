function hola(nombre, callback){
    setTimeout(()=>{
        console.log("Hola, " + nombre)
        callback();
    },1000)
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log("Adios, " + nombre)
        callback();
    }, 1000)
}
console.log("Iniciando...")
hola("Juan", function () {
    adios("Juan", function(){
        console.log("Terminando Proceso!");
    });
});
console.log("Terminando...")
