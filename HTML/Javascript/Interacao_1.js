document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("root").innerHTML = "minha primeira interação";

    let lista = ["Dark Fantasy", "Gorgeous", "Power", "Devil In A New Dress"];

    let listaHtml = '<ul class="cssul">';

    lista.forEach(function(dado){
        listaHtml += `<li class="cssli">${dado}</li>`;

    });

    listaHtml += '</ul>';

    let minhaLIsta = document.getElementById("lista");
    minhaLIsta.innerHTML = listaHtml;

setTimeout(() => {
  document.querySelector("ul").classList.remove("cssul");
}, 3000);

});

function apertar() {
    alert("apertado");
}
