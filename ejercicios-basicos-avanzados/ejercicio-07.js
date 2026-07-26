/*
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
*/ 

function greaterNumber(numberOne , numberTwo) {
  // Completar código
  if(numberOne<numberTwo){
    console.log(numberTwo)
  }else if(numberOne>numberTwo){
    console.log(numberOne)
  }else{
    console.log("Los números son iguales, dame otra variante distinta")
  }
}
greaterNumber(5,8)
greaterNumber(2.56, 1.45)
greaterNumber(2,2)