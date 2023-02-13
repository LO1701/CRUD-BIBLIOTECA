import Autor from "../models/Autor.js";

class AutorController {
    static listarAutor = (req, res) => {
        Autor.find((err, autor) => {
            if(autor.length === 0)
                res.status(200).send('Nenhum autor foi cadastrado');
            else
                res.status(200).json(autor);       
        });
    } 

    static listarAutorId = (req, res) => {
        const id = req.params.id;

        Autor.findById(id, (err, autor) => {
            if(err)
                res.status(400).send({msg: `${err.message} - O autor não foi encontrado`});
            else
                res.status(200).json(autor);
        });
    }

    static cadastroAutor = (req, res) => {
        const autorNovo = new Autor(req.body);
        
        autorNovo.save((err) => {
            if(err)
                res.status(500).send({msg: `${err.message} - Falha ao cadastrar o autor`});
            else
                res.status(201).send(`O autor ${req.body.nome} foi criado com sucesso`);
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        
        Autor.findById(id, (err, autor) => {
            if(err)
                res.status(400).send('O autor não foi encontrado');
        })

        Autor.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err)
                res.status(500).send({msg: `${err.message} - Falha ao atualizar o autor`});
            else
                res.status(200).send(`O autor foi atualizado com sucesso`);
        });
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        Autor.findByIdAndDelete(id, (err) => {
            if(err)
                res.status(400).send({msg: `${err.message} - O Autor não foi encontrado`});
            else
                res.status(200).send('Autor excluído com sucesso');
        });
    }
}

export default AutorController