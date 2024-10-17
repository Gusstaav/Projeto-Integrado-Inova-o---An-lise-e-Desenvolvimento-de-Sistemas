const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nome do produto: ', (nome_produto) => {
    rl.question('codigo do produto:', (codigo_produto) =>{
        rl.question('Locação:', (locacao) =>{
            console.log({nome_produto,codigo_produto,locacao})
        })
    })
  })