import Livro from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        Livro.find()
            .populate('autor')
            .exec((err, livros) => {
            if(livros.length === 0)
                res.status(200).send('Nenhum livro foi cadastrado');
            else
                res.status(200).json(livros);  
        });
    } 

    static listarLivroId = (req, res) => {
        const id = req.params.id;

        Livro.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
                    if(err)
                        res.status(400).send({msg: `${err.message} - O livro não foi encontrado`});
                    else
                        res.status(200).json(livro);
            });
    }

    static cadastroLivros = (req, res) => {
        const livroNovo = new Livro(req.body);
        
        livroNovo.save((err) => {
            if(err)
                res.status(500).send({msg: `${err.message} - Falha ao cadastrar o livro`});
            else
                res.status(201).send(`O livro ${req.body.titulo} foi criado com sucesso`);
        });
    }

    static atualizarLivros = (req, res) => {
        const id = req.params.id;
        
        Livro.findById(id, (err, livro) => {
            if(err)
                res.status(400).send('O livro não foi encontrado');
        })

        Livro.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err)
                res.status(500).send({msg: `${err.message} - Falha ao atualizar o livro`});
            else
                res.status(200).send(`O livro foi atualizado com sucesso`);
        });
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        Livro.findByIdAndDelete(id, (err) => {
            if(err)
                res.status(400).send({msg: `${err.message} - O livro não foi encontrado`});
            else
                res.status(200).send('Livro excluído com sucesso');
        });
    }

    static listarPorEditora = (req, res) => {
        const editora = req.query.editora;

        Livro.find({'editora': editora}, {}, (err, livro) => {
            if(err)
                res.status(400).send({msg: `${err.message} - O livro não foi encontrado`});
            else
                res.status(200).json(livro);
        });
    }
}

export default LivroController