import { Produto } from "../models/Produto.js"

export async function cadastrarProduto(req, res) {
    const produto ={
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }

    if (!produto.nome.trim()) {
        return res.status(400).json({"mensagem" : "Nome é obrigatório"})
    }

    try{
        const produtoCadastrado = await Produto.create(produto)
        res.status(201).json(produtoCadastrado)
    } catch (erro) {
        res.status(500).send("Erro ao cadastrar o produto")
    }   
}

export async function listarProduto(req,res) {
    try {
        const produtos = await Produto.findAll()
        res.status(200).json(produtos)
    } catch {

        res.status(500).send("Erro ao listar produtos")
    }
}

export async function buscarProdutoId(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id)

        if(!produto) {
            return res.status(404).json({ 'mensagem': 'Produto não encontrado' })
        }

        res.status(200).json(produto)
    } catch (erro) {
        res.status(500).send('Erro ao buscar produto')
    }
}

export async function deletarProduto(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id)

        if (!produto) {
            return res.status(404).json({ 'mensagem': 'Produto não encontrado' })
        }

        await produto.destroy()
        res.status(204).send()
    } catch (erro) {
        res.status(500).send('Erro ao excluir produto')
    }
}

export async function atualizarProduto(req, res) {
    const dadosAtualizados = {
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }

    if (!dadosAtualizados.nome) {
        return res.status(400).json ({"mensagem": "Nome é obrigatório"})
    }

    try {
        const produto = await Produto.findByPk(req.params.id)

        if(!produto) {
            return res.status(404).json({ 'mensagem': 'Produto não encontrado'})
        }

        await produto.update(dadosAtualizados)
        res.status(200).json(produto)
    } catch (erro) {
        res.status(500).send('Erro ao atualizar produto')
    }
}