document.getElementById("btn-enviar").addEventListener("click", function(){

    let quantidadeProduto = Number(document.querySelector("#quantidade-estoque").value)
    let nomeProduto = document.querySelector("#nome-produto").value

    addLista(quantidadeProduto, nomeProduto)
    
})

const listaProdutos = []

function criarProduto (quantidadeProduto, nomeProduto) { 
     return {
            nomeProduto,
            quantidadeProduto,
        }
}

function addLista(quantidadeProduto, nomeProduto){
    let produto = criarProduto(quantidadeProduto, nomeProduto)
    listaProdutos.push(produto)
}

function exibirResultado () { 
    const texto = document.getElementById("texto")
    texto.innerHTML = ""

    for(i = 0; i <= listaProdutos.length - 1; i++){
        
            texto.innerHTML += `"Produto ${i}: ${listaProdutos[i].nomeProduto}  Quantidade: ${listaProdutos[i].quantidadeProduto} <br>`
    }  
}

function esconderEstoque(){
    const texto = document.getElementById("texto")
    texto.innerHTML = ""
}
