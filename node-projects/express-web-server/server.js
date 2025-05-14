// importando o express
const express = require("express");

// criando sua aplicação
const app = express();

// adicionando rotas de comunicação
app.get('/', (req, res) => {
    res.send('Lets Code Express!');
});

// executando a aplicação
const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));