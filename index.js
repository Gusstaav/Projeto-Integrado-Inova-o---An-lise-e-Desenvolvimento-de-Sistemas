const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Estoque{
    constructor(nome_produto, codigo_produto, locacao) {
        this.nome_produto = nome_produto;
        this.codigo_produto = codigo_produto;
        this.locacao = locacao;
        this.quantidade = 1;
    }
        Relatorio(){
            for(let i = 0; i < 0; i++){
                this.quantidade++
                console.log(this.quantidade)
            }
        }
}

 rl.question('Nome do produto: ', (nome_produto) => {
     rl.question('codigo do produto:', (codigo_produto) =>{
         rl.question('Locação:', (locacao) =>{             
            const quadrado = new Estoque(nome_produto, codigo_produto, locacao);   
            const fucao = new Estoque
   console.log(fucao.Relatorio())
         })
     })
   })
   




