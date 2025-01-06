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
let userFound = false;

// do {
//   const userActual = users[i];
//   if (userActual.startsWith("k")) {
//     userFound = true;
//     console.log(`ser found: ${userActual}`);
//   }

//   i += 1;

//   if (i === users.length) {
//     userFound = true;
//     console.log("user not found");
//   }
// } while (!userFound);

// solucion corregida

do {
  const userActual = users[i];
  // biome-ignore lint/complexity/useOptionalChain: <explanation>
  if (userActual && userActual.startsWith("j")) {
    userFound = true;
    console.log(`ser found: ${userActual}`);
  }

  i += 1;

  if (i >= users.length) {
    userFound = true;
    console.log("user not found");
  }
} while (!userFound);
