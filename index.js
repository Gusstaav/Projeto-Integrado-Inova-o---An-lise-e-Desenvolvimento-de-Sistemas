const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Estoque{
    constructor(nome_produto, codigo_produto, locacao, quantidade_produto) {
        this.nome_produto = nome_produto;
        this.codigo_produto = codigo_produto;
        this.locacao = locacao;
        this.quantidade = quantidade_produto;
    }
        Relatorio(){
            var Produto = this.nome_produto
            var Codigo= this.codigo_produto
            var Locacao = this.locacao
            var Quantidade = this.quantidade
            var Relatorio = {}
            
                if(Produto){
                    Relatorio = Produto
                    
                    if(Codigo){
                        Relatorio = {Produto, Codigo}

                        if(Locacao){
                            Relatorio = {Produto, Codigo, Locacao}

                            if(Quantidade){
                                Relatorio = {Produto, Codigo, Locacao, Quantidade}
                                return {Relatorio}
                            }else{
                                console.log("--> Por gentila preecha o campo da quantidade do produto <--")
                            }

                        }else{
                            console.log("-->Por gentila preecha o campo da locação do produto <--")
                        }
                            
                            
                    }else{
                        console.log("--> Por gentila preecha o campo do codigo do produto <--")
                    }
                        
                    

                    }else{
                        console.log("--> Por gentila preecha o campo do nome do produto <--")
                    }
                    
                    


        }
}

 rl.question('Nome do produto: ', (nome_produto) => {
     rl.question('codigo do produto:', (codigo_produto) =>{
         rl.question('Locação:', (locacao) =>{             
           rl.question('Quantidade:', (quantidade_produto) =>{             
                const quadrado = new Estoque(nome_produto, codigo_produto, locacao, quantidade_produto);   
                    console.log(quadrado.Relatorio())
 })
         })
     })
   })
   




