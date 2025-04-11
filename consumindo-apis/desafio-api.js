function buscarIdade() {
    const nome = document.getElementById('nome').value;
    fetch(`https://api.agify.io?name=${nome}`)
        .then(r => r.json())
        .then(d => {
            document.getElementById('resultado').innerText =
                `O nome ${d.name} tem em média ${d.age} anos.`;
        });
}

Promise.all([
    fetch('https://api.agify.io?name=ana').then(r => r.json()),
    fetch('https://api.genderize.io?name=ana').then(r => r.json()),
    fetch('https://api.nationalize.io/?name=robson').then(r => r.json())
]).then(([idade, genero, nacionalidade]) => {
    console.log("Idade:", idade.age);
    console.log("Gênero:", genero.gender);
    console.log("Nacionalidade:", nacionalidade.country[0].country_id);
});