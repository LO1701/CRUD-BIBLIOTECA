import mongoose from "mongoose";

const { Schema } = mongoose;

const livroSchema = new Schema({
   id: Number,
   titulo: {type: String, required: true},
   autor: {type: String, required: true},
   editora: {type: String, required: true},
   numeroPaginas: String
});

const Livro = mongoose.model('Livro', livroSchema);

export default Livro;