console.log("-------- 1 --------\n")

let produto = {
    id: 101,
    nome: "Teclado",
    preco: 150,
    estoque: 8,
    categoria: "Periféricos"
}

//
console.log((produto.estoque * produto.preco).toFixed(2))
//
console.log(produto.nome + " - R$" + produto.preco.toFixed(2) + " - Estoque: " + produto.estoque)
//
produto.estoque -= 2
console.log(produto.estoque)
//
if (produto.estoque > 0){
    console.log("Produto disponivel")
} else {
    console.log("Produto esgotado")
}

console.log("\n-------- 2 --------\n")

let cliente = {
    id: 1,
    nome: "Carlos Oliveira",
    endereco: {rua: "Rua das flores", numero: 41, cidade: "Valença"},
    interesses: ["Jogos", "Musica", "Truco"]
}

console.log(cliente.endereco.cidade)
console.log(cliente.interesses[0])
cliente.endereco.cidade = "Vassouras"
cliente.interesses.forEach(interesse => {
    console.log(interesse)
})

console.log("\n-------- 3 --------\n")

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

let prod = produtos.filter(prod => {
    if (prod.id === 1){
        prod = prod.nome
    }
})
console.log(prod)