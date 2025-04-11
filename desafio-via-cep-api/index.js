let cep = document.querySelector('#cep');
let bairro = document.querySelector('#bairro');
let rua = document.querySelector('#logradouro');
let cidade = document.querySelector('#localidade');
let uf = document.querySelector('#uf');

/* funcao que valida se o cep tem 8 digitos (expressão regular) */
const validaCep = (cep) => /^[0-9]{8}$/.test(cep);

const preencherForm = (endereco) => {
    rua.value = endereco.logradouro;
    bairro.value = endereco.bairro;
    cidade.value = endereco.localidade;
    uf.value = endereco.uf;
}


const buscarCep = async () => {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if (validaCep(cep.value)) {

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

    alert('O CEP informado deve possuir 8 dígitos.');
    cep.value = '';

}

document.querySelector('#cep')
    .addEventListener('focusout', buscarCep);
