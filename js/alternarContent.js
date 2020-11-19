// Toggle content
const contentsAll = document.querySelectorAll('[data-content]');
const links = document.querySelectorAll('[data-link]');

const body = document.querySelector('body');
const mascara = document.querySelector('#mascara');

links.forEach(link => {
    link.addEventListener('click', alternarContent);
})

function alternarContent(evento) {

    esconderContent();
    deselecionarLinks();

    aparecerContentSelecionado(1);
    selecionarLink(links[0]);

    if (evento) {
        linkSelecionado = evento.target;
        contentSelecionado = evento.target.parentNode.dataset.link;

        esconderContent();
        deselecionarLinks();

        aparecerContentSelecionado(contentSelecionado);
        selecionarLink(linkSelecionado);
    }
}

function esconderContent() {

    setTimeout(() => {

        // Esconder todos os contents
        contentsAll.forEach(content => {
            content.classList.add('desativado');
            content.classList.remove('ativo');
        })
    }, 1000);
}

function aparecerContentSelecionado(selecionado) {

    // circle em 3000px, dps de 0.8s fica 0px, dps fica novamente com 3000px dps de 1s
    body.style.clipPath = "circle(3000px at center)";
    body.style.transition = "0.8s";
    body.style.clipPath = "circle(0px at center)";

    setTimeout(function () {
        body.style.clipPath = "circle(3000px at center)";
        // mascara.style.backgroundColor = ""

    }, 1000);

    setTimeout(() => {

        // Abrir content selecionado
        contentsAll[Number(selecionado) - 1].classList.remove('desativado');
        contentsAll[Number(selecionado) - 1].classList.add('ativo');
    }, 1000);

}

function deselecionarLinks() {

    links.forEach(link => {
        link.classList.remove('ativo');
    })
}

function selecionarLink(selecionado) {

    selecionado.classList.add('ativo');
}

alternarContent();