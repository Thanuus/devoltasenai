import { Router } from "express";
import { atualizarProduto, buscarProdutoId, cadastrarProduto, deletarProduto, listarProduto } from '../controllers/produtoController.js'


export const produtoRoutes = Router()

produtoRoutes.post('/', cadastrarProduto)

produtoRoutes.get('/', listarProduto)

produtoRoutes.get('/:id', buscarProdutoId)

produtoRoutes.delete('/:id', deletarProduto)

produtoRoutes.put('/:id', atualizarProduto)