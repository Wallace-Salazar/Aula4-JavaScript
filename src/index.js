let a = 2;
let b = 1;
a = -b;
a -= b;
console.log(a);

//a ordem dos operadores altera os fatores
let frase = "Gatos são os melhores amigos dos humanos";
frase = frase.replace("melhores", "piores");
console.log(frase);

//if else
let nome = "Dyana";
if (nome.length < 6) {
  console.log("seu nome é menor que 6 letras");
} else {
  console.log("seu nome é maior que 6 letras");
}

//propriedade de string
let name = "Luanna";
if (name.substring(0, 1) === "L") {
  console.log("verdade");
} else {
  console.log("mentira");
}
console.log(nome.substring(0, 5));

let namee = "Joan";
if (namee.length < 6 || nome[0] === "L") {
  console.log("verdadeiro");
} else {
  console.log("false");
}

//ESTRUTURA BASICA DE UMA FUNÇÃO
/*function nomeDaFunção()
{tarefa}*/

function oi() {
  console.log("Ola, Mundo!");
}
oi();

function quem(nome, sobrenome) {
  console.log(`meu nome é ${nome} ${sobrenome}`);
}
quem("Thais", "D Avila");

// function com return

function double(number) {
  return number * 2;
}
console.log(double(5));

function soma(x, y) {
  return x + y;
}
let result = soma(5, 6);
console.log(result);

function aula() {
  console.log("Lógica é dificil!");
}
aula();
function aluno(nome) {
  console.log(`O aluno se chama ${nome}`);
}
aluno("Ricardo");
