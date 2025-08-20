// declarando variaveis (constantes)

const x = 10;
const y = "gabriel";
const z = 2;

const verdadeiro = true;
const falso = false;
const nulo = null;



// testando se o usuario digitou o valor correto
if (typeof y == Number)
{
console.log(x+y);
} else {
    console.log(x+z);
}

// operações basicas

const a = 4;
const b = 5;

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

// resto da divisão

const resto = a % b;

console.log(resto);

// operadores de comparação

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);

// operadores lógicos

console.log(a < b && a > b);
console.log(a < b || a > b);
console.log(!(a < b || a > b));

// strings

let nome = 'gabriel';
let sobrenome = 'mil';
let idade = 18;

// let frase = "meu nome é " + nome + " " + sobrenome + " e minha idade é " + idade + " anos"; 
let frase = `meu nome é ${nome} ${sobrenome} e minha idade é ${idade} anos`; 

console.log(frase);

// funções string

const s = "olá mundo";

console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(4, 9));
console.log(s.split(" "));

// vetor com string

const g = "gabriel mil homens brandao de moraes"
let gg = g.split(" ");

console.log(gg);

// vetores

let vetor = ["A", 10, "oi", 1.5, true];
let numeros = [1, 2, 3, 4, 5];
let frutas = ["laranjas", "bananas", "morangos", "abacaxis", "mangas"];
console.log(frutas);

// adicionar valor no vetor frutas

frutas[5] = "melancias";
console.log(frutas);

// alterar o valor de um elemento no vetor frutas

frutas[2] = "limôes";
console.log(frutas);

// adicionar valor no final do vetor

frutas.push("maçãs");
console.log(frutas);

// adicionar valor no começo do vetor

frutas.unshift("tangerinas");
console.log(frutas);

// remove o ultimo elemento

let fruta_removida = frutas.pop();
console.log(frutas);

console.log(fruta_removida);

// remove o primeiro elemento

let fruta_removida_2 = frutas.shift();
console.log(frutas);

console.log(fruta_removida_2);

// achar e retornar um elemento no vetor

let idx = frutas.indexOf("bananas");
console.log(idx);

// descobrir se a variavel é vetor

console.log(Array.isArray(frutas));

console.log(Array.isArray(idx));