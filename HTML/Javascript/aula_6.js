// document.getElementById

console.log(document.getElementById("meu-formulario"));
// document.getElementByTagName

console.log(document.getElementsByTagName("div"));
// document.GetElementsByClassName

console.log(document.getElementsByClassName("item"));
// document.querySelector

console.log(document.querySelector("#meu-formulario #nome"));
console.log(document.querySelector("#meu-formulario .botao"));
// document.querySelectorAll

const itens = document.querySelectorAll(".item");

itens.forEach((item) => console.log(item)); 


// manipulação do DOM

const ul = document.querySelector(".itens");
console.log(ul);

// remover um elemento

// ul.remove();

// remover o ultimo elemento filho

// ul.lastElementChild.remove();

// remover o primeiro elemento filho

// ul.firstElementChild.remove();

// alterar o conteudo do elemento

ul.firstElementChild.textContent = "ola";

ul.children[1].textContent = "oi";

ul.children[2].innerText = "oiii";

// definir o HTML interno de um elemento

ul.children[3].innerHTML = "<h1>oi</h1>";

// alterar os estilos de um elemento de forma dinâmica

const botao = document.querySelector(".botao");

botao.style.background = "red";
botao.style.color = "white";

// eventos


