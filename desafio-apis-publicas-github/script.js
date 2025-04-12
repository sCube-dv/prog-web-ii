document.getElementById('versiculoForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const livro = document.getElementById('livro').value.trim();
    const capitulo = document.getElementById('capitulo').value.trim();
    const versiculo = document.getElementById('versiculo').value.trim();

    const query = `${livro} ${capitulo}:${versiculo}`;
    const encodedQuery = encodeURIComponent(query); /* converte caracteres especiais para em códigos utf-8 compativeis com urls */
    const url = `https://bible-api.com/${encodedQuery}?translation=almeida`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
            document.getElementById('resultado').style.display = 'none';
            document.getElementById('erro').style.display = 'block';
        } else {
            document.getElementById('referencia').innerText = data.reference;
            document.getElementById('textoVersiculo').innerText = data.text;
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('erro').style.display = 'none';
        }
    } catch (err) {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('erro').style.display = 'block';
        console.error(err);
    }
});

const novaBusca = () => {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('erro').style.display = 'none';
}