
const containerComprar = document.querySelector('.container__comprar');
const btnComprar = document.querySelector('[data-btn-comprar]');
const table = document.querySelector('table');
const form = document.querySelector('form');
const buttons = document.querySelector('.buttons');

btnComprar.addEventListener('click', finalizarCompra);

function finalizarCompra(evento) {



    form.style.display = "none";
    table.style.display = "none";

    buttons.style.display = "flex";
    table.style.display = "block";
    containerComprar.classList.add('container__comprar--extends');

}

const btnVoltar = document.querySelector('[data-btn-voltar]');

btnVoltar.addEventListener('click', fazerNovaCompra);

function fazerNovaCompra() {

    form.style.display = "none";
    table.style.display = "none";
    buttons.style.display = "none";

    form.style.display = "block";
    containerComprar.classList.remove('container__comprar--extends');

}

function calcularPrecoViagem() {


}