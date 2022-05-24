
  /*desaparece el div de la portada del index cuando se despliega el menu en dispositivos pequenios*/
  function verDivPresentacion() {
    var presentacion = document.getElementById("div_presentacion__index");

    if (presentacion.style.display === "none") {
      presentacion.style.display = "block";
    } else {
        presentacion.style.display = "none";
    }
}

/*flecha que hace scroll en pagina empresa */

function bajar() {

const element = document.getElementById("texto_empresa");
element.scrollIntoView(false);
}