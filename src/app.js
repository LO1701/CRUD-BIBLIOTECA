import express from "express";
import db from "./config/dbConnect.js";

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once("open", () => console.log('conexão com o banco feita com sucesso'))

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send(`O livro ${req.body.titulo} foi criado com sucesso`);
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params // é a mesma coisa de eu fazer req.params.id

    const index = buscaLivros(id);

    livros.splice(index, 1);

    res.status(200).json(livros);
});

function buscaLivros(id){
    return livros.findIndex( livro => livro.id == id)
}
  
export default app