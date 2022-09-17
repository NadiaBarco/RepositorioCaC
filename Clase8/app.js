/*switch




let d ="cualquier"
alert(`${d} nada`)
REVIASR DA ERROR
let semaforo = Number(prompt("Ingresa 1=rojo, 2=amarillo, 3=verde" ))

let nombre =prompt("Ingresa tu nombre")

switch(semaforo){
    case 1:
        document.write(`${nombre} semaforo en rojo no podes pasar`)
        break;
    
    case 2:
        document.write(`${nombre} semaforo en amarrillo Precaucion`)
        break;

    case 3:
        document.write(`${nombre} semaforo en verde Pasa`)
        break;

    default:
        document.write("No pusiste nada")
}

*/ 

let nombre= prompt("nombre").toLocaleLowerCase()

let recomendacion= prompt("ingresa: serie , pelicula, libro").toLocaleLowerCase()

switch(recomendacion){
    case "serie":
        document.write(`${nombre}te coimienfo the boys`)
        break;

    case "pelicula":
        document.write(`${nombre} te recomiendo lala`)
        break;

    default:
        Document.write("mal")
}


let numero=1
while (numero <10){
    numero++;
    console.log(numero)
}