// classes ES6

class pessoa {
    constructor(nome, sobrenome, dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = new Date(dataDeNascimento);
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa1 = new pessoa("Gabriel", "Mil", "01-23-07");
console.log(pessoa1);
console.log(pessoa1.obterNomeCompleto());

// herança

class cliente extends pessoa {
    constructor(nome, sobrenome, dataDeNascimento, saldo) {
        super(nome, sobrenome, dataDeNascimento);
        this.saldo = saldo;
    }
}

const cliente1 = new cliente("Gabriel", "Mil", "01-23-07", 1000);
console.log(cliente1);
console.log(cliente1.nome);
console.log(cliente1.sobrenome);
console.log(cliente1.dataDeNascimento);
console.log(cliente1.saldo);
console.log(cliente1.obterNomeCompleto());

/* 

class NOmeDaClasse {
    constructor(argumento1, argumento2) {
    this.propriedade1 = argumento1;
    this.propriedade2 = argumento2;
}
    metodo1() {
    bloco de codigo a ser executado
    }
}

*/
