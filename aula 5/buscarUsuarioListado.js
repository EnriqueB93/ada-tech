const users = [
  "estafani",
  "enrique",
  "matias",
  "juliette",
  "luis",
  "yanuska",
  "juan",
  "cristian",
];

let i = 0;

// solucioin 1 recomenda mas solo retonar 1 usuario buscado segun la letra inicial

// let userFound = false;

while (!userFound) {
  const userActual = users[i];
  if (userActual.startsWith("e")) {
    userFound = true;
    console.log(`ser found: ${userActual}`);
  }
  if (i === users.length) {
    userFound = true;
    console.log("user not found");
  }
  i += 1;
}

// solucioin 2  => no recomendada por tener mas condiciones en while y es mas dificil de leer

// let userFound = false;
// let revisedList = false;

// while (!userFound && !revisedList) {
//   const userActual = users[i];
//   if (userActual.startsWith("e")) {
//     userFound = true;
//     console.log(`ser found: ${userActual}`);
//   }
//   if (i === users.length) {
//     revisedList = true;
//     console.log("user not found");
//   }
//   i += 1;
// }

// mi solucion   retonar todo los usuario buscado segun la letra inicial

// while (i < users.length) {
//   const userFound = users[i];
//   if (userFound.startsWith("j")) {
//     console.log(`user found: ${userFound}`);
//   }

//   i += 1;

//   if (!userFound) {
//     console.log("user no found");
//   }
// }

// solucion corregida por chatGpt

// while (i < users.length) {
//   const userFound = users[i];
//   if (userFound.startsWith("j")) {
//     console.log(`user found: ${userFound}`);
//     break;
//   }
//   i++;
// }

// if (i === users.length) {
//   console.log("user not found");
// }

//solucion con break

// while (i < users.length) {
//   const userFound = users[i];
//   if (userFound.startsWith("k")) {
//     console.log(`user found: ${userFound}`);
//     break;
//   }
//   i++;
//   if (i === users.length) {
//     console.log("user not found");
//   }
// }
