const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let contador = 0
  for (const number of numberList) {
    contador += number
  }
  console.log(contador / numberList.length)
}
average(numbers)