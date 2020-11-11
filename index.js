const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btnCep');
const resultadoCep = document.querySelector('.resultadoCep');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(cep) {

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(body => {
            let conteudo = body;
            rua.value = (conteudo.logradouro);
            bairro.value = (conteudo.bairro);
            cidade.value = (conteudo.localidade);
            uf.value = (conteudo.uf);
        });
}