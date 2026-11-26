import express from 'express'
import { Sequelize, DataTypes } from 'sequelize'

const app = express()

app.use(express.json())

const sequelize = new Sequelize('senai', 'root', '', { host: 'localhost', dialect: 'mysql' })

const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    quantidade: DataTypes.INTEGER
}, { tableName: 'produtos' })

app.post('/produtos', async (req, res) => {
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

})

app.get('/produtos', async (req, res) => {
    try {
        const produtos = await Produto.findAll()
        res.status(200).json(produtos)
    } catch {

        res.status(500).send("Erro ao listar produtos")
    }
})

app.get('/produtos/:id', async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.params.id)

        if(!produto) {
            return res.status(404).json({ 'mensagem': 'Produto não encontrado' })
        }

        res.status(200).json(produto)
    } catch (erro) {
        res.status(500).send('Erro ao buscar produto')
    }
})

app.delete('/produtos/:id', async (req, res) => {
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
})

app.put('/produtos/:id', async (req, res) => {
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
})

async function iniciar() {
    try {
        await sequelize.sync()
        app.listen(3000, () => {
            console.log("Servidor rodando em http://localhost:3000")
        })
    } catch (erro) {
        console.error(erro.messege)
    } 
}

iniciar()