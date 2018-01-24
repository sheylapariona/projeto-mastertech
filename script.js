let titulo = document.querySelector('h1');
let texto = document.querySelector('p');


function mudarTitulo() {
  titulo.innerHTML = "Sua cidade";
  titulo.style.backgroundColor = "red";
  titulo.style.color = "white"
}

function mudarTexto() {
  texto.style.color = "white";
  texto.style.backgroundColor = "red";
}
