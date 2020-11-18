const divDayHora = document.querySelector('[data-dayHora]');

const dataHora = new Date();
divDayHora.textContent = `Atualizado - Hora: ${dataHora.getHours()} : ${dataHora.getMinutes()} : ${dataHora.getSeconds()}  -  Dia: ${dataHora.getDate()} / ${dataHora.getMonth()} / ${dataHora.getFullYear()}`;


const containerComprar = document.querySelector('.container__comprar');
const btnComprar = document.querySelector('[data-btn-comprar]');
const table = document.querySelector('table');
const form = document.querySelector('form');
const buttons = document.querySelector('.buttons');

const tbody = document.querySelector('table tbody');

form.addEventListener('submit', finalizarCompra);

function finalizarCompra(evento) {

    evento.preventDefault();

    form.style.display = "none";
    table.style.display = "none";

    buttons.style.display = "flex";
    table.style.display = "block";
    containerComprar.classList.add('container__comprar--extends');

    const nome = evento.target.nome.value;
    const email = evento.target.email.value;
    const dataNascimento = evento.target.dataNasc.value;
    const quantidadeViajantes = evento.target.quantPessoas.value;
    const dataViagem = evento.target.dataViagem.value;
    const localHospedagem = evento.target.destino.value;

    const valores = calcularPrecoViagem(quantidadeViajantes);

    mostrarEmTela(nome, email, dataNascimento, quantidadeViajantes, dataViagem, localHospedagem, valores);


    limparCampos(evento);
    evento.target.nome.focus();
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

function calcularPrecoViagem(quantidadeViajantes) {

    const valorTotalHospedagem = quantidadeViajantes * 9500;
    const valorTotalTranslado = quantidadeViajantes * 33500;
    const valorFinalViagem = valorTotalHospedagem + valorTotalTranslado;
    return {
        valorFinalViagem,
        valorTotalHospedagem,
        valorTotalTranslado
    };
}

function mostrarEmTela(nome, email, dataNascimento, quantidadeViajantes, dataViagem, localHospedagem, { valorTotalHospedagem, valorTotalTranslado, valorFinalViagem }) {

    let tr = document.createElement('tr');

    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdDataNasc = document.createElement('td');
    let tdQuantPessoas = document.createElement('td');
    let tdDataViagem = document.createElement('td');
    let tdDestino = document.createElement('td');
    let tdValorTotalHospedagem = document.createElement('td');
    let tdValorTotalTranslado = document.createElement('td');
    let tdValorFinalViagem = document.createElement('td');

    tdNome.append(nome);
    tdEmail.append(email);
    tdDataNasc.append(dataNascimento);
    tdQuantPessoas.append(quantidadeViajantes);
    tdDataViagem.append(dataViagem);
    tdDestino.append(localHospedagem);
    tdValorTotalHospedagem.append(valorTotalHospedagem);
    tdValorTotalTranslado.append(valorTotalTranslado);
    tdValorFinalViagem.append(valorFinalViagem);

    tr.append(tdNome);
    tr.append(tdEmail);
    tr.append(tdDataNasc);
    tr.append(tdQuantPessoas);
    tr.append(tdDataViagem);
    tr.append(tdDestino);
    tr.append(tdValorTotalHospedagem);
    tr.append(tdValorTotalTranslado);
    tr.append(tdValorFinalViagem);

    tbody.append(tr);

}

function limparCampos(evento) {
    evento.target.nome.value = "";
    evento.target.email.value = "";
    evento.target.dataNasc.value = "";
    evento.target.quantPessoas.value = "";
    evento.target.dataViagem.value = "";
    evento.target.destino.value = "";
}