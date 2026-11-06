//1
console.log("-------- 1 --------\n")
let produto = {
    id: 101,
    nome: "Teclado",
    preco: 150.00,
    estoque: 8,
    categoria: "Periféricos"
}

let valorTotal = produto.preco * produto.estoque;
console.log("Valor total: " + valorTotal.toFixed(2))

console.log(produto.nome + " - R$ " + produto.preco.toFixed(2) + " - Estoque: " + produto.estoque)

produto.estoque = produto.estoque - 2;
console.log(produto.estoque)

if (produto.estoque > 0){
    console.log("Produto disponivel")
} else {
    console.log("Produto esgotado")
}

// if ternario:
//console.log(`Produto ${produto.estoque > 0 ? "disponível" : "indisponível"}`)

console.log("\n-------- 2 --------\n")

//2

let cliente = {
    id: 1,
    nome: "Carlos Oliveira",
    endereco: {
        rua: "Rua A", 
        numero: 41, 
        cidade: "Valença"
    },
    interesses: ["Celular", "Computador", "Notebook"]
}

console.log(cliente.endereco.cidade);

console.log(cliente.interesses[0]);

cliente.endereco.cidade = "Vassouras";
console.log(cliente.endereco.cidade)

cliente.interesses.forEach(interesse => {
    console.log(interesse)}
)

const produtos = [
    { id: 1, nome: "Mouse sem fio", categoria: "Periféricos", preco: 89.90, estoque: 15, ativo: true },
    { id: 2, nome: "Teclado mecânico", categoria: "Periféricos", preco: 249.90, estoque: 8, ativo: true },
    { id: 3, nome: "Monitor 24 polegadas", categoria: "Monitores", preco: 799.90, estoque: 5, ativo: true },
    { id: 4, nome: "Cabo HDMI", categoria: "Acessórios", preco: 29.90, estoque: 0, ativo: true },
    { id: 5, nome: "Headset USB", categoria: "Áudio", preco: 159.90, estoque: 12, ativo: true },
    { id: 6, nome: "Webcam HD", categoria: "Periféricos", preco: 189.90, estoque: 0, ativo: false },
    { id: 7, nome: "Monitor 27 polegadas", categoria: "Monitores", preco: 1199.90, estoque: 3, ativo: true },
    { id: 8, nome: "Caixa de som", categoria: "Áudio", preco: 119.90, estoque: 7, ativo: false },
    { id: 9, nome: "Hub USB", categoria: "Acessórios", preco: 69.90, estoque: 20, ativo: true },
    { id: 10, nome: "Mousepad", categoria: "Acessórios", preco: 24.90, estoque: 25, ativo: true }
  ];

console.log("\n-------- 3 --------\n")

console.log(produtos[0].nome)

console.log(produtos[3].preco)

console.log(produtos.length)

produtos.forEach(produto => {
    console.log(produto.id + " - " + produto.nome + " - R$ " + produto.preco)
})

let pAcessorios = produtos.filter(produto => produto.categoria == "Acessórios")

console.log(pAcessorios)

let pPrecoInferior = produtos.filter(produto => produto.preco < 100)

console.log(pPrecoInferior)

let pEstoque = produtos.filter(produto => produto.estoque > 0)

console.log(pEstoque)

let pEstAti = produtos.filter(produto => produto.estoque > 0 && produto.ativo === true)
console.log(pEstAti)

console.log("\n-------- 4 --------\n")

function buscarProdutoPorId(id){
    if(produtos.find(produto => produto.id === id)){
        return produtos.find(produto => produto.id === id)
    } else {
        return "Produto nao encontrado"
    }
}

console.log(buscarProdutoPorId(3))

console.log("\n-------- 5 --------\n")

let nomeProdutos = produtos.map(produto => produto.nome)
console.log(nomeProdutos)

//let resumosProdutos = produtos.map(produto => produto.id)
//console.log(resumosProdutos)

let produtosOrganizados = produtos.map(produto =>({
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco
}))

console.log("\n-------- 6 --------\n")

let produtoOriginal = produtos.find(produto => produto.id === 2);

let produtoAtualizado = {
    ...produtoOriginal, preco: 219.9
}

console.log(produtoOriginal)
console.log(produtoAtualizado)

console.log("\n-------- 7 --------\n")

let produtosAtualizados = produtos.map(produto => {
    if (produto.id === 5){
        return {...produto, estoque: 10}
    }
    return produto
})
console.log(produtosAtualizados)
    
console.log("\n-------- 8 --------\n")

let produtosComNovo = [...produtos, { id: 11, nome: "Monitor 19 polegadas", categoria: "Monitores", preco: 899.90, estoque: 5, ativo: true }];
console.log(produtosComNovo)

let produtosSemRemovido = produtosComNovo.filter(produto => produto.id !== 6)

console.log(produtosSemRemovido)