// OBJETOS

// declarando as propriedades do objeto pessoa

const pessoa = {
    nome: "Gabriel",
    sobrenome: "Mil",
    idade: 18,
    passatempos: ["musicas", "filmes"],
    endereco: {
        rua: "rua medina",
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
}

// incluindo propriedade no objeto 

pessoa.email = "milgabriel551@gmail.com";

// acessando uma propriedade

console.log(pessoa.nome);

// acessando um elemento de um vetor

console.log(pessoa.passatempos[0]);

// acessando uma propriedade de uma propriedade

console.log(pessoa.endereco.rua);

// vetor de objetos

const tarefas = [
    {
        id: 1,
        texto: "tirar o lixo", 
        completo: false
    },

    {
        id: 2,
        texto: "varrer o chão",
        completo: true
    }, 

    {
        id: 3,
        texto: "lavar o carro",
        completo: false
    }
];

// imprimindo o texto de cada tarefa

for(i=0; i<3; i++)
{
    console.log(tarefas[i].texto);
}

// formatar um objeto em JSON

console.log(JSON.stringify(tarefas));

// estruturas Condicionais

const x = 30;
const y = 10;

if (x > y)
{
    console.log("x é maior que y");
} else if (x < y) {
    console.log("x não é maior que y");
} else if (x == y) {
    console.log("x é igual a y");
}

const cor = "azul";

switch (cor)
{
    case "vermelho":
        console.log("a cor é vermelha");
        break;
    case "verde":
        console.log("a cor é verde");
        break;
    case "azul":
        console.log("a cor é azul");
        break;
    default:
        console.log("a cor não é vermelho, nem verde, nem azul");
        break;
}

// switch começa a partir do case que encontra

const contador = 2;

switch (contador) {
    case 5:
        console.log(5);
    case 4:
        console.log(4);
    case 3:
        console.log(3);
    case 2:
        console.log(2);
    case 1:
        console.log(1);
}

// switch com opções de case

const sexo = "m";

switch (sexo) {
    case "M":
    case "m":
        console.log("Masculino");
    case "F":
    case "f":
        console.log("Feminino");
    default:
        console.log("Inválido");
}

let numero;

if(cor == "vermelho") {
    numero = 10;
} else {
    numero = 20;
}

console.log(numero); 

// ou (operador ternário) | ?(if correto); :(else)

let numero2 = cor == "vermelho" ? 10 : 20;

console.log(numero2);

// estruturas de repetição

let contador2 = 0;

while(contador2 < 3) {
    console.log("miau");
    contador2 ++;
}

console.log(`numero da repetição é ${contador2}`);


// varrer vetor

for(i = 0; i < tarefas.length; i++)
{
    console.log(`tarefa ${i+1}: ${tarefas[i].texto}`);
}

// ou (para determinada tarefa do vetor tarefas execute:)

for(let tarefa of tarefas) 
{
    console.log(tarefa.texto);
}

// Funções


function dizerOla(nome = "nome_não_definido")
{
    return `Olá ${nome}`;
}

console.log(dizerOla());
console.log(dizerOla("Gabriel"));

//

function criar_nome_completo(nome, sobrenome, sexo)
{
    sexo = sexo.toUpperCase();

    if(sexo == "M")
    {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == "F") {
        return `Sra. ${nome} ${sobrenome}`;
    } else {
        return `${nome} ${sobrenome}`;
    }
}

const nomeCompleto = criar_nome_completo("Pedro", "Silva", "m");
const nomeCompleto2 = criar_nome_completo("Maria", "Souza", "F");
const nomeCompleto3 = criar_nome_completo("Gabriel", "Souza", "M");

console.log(dizerOla(nomeCompleto));
console.log(dizerOla(nomeCompleto2));
console.log(dizerOla(nomeCompleto3));

// função seta

const dizerOi = () => 
{
    if(1==1)
    {
    console.log("oi");
    } else {
        console.log("não oi");
    }
}

dizerOi();