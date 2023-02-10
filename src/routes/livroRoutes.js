import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
.get('/livros', LivroController.listarLivros)
.get('/livros/:id', LivroController.listarLivroId)
.post('/livros', LivroController.cadastroLivros)
.put('/livros/:id', LivroController.atualizarLivros)
.delete('/livros/:id', LivroController.deletarLivro);

export default router;