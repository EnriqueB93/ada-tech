// forma poco escalable para guardar datos tendriamos muchas variables
// const name = "enrique blanco";
// const email = "ejBB@email.com";
// const age = 31;
// const address = "rua XXX";

// forma escalabre creamos un objeto con muchas propiedes
const user = {
  name: "enrique blanco",
  email: "ejBB@email.com",
  age: 31,
  address: "rua XXX",
};

user.male = true;
user.femenine = false;
console.log(user.femenine);

// operador numero visual para numeros con muchos bit

user.salario = 1_000_000_000;
console.log(user.salario);
