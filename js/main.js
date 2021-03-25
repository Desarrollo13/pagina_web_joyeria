// con scrollHeight cubrimos toda la pagina
const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById("fondo");

// cada vez que el usuario haga scroll onscroll
window.onscroll = () => {
  const anchoFondo = (window.pageYOffset / altura) * 900;
  if (anchoFondo <= 100) {
    //   accedo al ancho del html
    fondo.style.width = anchoFondo + "%";
  }
};
