let cep = document.querySelector('#cep');
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
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;


    const dados = await fetch(url);
    const endereco = await dados.json();

    /* verifica se possui a propriedade erro = true */
    const hasError = endereco.hasOwnProperty('erro');

    if (hasError) {
        alert('O CEP informado é inválido! Por favor, informe um CEP válido.');
        cep.value = '';
        return;
    }

    preencherForm(endereco);

}

document.querySelector('#cep')
    .addEventListener('focusout', buscarCep);
