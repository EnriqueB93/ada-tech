const user = {
  name: "ENrique joSE BLanco BASTARDO",
  email: "ejBB@email.com",
  age: 31,
  address: "rua XXX",
};

for (const key in user) {
  if (key === "name") {
    const names = user[key].split(" ");
    user[key] = "";

    for (const name of names) {
      const nameMin = name.toLowerCase();
      const [firthLetter, ...resto] = nameMin;

      // biome-ignore lint/style/useTemplate: <explanation>
      user[key] = user[key] + " " + firthLetter.toUpperCase() + resto.join("");
      user[key] = user[key].trim();
    }
  }

  // aqui decimos que si key es igual a "name", tenemos una constate names la se comvierte a el valor de la propiedad name de user, que es user[key] en un array con split()...
  // con for of decimos que name de names, guardar en nameMin en minuscula hiciendo un toLowerCase() en name...
  //desestructuramos nameMin que el name en minusculas y decimo que firthLetter en la primera letar de name y ...resto es el resto del name...
  //nota ... es igual resto de algo que se desestructuro...
  //luego decimos que user[key] es iguala " string vacia" para atribuir un nuevo valor a name de user con un estilo capitalice...
  //decimos que user[key] va a es igual el mismo que en este momento es "" mas espacios entre names mas firthletter que la primera letra de name se covierte en mayucula con toUpperCase() mas el resto de name que lo unimos nuevamente como string con join()...
  //para filaizar decimos nuevamente que user[key] va a ser igual a el mismo pero uasos el metodo trim() para eliminar espacio indevidos en name..

  // en split() y en join() colocomos "" dentro del parentesis para aya o no espacios entre las strings...

  if (key === "email") {
    user[key] = user[key].toLowerCase();
  }
}

console.log(user);

// const user = {
//   name: "ENrique joSE BLanco BASTARDO",
//   email: "ejBB@email.com",
//   age: 31,
//   address: "rua XXX",
// };

// // Recorremos las propiedades del objeto user
// for (const key in user) {
//   // Si la propiedad es "name"
//   if (key === "name") {
//     // Convertimos el valor del nombre en un array de palabras
//     const names = user[key].split(" ");
//     user[key] = ""; // Reiniciamos el valor para formatearlo correctamente

//     // Recorremos cada palabra del array
//     for (const name of names) {
//       // Convertimos la palabra a minúsculas
//       const nameMin = name.toLowerCase();
//       // Desestructuramos la primera letra y el resto de la palabra
//       const [firstLetter, ...rest] = nameMin;

//       // Formateamos la palabra en estilo Capitalize y la agregamos al nombre final
//       user[key] += " " + firstLetter.toUpperCase() + rest.join("");
//       user[key] = user[key].trim(); // Eliminamos espacios extra
//     }
//   }

//   // Si la propiedad es "email", convertimos el valor a minúsculas
//   if (key === "email") {
//     user[key] = user[key].toLowerCase();
//   }
// }

// console.log(user);

// // solucion chatGpt

// const user = {
//   name: "ENrique joSE BLanco BASTARDO",
//   email: "ejBB@email.com",
//   age: 31,
//   address: "rua XXX",
// };

// // Formatear el nombre
// user.name = user.name
//   .split(" ")
//   .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
//   .join(" ");

// // Formatear el email
// user.email = user.email.toLowerCase();

// console.log(user);
