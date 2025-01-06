const age = 19;
const temCNH = false;

const puedeconducir = age > 18 && temCNH;

if (puedeconducir) {
  console.log("puede trabajar de uber");
} else {
  console.log("debe tener edad y experiencia como conductor ");
}

const candidato = puedeconducir ? "aprovado" : "lo siemto no fuiste aprovado";
console.log(candidato);
