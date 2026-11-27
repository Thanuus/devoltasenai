import { Router } from "express";
import { atualizarLivro, buscarLivroId, cadastrarLivro, deletarLivro, listarLivro } from "../controllers/livroController.js";


export const livroRoutes = Router()

livroRoutes.post('/', cadastrarLivro)

livroRoutes.get('/', listarLivro)

livroRoutes.get('/:id', buscarLivroId)

livroRoutes.delete('/:id', deletarLivro)

livroRoutes.put('/:id', atualizarLivro)