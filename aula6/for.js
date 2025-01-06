// for y forOf => loop focado a la iteracion de arrays

const numbers = [2, 51, 4, 8, 4, 84, 1];

//codigo imperativo  => codigo mas legible para maquina

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// console.log("print while \n");
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

// codigo declartivo => codigo mas legible para el hombre, mejor manutencion.

console.log("print forOf \n");

for (const number of numbers) {
  console.log(number);
}
