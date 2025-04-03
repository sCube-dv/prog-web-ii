// funcoes assincronas

/* callback */

/* funcao assincrona com callback */

// definindo a funcao de callback
const callback = (res) => console.log(res)

// definindo a funcao assincrona
const somarAsync = (a, b, callback) => {
    setTimeout(() => {
        if (callback) callback(a + b)
    }, 1000)
}

// implementando a funcao
somarAsync(10, 20, callback)