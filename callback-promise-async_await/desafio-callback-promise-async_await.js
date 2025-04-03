/* base de dados */
const alunos = [
    { id: 1, nome: 'Ana', nota: 8.5 },
    { id: 2, nome: 'Bruno', nota: 7.2 },
    { id: 3, nome: 'Carla', nota: 9.0 }
]

console.log('base de dados');
console.log(alunos);

/* 
## Exercício Proposto

Implemente a consulta de notas de alunos de três formas diferentes:

- Usando callback
- Usando Promise
- Usando async/await

Teste com os seguintes IDs: 1, 2, 3 e um ID inexistente (4). 
*/


/* 

## Exercício Proposto

Tarefas
/* ----------------------------------------------------------------------- */
/* 
[ok] 1. Implemente a função consultarNotaCallback(id, callback) utilizando setTimeout para simular o tempo de resposta (2 segundos). 

*/
// definindo a funcao callback
/* const callback = (n) => console.log(`[Callback] A nota do(a) aluno(a) ${n.nome} com id: ${n.id} é ${n.nota}`); */
// calback com tratamento de erros
const callback = (err, a) => {
    a ? console.log(`[Callback] A nota do(a) aluno(a) ${a.nome} com id: ${a.id} é ${a.nota}`) : console.error(err);
}
// definindo a funcao assincrona
const consultarNotaCallback = (id, callback) => {
    /* usando o setTimeout para simular um tempo de resposta de 2s */
    setTimeout(() => {
        const nota = alunos.find(n => n.id === id);
        nota ? callback(null, nota) : callback(`[Callback Erro] Aluno com ID:${id} inexistente`, null);
    }, 2000);
}

// testando a funcao assincrona com callback
// consultarNotaCallback(3, callback);

/* 
/* ----------------------------------------------------------------------- */
/*
[ok] 2. Reimplemente a mesma lógica usando Promises, com a função consultarNotaPromise(id).
*/

// definindo a funcao com promise
const consultarNotaPromise = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const notaPromise = alunos.find(n => n.id === id);
            notaPromise ? resolve(notaPromise) : reject(`Aluno com o id informado [id:${id}] inexistente`);
        }, 2000);
    });
}

// testando a funcao assincrona com promise
/* consultarNotaPromise(4)
    .then(nt => {
        console.log(`[Promise] A nota do aluno ${nt.nome} com id: ${nt.id} é ${nt.nota}`);
    })
    .catch(err => {
        console.error('[Promise Erro] ', err);
    }); 
*/


/* 
/* ----------------------------------------------------------------------- */
/*
[ok] 3. Crie uma função exibirNota(id) que utilize async/await para aguardar a resposta da consultarNotaPromise.
*/


// definindo funcao async/await com arrow function usando try/catch
const exibirNotaAsyncArrow = async (id) => {
    try {
        const notaAsyncAwait = await consultarNotaPromise(id);
        console.log(`[Async/Await Arrow Func] A nota do aluno ${notaAsyncAwait.nome} com ID:${notaAsyncAwait.id} é ${notaAsyncAwait.nota}`);
    } catch (erro) {
        console.error(`[Async/Await Arrow Func Erro] ${erro}`);
    }
}

// testando a funcao
// exibirNotaAsyncArrow(3);


/* ----------------------------------------------------------------------- */
/*
[ok] 4. Trate corretamente os casos em que o aluno não for encontrado, nas três versões.
*/
/* ----------------------------------------------------------------------- */
/*
5. Teste as funções usando diferentes valores de id (ex: 1, 2, 4).
*/

/* testando as funções com diferentes valores de id */

/* callback */
consultarNotaCallback(1, callback);
consultarNotaCallback(2, callback);
consultarNotaCallback(4, callback);

/* promise */
consultarNotaPromise(2)
    .then(nt => {
        console.log(`[Promise] A nota do aluno ${nt.nome} com id: ${nt.id} é ${nt.nota}`);
    })
    .catch(err => {
        console.error('[Promise Erro] ', err);
    });

consultarNotaPromise(3)
    .then(nt => {
        console.log(`[Promise] A nota do aluno ${nt.nome} com id: ${nt.id} é ${nt.nota}`);
    })
    .catch(err => {
        console.error('[Promise Erro] ', err);
    });

consultarNotaPromise(5)
    .then(nt => {
        console.log(`[Promise] A nota do aluno ${nt.nome} com id: ${nt.id} é ${nt.nota}`);
    })
    .catch(err => {
        console.error('[Promise Erro] ', err);
    });

/* async/await */
exibirNotaAsyncArrow(3);
exibirNotaAsyncArrow(1);
exibirNotaAsyncArrow(7);



/* 

## Exercício Proposto

Desafio Extra

[ok] Adicione mensagens mais descritivas em caso de erro, como:
Erro: Aluno com ID 4 não encontrado no sistema.

*/

/* 

## Discussão

- Quais vantagens você percebe entre callback e Promise?

R.: A principal vangatem do callback é permitir a continuidade da execução do código porém, em caso de aninhamentos de callback (callback hell) pode deixar o código de difícil leitura/compreensão. As Promises, por outro lado, já proporcionam um código mais legível, permite o encadeamento (.then), já possuem o tratamento de erro embutido (.catch) e ainda possuem os estados que informam se a promise está pendente ou se foi bem ou mal sucedida.


- O que acontece se esquecermos o try/catch em async/await?

R.: Ao executar operações assíncronas com async/await sem usar o try/catch porém perdemos a possibilidade nativa de tratar os erros, o que nos é possibilitado via método 'catch()'.

- Onde usamos esse tipo de lógica no mundo real?

R.: Esse tipo de lógica é usada em situações que envolvem tarefas que podem levar um certo tempo para execução, tempo este sobre o qual, geralmente, não se tem controle uma vez que pode ser dependente de velocidade conexão, poder computacional disponível, dentre outros; como por exemplo em requisições a APIs ou serviços externos, leitura e escita de arquivos, consultas em bancos de dados, etc.

- Quando é melhor usar Promises do que callbacks?

R.: Dadas as vantagens trazidas pelas Promises como melhor legibilidade do código, facilidade no encadeamento (.then()), tratamento de erros (.catch()), além de ser uma abordagem mais moderna já presente o JS moderno; geralmente é sempre uma melhor escolha quando comparada a callbacks.

- Async/await é sempre melhor?

R.: Nem sempre, embora sua utilização permita meior legibilidade e simplicidade, tratamento de erros além da redução da complexidade quando se tem uma aplicação com fluxos síncronos e assíncronos mistos; as Promises, por exemplo, podem se configurar como melhor escolha em situações como execução paralela tendo em vista que possui métodos como Promise.all() e Promise.race() que podem ser mais eficientes que async/await nestes casos.

- Como isso se aplica em aplicações reais?

R.: Em aplicações reais as operações assíncronas as deixam mais responsivas, fluidas e eficientes. Por exemplo: Em aplicativos de entrega: ao se solicitar um pedido, o aplicativo usa operações assíncronas para consultar o status em tempo real do restaurante, do entregador e da previsão de chegada; Nas redes sociais: postar uma foto em plataformas como Instagram envolve enviar o arquivo para servidores, obter confirmação e atualizar o feed de todos os usuários, tudo feito de forma assíncrona para garantir fluidez.

*/