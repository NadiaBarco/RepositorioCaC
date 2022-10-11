//funcion
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Nadia!!";



// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = [1,3,4,6];

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;


// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// document.write(nuevaString.concat(nuevoNum[1]),nuevoBool,nuevoModulo);



//str=prompt("ingrese un numero")

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
        if( str<0 || str ==0 ){
      document.write(`El numero ${str} pertenece al cuerpo de los enteros` + "</br>");
    } else{
      document.write(`El numero ${str} pertenece a los naturales`+ "</br>");
    }
}

devolverString(Number(prompt("Ingrese un numero")))

/*
const devolverString = str => document.write(str+ "</br>"); devolverString("Hola Codo a Codo")
*/ 


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
    let sumaxy= (x + y)
    document.write(`La suma de ${x} e ${y} es ${sumaxy}`+ "</br>")
}

suma(Number(prompt("x")),Number(prompt("y")))


/**
const sumar=(x,y)=>{document.write((x+y)+ "</br>")
suma(10,10)
 */



function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  let restaxy=(x-y)
  document.write(`La resta de ${x} y ${y} es ${restaxy}`+ "</br>")
}
resta(2,5);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  document.write((x*y)+"</br>")
}
multiplica(2,9)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

}

const sonIguales=(x, y)=> {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  document.write((x===y)+ "</br>")
}
sonIguales(30,20) 


const tienenMismaLongitud=(str1, str2)=> {
  document.write((str1.length===str2.length)+ "</br>")
  }
  tienenMismaLongitud("pepe", "wpepe")

const palabrasIg=(t,h)=>{
  if (t.length == h.length){
    document.write("Misma cant. de letras")
  }else{
    document.write(`${t} es diferente de ${h}`+ "</br>")
  }
}

palabrasIg("pepe", "elpepe")




const menosQueNoventa=(num)=> {
    document.write((num<90)+"</br>")

}
menosQueNoventa(89)

const mayorQueCincuenta=(num1)=> {
  document.write((num1>50)+"</br>")
  
}

const obtenerResto=(x, y)=> {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  document.write((x % y) + "</br>")

}

const esPar=(numero)=> {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero%2 ===0){
    document.write("es par")
  }else{
    document.write("no es par" + "</br>")
  }

}

esPar(23)

const esImpar=(num2)=> {
  
  document.write(((num2%2)===!0)+ "</br>")

}
esImpar(3)

const elevarAlCuadrado=(cuadn)=> {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  document.write((cuadn)*(cuadn), "</br>")

}

elevarAlCuadrado(12)

const elevarAlCubo=(cubon)=> {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
    document.write((Math.pow(cubon,3))+ "</br>")
}
elevarAlCubo(2)

const elevar=(num, exponent)=> {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  document.write((Math.pow(num, exponent))+"</br>")

}
elevar(2,5)

const redondearNumero=(num)=> {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  document.write((Math.round(num))+"</br>")

}
redondearNumero(3.14159)

const redondearHaciaArriba=(num)=> {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
    document.write((Math.ceil(num))+ "</br>")
}
redondearHaciaArriba(2.71828)

const numeroRandom=()=> {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    document.write((Math.random(0,1))+ "</br>")
}
numeroRandom()

const esPositivo=(numero) => {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
    if(numero > 0){
      document.write("Es positivo" + "</br>")
    }else if (numero < 0){
      document.write("Es falso" + "</br>")
    } else{
      document.write(False)
    }
}
esPositivo(1)

const esPositivo2 = numero => numero === 0? document.write(false + "</br>"):
numero>0? document.write(true + "</br>"):
 document.write("es"+false+"</br>")
esPositivo2(-10)

const agregarSimboloExclamacion = str=> {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
document.write(`${str} !` + "</br>")
};
agregarSimboloExclamacion("Hola cac")

const combinarNombres=(nombre, apellido)=> {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  nombre=["Ana","Juan","Ester","Nadia","Luis","Martin","Jimena","Ariel","Andrea","Gustavo","Ezequiel","Abraham","Abril"]
  apellido=["Abrahams","Abramson","Adamson","Ainsworth","Albertson","Aniston","Battle","Beckett", "Beckham","Black","Bramson", "Brown","Bullock","Burrell","Bush","Clinton","Cocks","Cook", "Cox","Cranston","Derricks","Disney","Barco"]
  document.write(`Nombre y apellido generado: ${nombre[5]} ${apellido[12]}`)
}
combinarNombres(5,12)



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  

}
esVocal(y)
