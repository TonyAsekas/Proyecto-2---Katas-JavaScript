const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
    let palabraMasLarga=""

    for (const palabra of stringList) {
      if(palabra.length > palabraMasLarga.length){
        palabraMasLarga = palabra
      }
    }
console.log(palabraMasLarga)
}

findLongestWord(avengers)