function hola(nombre, callback) {
    setTimeout(() => {
        console.log("Hola, " + nombre)
        callback();
    }, 1000)
}

function hablar(callback) {
    setTimeout(() => {
        console.log("Blablabla")
        callback();
    }, 1000)
}

function conversacion(nombre, veces, callback) {
    if (veces >= 0){
        hablar(function () {
            conversacion(nombre, veces - 1, callback);
        })
    }else{
        adios(nombre, callback);
    }
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log("Adios, " + nombre)
        callback();
    }, 1000)
}
console.log("Iniciando...")
// hola("Juan", function () {
//     hablar(function(){
//         adios("Juan", function () {
//             console.log("Terminando Proceso!");
//         });
//     })
// });

hola("Carlos", function(nombre){
    conversacion(nombre, 3, function () {
        console.log("Proceso Terminado")
    })
})
console.log("Terminando...")
