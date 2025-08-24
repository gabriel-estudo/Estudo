// eventos
// titulo.addEventListener(evento, funçãoDeRetorno)

// funções

const titulo = document.getElementById("titulo");

function imprimirTitulo() {
    console.log(titulo);
}

function botaoFoiClicado(evento) {
    evento.preventDefault();
    document.getElementById("meu-formulario").style.background = "red";
    document.querySelector("body").style.background = "green";
    document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h1>Alterado</h1>";
};

const inputNome = document.querySelector("#nome");

inputNome.addEventListener("input", (e) => {
    console.log(inputNome.value);
    document.querySelector(".container").append(inputNome.value)
});
// adicionando eventos

titulo.addEventListener("click", imprimirTitulo);

const botao = document.querySelector(".botao");

botao.addEventListener("click", botaoFoiClicado);

//document.getElementById("nome").addEventListener("click", function(){
//    alert("clicou no input nome");
//});
//document.getElementById("nome").addEventListener("change", function(){
//    alert("alterou o input nome");
//});
//document.getElementById("nome").addEventListener("blur", () => {
 //   alert("saiu do input nome");
//});