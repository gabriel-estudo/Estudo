const meuFormulario = document.querySelector("#meu-formulario");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const mensagem = document.querySelector(".mensagem");
const usuarios = document.querySelector("#usuarios");

meuFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(inputNome.value == "" || inputEmail.value == "") {
        mensagem.innerText = "é preciso preencher todos campos";
        mensagem.style.color = "red";
        setTimeout(() => mensagem.innerText = "", 3000);
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `${inputNome.value}: ${inputEmail.value}`;
    li.appendChild(span);
    usuarios.appendChild(li);  
    inputNome.value="";
    inputEmail.value="";
});