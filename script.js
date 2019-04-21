let menuHamburguer = document.querySelector('.menuHamburguer');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

menuHamburguer.onclick = function(){
    menu.classList.toggle('ativo');
    nav.classList.toggle('ativo');
    menuHamburguer.classList.toggle('ativo');
};