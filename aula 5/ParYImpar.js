const numbers = [1, 33, 52, 46, 7, 545, 548, 5, 12, 14];
const numberPar = [];
const numberImpar = [];

let i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    numberPar.push(numbers[i]);
  } else {
    numberImpar.push(numbers[i]);
  }

  i += 1;
}
// El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

console.log(`numeros pares: ${numberPar}`);
console.log(`numeros impares: ${numberImpar}`);
