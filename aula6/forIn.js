// forIn => loop focado en la iteracion de a objetos {}

const user = {
  name: "ENrique",
  email: "ejBB@email.com",
  age: 31,
  address: "rua XXX",
};

for (const key in user) {
  if (key === "name" || key === "email") {
    user[key] = user[key].toLowerCase();
  }
}
console.log(user);

//decimo si la propiedad de objeto es igual a "name" o "email" que son string. mi array[key] va ser igual a array[key].toLowerCase()
//toLowerCase() => convierte toda mi string en minuscula para normalizar datos en caso de que no esten formatados o padronizados
