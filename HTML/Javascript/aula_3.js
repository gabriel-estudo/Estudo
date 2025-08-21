// funções de ordem maior

// for each

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero){
    console.log(numero);
}
) 

const letras = ["A", "B ", "C", "D", "E"];

letras.forEach(function (letra, indice) {
    console.log(`${indice}: ${letra}`);
}
)

const tarefas = [
    {
        id:1,
        texto: "trabalhar",
        completo: false,
    },
    {
        id:2,
        texto: "estudar",
        completo: false,
    },
    {
        id:3,
        texto: "limpar a casa",
        completo: true,
    }
]

tarefas.forEach(function (tarefa, indice, minhasTarefas)
{
    console.log(`${indice+1}: ${tarefa.texto}`);
    console.log(minhasTarefas);
}
) 

// map

const vetorDeTextosDasTarefas = tarefas.map(function (tarefa)
{
    return `Tarefa ${tarefa.id}: ${tarefa.texto}`;
}
);

console.log(vetorDeTextosDasTarefas);

// filter

const tarefa1 = tarefas.filter(function (tarefa) {
    return tarefa.id === 1;
}
)

console.log(tarefa1);

// reduce

const vetor = [1, 2, 3, 4];
const valorInicial = 0;

const soma = vetor.reduce(function (acumulador, elementoAtual){
    return acumulador + elementoAtual;
}, valorInicial);

console.log(soma);

/*

    valorInicial = 0
    acumulador = 0 [ 1, 2, 3, 4 ]
    0 + 1(elementoAtual) = 1
    1 + 2(elementoAtual) = 3
    3 + 3(elementoAtual) = 6
    6 + 4(elementoAtual) = 10
    acumulador = 10(soma)

*/

// programação orientada para objetos

const nome = "Gabriel";
const sobreNome = "Mil";
const dataDeNascimento = "23/01/2007";

const pessoaA = {
    nome: "Gabriel",
    sobreNome: "Mil",
    dataDeNascimento: new Date("01-23-07"),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobreNome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

const pessoaB = {
     nome: "Gabriel",
    sobreNome: "Mil",
    dataDeNascimento: new Date("01-23-07"),
     obterNomeCompleto() {
        return `${this.nome} ${this.sobreNome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

//console.log(pessoaA.nome);
//console.log(pessoaA.sobreNome);
console.log(pessoaA.obterNomeCompleto());
//console.log(pessoaA.dataDeNascimento.getFullYear());
console.log(pessoaA.obterAnoNascimento());
console.log(pessoaB.nome);
console.log(pessoaB.sobreNome);
console.log(pessoaB.obterNomeCompleto());
console.log(pessoaB.obterAnoNascimento());

// função construtora

function pessoa(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);
    this.amigos = [];
    this.obterAnoNascimento = function() {
        return this.dataDeNascimento.getFullYear();
    };
    this.obterNomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`;
    };
    this.adicionarAmigo = function (amigo) {

        if (!this.amigos.includes(amigo)) {
        this.amigos.push(amigo);
        amigo.amigos.push(this);
    };
    }
    this.selecionarAmigos = function() {
        return this.amigos.map(function (amigo) {
            return amigo.obterNomeCompleto();
        });
    }
}

// adicionar metodo na função construtora

pessoa.prototype.obterdiaDoNascimento = function() {
    return this.dataDeNascimento.getDay();
}

const pessoa1 = new pessoa("Gabriel", "Mil", "01-23-07");
const pessoa2 = new pessoa("Claudino", "Mil", "06-02-71");
const pessoa3 = new pessoa("Sabrine", "Brandão", "11-09-71");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.obterAnoNascimento());
console.log(pessoa2.obterAnoNascimento());
console.log(pessoa1.obterNomeCompleto());
console.log(pessoa2.obterNomeCompleto());
console.log(pessoa2.obterdiaDoNascimento());
pessoa1.adicionarAmigo(pessoa2);
pessoa1.adicionarAmigo(pessoa3);
console.log(`Amigos do ${pessoa1.nome}: `, pessoa1.selecionarAmigos());
console.log(`Amigos do ${pessoa2.nome}: `, pessoa2.selecionarAmigos());
console.log(`Amigos da- ${pessoa3.nome}: `, pessoa3.selecionarAmigos());

/* definindo um objeto

function objeto(argumento1, argumento2) {
    this.propriedade1 = argumento1;
    this.propriedade2 = argumento2;
}
    definindo um metodo de um objeto

    objeto.prototype.nomeDoMetodo = function () {
    // Bloco de código a ser executado
    }
*/

// classes