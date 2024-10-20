const readline = require('readline');
const fs = require('fs');
const path = './storage.json';

// Função para ler os dados
function readStorage() {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
  }
  return {};
}

// Função para salvar os dados
function writeStorage(data) {
  fs.writeFileSync(path, JSON.stringify(data));
}

// Uso
let storage = readStorage();
//Função para deletar item em local
function deleteItem(key) {
    let storage = readStorage();
    
    if (storage[key]) {
      delete storage[key]; // Remove o item
      writeStorage(storage); // Salva as alterações
      console.log(`Item "${key}" excluído com sucesso.`);
    } else {
      console.log(`Item "${key}" não encontrado.`);
    }
  }
//função para buscar itens
  function getItem(key) {
    const storage = readStorage();
    return storage[key] !== undefined ? storage[key] : null; // Retorna o valor ou null se não encontrado
  }

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Controle{
    constructor(nome_produto, codigo_produto, locacao, quantidade_produto) {
        this.nome_produto = nome_produto;
        this.codigo_produto = codigo_produto;
        this.locacao = locacao;
        this.quantidade = quantidade_produto;
    }
        Cadastro(){
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
                                    
                                // Se a chave 'nomes' não existir, cria um array
                                    if (!storage.Produtos) {
                                        storage.Produtos = [];
                                    }
                                    
                                    storage.Produtos.push({Produto, Codigo, Locacao, Quantidade}); // Adiciona o novo nome
                                    writeStorage(storage) 
                                
                                    return storage.Produtos || []
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

            // Função para atualizar um nome
            updateProduto(codigo, nome, locacao, quantidade) {
                if (storage.Produtos) {
                    const found = storage.Produtos.find(item => item.Codigo === codigo);
                    if (found) {
                      found.Produto = nome; // Atualiza o nome
                      found.Locacao = locacao;
                      found.Quantidade = quantidade;
                    }else {
                    console.log('Nenhum nome encontrado para atualizar.');
                  }
                
                  // Salva as alterações
                  writeStorage(storage);
                }
        } 
}

console.log("Digite a opção que deseja \n1: Cadastrar algum produto \n2: Para atualizar algum produto\n3:Gerar um relatório do estoque\n4:Localizar o produto")

rl.question("Por gentila digite a opção escolhida: ", (number) =>{
        
        if(number == 1){
            rl.question('Nome do produto: ', (nome_produto) => {
                rl.question('codigo do produto:', (codigo_produto) =>{
                    rl.question('Locação:', (locacao) =>{             
                      rl.question('Quantidade:', (quantidade_produto) =>{             
                           const quadrado = new Controle(nome_produto, codigo_produto, locacao, quantidade_produto);   
                               console.log(quadrado.Cadastro())
                       })
                    })
                })
              })
        }
        
        if(number == 2){
            rl.question('Codigo do produto: ', (codigo_produto) => {
                rl.question("Nome do produto: ", (nome) =>{
                    rl.question("Locação: ", (locacao)=>{
                        rl.question("Quantidade: ", (quantidade)=>{

                            const atualizar = new Controle
                            atualizar.updateProduto(codigo_produto, nome, locacao, quantidade)
                        })
                    })

                })
              })
        }
    
})
console.log(storage)