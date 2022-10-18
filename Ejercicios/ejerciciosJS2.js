

const obtenerMayor=(x, y)=> {
    console.log(Math.max(x,y))
  
  }
  obtenerMayor(12,1)

  
  const mayoriaDeEdad=(edad)=> {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    if(edad>=18){
      console.log("Allowed")
    }else{
      console.log("Not allowed")
    }
  
  }
  mayoriaDeEdad(12)
    
  const conection=(status)=> {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.

    //IF TERNARIO
    console.log(status===1? "Online": status ===2?"Away":"Offline")

    //Mio
        if(status==1){
          console.log("Online")
        }else if (status===2){
          console.log("Away")
        }else console.log("Offline")
      }
      
  
  conection(6)

  
  
  
  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    if(idioma=="Aleman"){
      console.log(  "Guten Tag!")
    }else if (idioma=="Mnadario"){
      console.log( "Ni Hao!") 
    }else if( idioma=="Ingles"){
      console.log( "Hello")}
      else{
        console.log( "Hola!!")

      }

  }
  saludo("Aleman")

  const colors=(color)=> {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    switch(color) {
      case "Blue":
        console.log("This is blue")
        break;
      case "Red":
        console.log("This is red")
        break;
      case "Green":
        console.log("This is green")
        break;
      case "Otange":
        console.log("This is Orange")
        break;
      default:
        console.log("Console not found")
    }
  
  
  }
  colors("Green")
  
  const esDiezOCinco=(numero)=> {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    //OPCION 1
    console.log(numero===5? true:numero==10? true: false )
    //OPCION 2
    console.log(numero == 5|| numero ==10)
  }
  esDiezOCinco(4)



  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    console.log(numero<50 && numero>20 )
  
  }
  estaEnRango(22)
  
  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    console.log(numero==Math.floor(numero))
  }
  esEntero(0.3)
  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
let retorno=""
if(numero %3===0  ) retorno+="fizz";
if(numero%5===0) retorno+="buzz"
console.log(retorno||numero)

        //MIO
        //console.log((numero%3 === 0 && numero%5 === 0)? "fizzbuz":numero%3 === 0? "fizz":numero%5 ===0?"buzz":numero )
  }
  fizzBuzz(20)
  
  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    if(num1>num2 && num1>num3){
      console.log(`${num1} es mayor y positivo`)
    }else if(num1<0 ||num2<0 ||num3<0 ){
      console.log("Hay negtivos")
    }else if(num3>num1&&num3>num2){
      console.log(++num3)
      console.log(`${num3+1}`)
    }if(num1==0||num2==0||num3===0){
      console.log("Error")
    }else {console.log(false)}
  
  }
  operadoresLogicos(3,1000,100000)


  const esPrimo=(n)=> {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if(n==0 || n==1){
      console(`${n} no es primo`)
      return
    }
    for(let i=2; i< n ;i++){
        if(n%i ===0){
          console.log(false)
          return
        }
    }
  console.log(true)
  }
  esPrimo(2)
  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
  
  }
  
  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
  
  }
  
  function tieneTresDigitos(numero){
    //Leer un número entero y determinar si tiene 3 dígitos.
    //Escribe tu código aquí
  
  }
  
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
  
  }
  