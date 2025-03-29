document.addEventListener("DOMContentLoaded", loadListFromLocalStorage);

const input = document.querySelector("input#input");
const button = document.querySelector("button");
const lista = document.querySelector("#lista");

button.addEventListener("click", (event) => {
    if (input.value.length <= 2) {
        // Lançar um alerta, caso o item tenha menos que 3 letras
        window.alert("O item deve ter, pelo menos, 3 letras.");
    } else {
        // Criando uma nova li para incluir o novo produto
        const novoItem = document.createElement("li");

        // Criando um input (que será do tipo checkbox) para marcar o produto se oproduto já foi comprado ou não
        const checkboxItem = document.createElement("input");

        // Criando uma span para inserir o texto do produto da lista
        const textItem = document.createElement("span");

        // Criando um botão para remover o produto da lista
        const removeButtonItem = document.createElement("button");

        // Adicionando o texto que o usuário digitou no texto do item (produto)
        textItem.textContent = input.value;

        // Adicionando um novo atributo ao checkbox
        checkboxItem.setAttribute("type", "checkbox");
        /* Adicionando event listener: Ao clicar no
        input[type="checkbox"] o produto será marcado (riscado)
        ou desmarcado (não riscado) como comprado
        */

        /* ===============SETATRIBUTE============== */
        /* checkboxItem.addEventListener("click", (event) => {
            if (event.target.checked) {
                textItem.setAttribute("class", "checked");
                checkboxItem.setAttribute("class", "checked");
            } else {
                textItem.removeAttribute("class");
                checkboxItem.removeAttribute("class");
            }
        }); */

        /* ================CLASSNAME=================== */

        /* checkboxItem.addEventListener("click", (event) => {
            if (event.target.checked) {
                textItem.className = "checked";
                checkboxItem.className = "checked";
            } else {
                textItem.className = "";
                checkboxItem.className = "";
            }
        }); */

        /* ================CLASSLIST=================== */

        /* checkboxItem.addEventListener("click", (event) => {
            if (event.target.checked) {
                textItem.classList.add("checked");
                checkboxItem.classList.add("checked");
            } else {
                textItem.classList.remove("checked");
                checkboxItem.classList.remove("checked");
            }
        }); */

        /* ==========UsandoToggle========== */
        checkboxItem.addEventListener("click", (event) => {
            if (event.target) {
                textItem.classList.toggle("checked");
                checkboxItem.classList.toggle("checked");
            }
        });

        // Adicionando texto "Remover" no botão
        removeButtonItem.textContent = "Remover";
        // Inserindo o checkbox, o texto e o botão de remover na li (novoItem)
        novoItem.insertAdjacentElement("beforeend", checkboxItem);
        novoItem.insertAdjacentElement("beforeend", textItem);
        novoItem.insertAdjacentElement("beforeend", removeButtonItem);
        // Adicionando a li (novoItem) na ul (lista)
        lista.appendChild(novoItem);

        /* SALVAR NO LOCALSTORAGE */
        saveOnLocalStorage(textItem.textContent);

        // Adicionando o event listener para remover o novo
        // item, caso haja um clique sobre ele
        // (veja a função removerItem abaixo)
        removeButtonItem.addEventListener("click", removerItem);
        // Limpando o conteúdo do input quando o item é adicionado
        input.value = "";
    }
});
// Função chamada quando o ocorre o evento de clique
// sobre um item
function removerItem(event) {
    lista.removeChild(event.target.parentElement);
}

/* Função para adicionar o item da lista ao localStorage */
function saveOnLocalStorage(item) {
    /* Adicionando o item da lista de compras ao localStorage 'shoppingList'  */

    let localStorageShoppingList = localStorage.getItem('shoppingList')

    let shoppingListStorage = JSON.parse(localStorageShoppingList || '[]')

    shoppingListStorage.push(item)

    localStorage.setItem('shoppingList', JSON.stringify(shoppingListStorage))
}

/* função para carregar os itens salvos no localStorage */
function loadListFromLocalStorage() {
    let localStorageShoppingList = localStorage.getItem('shoppingList')

    let shoppingListStorage = JSON.parse(localStorageShoppingList || '[]')

    shoppingListStorage.forEach(item => {
        // Criando uma nova li para incluir o novo produto
        const novoItem = document.createElement("li");

        // Criando um input (que será do tipo checkbox) para marcar o produto se oproduto já foi comprado ou não
        const checkboxItem = document.createElement("input");

        // Criando uma span para inserir o texto do produto da lista
        const textItem = document.createElement("span");

        // Criando um botão para remover o produto da lista
        const removeButtonItem = document.createElement("button");

        // Adicionando o texto que o usuário digitou no texto do item (produto)
        textItem.textContent = item;

        // Adicionando um novo atributo ao checkbox
        checkboxItem.setAttribute("type", "checkbox");

        // Adicionando texto "Remover" no botão
        removeButtonItem.textContent = "Remover";
        // Inserindo o checkbox, o texto e o botão de remover na li (novoItem)
        novoItem.insertAdjacentElement("beforeend", checkboxItem);
        novoItem.insertAdjacentElement("beforeend", textItem);
        novoItem.insertAdjacentElement("beforeend", removeButtonItem);
        // Adicionando a li (novoItem) na ul (lista)
        lista.appendChild(novoItem);

        checkboxItem.addEventListener("click", (event) => {
            if (event.target) {
                textItem.classList.toggle("checked");
                checkboxItem.classList.toggle("checked");
            }
        });

        removeButtonItem.addEventListener("click", removerItem);
        // Limpando o conteúdo do input quando o item é adicionado
        input.value = "";
    })
}
