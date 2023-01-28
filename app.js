const menuClick = document.querySelector("#menu__header");
const menuMostrar = document.querySelector(".contenedor__menu__abierto--movil");

menuClick.addEventListener("click", function menuToggle(){
    menuMostrar.classList.toggle("activar__menu--movil")
});