let editandoIndex = null;

document.getElementById('formCliente').addEventListener('submit', function (e) {
    e.preventDefault();
    const cliente = obterDadosFormulario();

    if (validarFormulario(cliente)) {
        if (editandoIndex !== null) {
            atualizarCliente(cliente);
        } else {
            adicionarCliente(cliente);
        }

        limparFormulario();
        mostrarClientes();
    }
});

function obterDadosFormulario() {
    return {
        nome: document.getElementById('nome').value.trim(),
        data: document.getElementById('data').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        obs: document.getElementById('obs').value.trim(),
        email: document.getElementById('email').value.trim(),
    };
}

function validarFormulario(dados) {
    let valido = true;
    for (const campo in dados) {
        const input = document.getElementById(campo);
        if (!dados[campo]) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            valido = false;
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    }
    return valido;
}

function adicionarCliente(cliente) {
    const lista = obterListaClientes();
    lista.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(lista));
}

function atualizarCliente(cliente) {
    const lista = obterListaClientes();
    lista[editandoIndex] = cliente;
    localStorage.setItem('clientes', JSON.stringify(lista));
    editandoIndex = null;
}

function removerCliente(index) {
    const lista = obterListaClientes();
    lista.splice(index, 1);
    localStorage.setItem('clientes', JSON.stringify(lista));
    mostrarClientes();
}

function editarCliente(index) {
    const lista = obterListaClientes();
    const cliente = lista[index];
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('data').value = cliente.data;
    document.getElementById('estadoCivil').value = cliente.estadoCivil;
    document.getElementById('obs').value = cliente.obs;
    document.getElementById('email').value = cliente.email;
    editandoIndex = index;
}

function mostrarClientes() {
    const lista = obterListaClientes();
    const div = document.getElementById('listaClientes');
    div.innerHTML = '';
    lista.forEach((cliente, index) => {
        div.innerHTML += `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${cliente.nome}</h5>
              <p class="card-text">
                <strong>Nascimento:</strong> ${cliente.data}<br/>
                <strong>Estado civil:</strong> ${cliente.estadoCivil}<br/>
                <strong>Email:</strong> ${cliente.email}<br/>
                <strong>Observações:</strong> ${cliente.obs}<br/>
              </p>
              <button class="btn btn-warning btn-sm" onclick="editarCliente(${index})">Editar</button>
              <button class="btn btn-danger btn-sm ms-2" onclick="removerCliente(${index})">Remover</button>
            </div>
          </div>
        `;
    });
}

function limparFormulario() {
    document.getElementById('formCliente').reset();
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.classList.remove('valid', 'invalid');
    });
    editandoIndex = null;
}


function fecharFormulario() {
    limparFormulario();
}

/* retorna a lista de clientes armazenada no localStorage */
function obterListaClientes() {
    return JSON.parse(localStorage.getItem('clientes')) || [];
}

// Inicializa a lista ao carregar
mostrarClientes();