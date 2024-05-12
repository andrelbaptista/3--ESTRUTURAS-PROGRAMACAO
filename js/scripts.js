// variáveis
let nome = "André";
console.log(
  nome + " utilizando let , a qual permite alterar o valor da variável"
);
nome = "André Baptista";
console.log(nome + " o novo valor da variável nome alterada");

const sexo = "masculino";
console.log(
  sexo + " utilizando const , o qual não permite alterar o valor da variável"
);

// mais sobre variáveis
// let 2car = "inválido";
// const @sexo = "inválido";

let a = 10,
  b = 20,
  c = 30;
console.log(a, b, c, "declarando três variáveis juntas, não deve ser usado");

const nomecompleto = "André Baptista";
const nomeCompleto = "Zequinha";
console.log(
  nomecompleto,
  nomeCompleto + " nomes de variáveis são case sensitive"
);

let _teste = "ok";
const $teste = "ok";
console.log(
  _teste,
  $teste + "aceita _ e $ no início das variáveis e não aceita número e @"
);

// função prompt, não é muito usada, popis para o programa e não permite estilização
const sexo_inicial = prompt("Digite o seu sexo (M-masculino e F-feminino):");
console.log(`O seu sexo digitado é ${sexo_inicial}, seja bem vindo`);

// função alert, não é muito usada, popis para o programa e não permite estilização
alert("Testando");
const numero = 10;
alert(`O número digitado é ${numero}`);

// objeto Math e alguns métodos
const maior = Math.max(5, 1, 6, 7, 8, 20);
console.log(
  `o Médodo max vais retornar o maior valor da série 5, 1, 6 ,7 ,8, 20, o qual é ${maior}`
);

const pra_Baixo = Math.floor(4.15);
console.log(
  `o Médodo floor arredonda o número 5.14 pra baixo, o qual é ${pra_Baixo}`
);

const pra_Cima = Math.ceil(4.15);
console.log(
  `o Médodo ceil arredonda o número 5.14 pra cima, o qual é ${pra_Cima}`
);

// objeto console e seus métodos
const tipo_Aviso = "OUTPUT!";
console.log(`o Médodo log permite escrever na console, como: ${tipo_Aviso}`);
console.error(
  `o Médodo error permite escrever na console, identificando como: ERRO!.`
);
console.warn(
  `o Médodo warn permite escrever na console, identificando como: AVISO!.`
);

//   estrutura de controle if, else e if else
const val_1 = 10;
const val_2 = 20;
if (val_1 > val_2) {
  console.error("Resultado correto!");
} else if (Math.max(val_1, val_2) === val_1) {
  console.warn("Continua errado!");
} else {
  console.log("Esta tudo certo!");
}

// estruturas de repetição while e do while, pouco utilizadas
let i = 0;
while (i < 10) {
  if (i < 3) {
    console.log(`Contando ${i}`);
  } else if (i < 5) {
    console.warn(`Contando ${i}`);
  } else {
    console.error(`Contando ${i}`);
  }
  i = i + 1;
}

i = 0;
while (i < 5) {
  console.log(`repetindo ${i}`);
  i++;
}

i = 10;

do {
  console.log(`repetindo ${i}`);
  i--;
} while (i > 0);
