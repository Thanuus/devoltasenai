import { Livro } from "../models/Livro.js";

export async function cadastrarLivro(req, res) {
    const livro = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        anoPublicacao: req.body.anoPublicacao
    }

    if (!livro.titulo.trim()){
        return res.status(400).json({"mensagem": "Título é obrigatório"})
    }

    try {
        const livroCadastrado = await Livro.create(livro)
        res.status(201).json(livroCadastrado)
    } catch (erro) {
        res.status(500).send("Erro ao cadastrar o livro")
    }
}

export async function listarLivro(req, res) {
    try {
        const livros = await Livro.findAll()
        res.status(200).json(livros)
    } catch {
        res.status(500).send ("Erro ao listar livros")
    }
}

export async function buscarLivroId(req, res) {
    try {
        const livro = await Livro.findAll(req.params.id)

        if(!livro) {
            return res.status(404).json({ 'mensagem': 'Livro nao encontrado'})
        }

        res.status(200).json(livro)
    } catch (erro) {
        res.status(500).send('Erro ao buscar produto')
    }
}

export async function deletarLivro(req, res) {
    try {
        const livro = await Livro.findByPk(req.params.id)

        if (!livro) {
            return res.status(404).json({ 'mensagem': 'Livro não encontrado' })
        }

        await livro.destroy()
        res.status(204).send()
    } catch (erro) {
        res.status(500).send('Erro ao excluir livro')
    }
}

export async function atualizarLivro(req, res) {
    const dadosAtualizados = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        anoPublicacao: req.body.anoPublicacao
    }

    if (!dadosAtualizados.titulo){
        return res.status(400).json ({'mensagem': 'Titulo é obrigatório'})
    }

    try {
        const livro = await Livro.findByPk(req.params.id)

        if (!livro) {
            return res.status(404).json({ 'mensagem': 'Livro nao encontrado'})
        }

        await livro.update(dadosAtualizados)
        res.status(200).json(livro)
    } catch (erro) {
        res.status(500).send ('Erro ao atualizar livro')
    }
}