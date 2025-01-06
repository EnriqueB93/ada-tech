import * as readline from "node:readline";

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptPromise = {
  question: (pregunta) =>
    new Promise((resolve, reject) => {
      try {
        prompt.question(pregunta, (respuesta) => resolve(respuesta));
      } catch (error) {
        reject(error);
      }
    }),
  close: () => prompt.close(),
};

async function askUser() {
  const numero = await promptPromise.question("cual es tu numero favorito?:");
  console.log(`el doble de tu numero es: ${Number.parseInt(numero) * 2}`);
  promptPromise.close();
}

askUser();

// prompt.question("cual es tu numero favorito:", (respuesta) => {
//   console.log(`el doble de tu numero es: ${Number.parseInt(respuesta) * 2}`);
//   10;
//   prompt.question("cual es tu color favorito:", (respuesta) => {
//     console.log(`el color ${respuesta} es un bonito color`);

//     prompt.close();
//   });
// // });
