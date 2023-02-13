import express from "express";
import AutorController from "../controllers/autorController.js";

const routerAutor = express.Router();

routerAutor
.get('/autor', AutorController.listarAutor)
.get('/autor/:id', AutorController.listarAutorId)
.post('/autor', AutorController.cadastroAutor)
.put('/autor/:id', AutorController.atualizarAutor)
.delete('/autor/:id', AutorController.deletarAutor);

export default routerAutor;