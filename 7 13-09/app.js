/*ARRAY - arreglo - matriz 
Puedo guardar varios datos
*/


let instrumentos= ["bongo","guitarra","bateria", "flauta",1,2,true]

document.write(`Hay ${instrumentos.length} elementos en tu string `)
document.write(instrumentos)

/* function sumar(num1, num2){
    document.write(num1+num2)

}
sumar(Number(prompt("Ingrese el primer numero")), Number(prompt("Ingrese el segundo numero")))

*/
//function flecha - arrow function

/* const sumar=( num1,num2) => {
    document.write(num1+num2)
}

sumar(Number(prompt("numero 1")), Number(prompt("numero2"))) */

/* const sumar= num1 => //sin parentesis - sin llaves
    document.write(num1+30)

sumar(7) */

function saludar (nombre, apellido, edad){
    document.write(`Hola, ${nombre} ${apellido} tu edad es ${edad}`)
}
saludar(prompt("Ingrese su nombre"),prompt("Ingrese su apellido"),Number(prompt("Ingrese su edad")))


//Condicionales IF - ELSE

if (10<30){
    document.write("es mayor")
}else{
    document.wrirte("es menor")
}


function esMayor (nombre,edad){
    if (edad>=18){
        document.write(`${nombre} sos mayor tenes ${edad}`)
    }else{
        document.write("No podes manejar")
    }
}

esMayor (prompt("decime tu nombre"), Number(prompt("edad")))