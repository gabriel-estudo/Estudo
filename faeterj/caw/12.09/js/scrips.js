function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirme_senha = document.getElementById("confirme_senha");

    if(nome.value == '' || email.value == '' || senha.value == '' || confirme_senha.value == '')
    {
        alert("preencha todos os campos do formulario");
    }

}