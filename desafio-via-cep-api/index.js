let bairro = document.querySelector('#bairro');
let rua = document.querySelector('#logradouro');
let cidade = document.querySelector('#localidade');
let uf = document.querySelector('#uf');

const preencherForm = (endereco) => {
    rua.value = endereco.logradouro;
    bairro.value = endereco.bairro;
    cidade.value = endereco.localidade;
    uf.value = endereco.uf;
}

const buscarCep = async () => {
    const cep = document.querySelector('#cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherForm(endereco);
    console.log(endereco);
}

document.querySelector('#cep')
    .addEventListener('focusout', buscarCep);
