import mongoose from "mongoose";

const { Schema } = mongoose;

const autorSchema = new Schema({
   id: Number,
   nome: {type: String, required: true},
   nacionalidade: {type: String, required: true},
});

const Autor = mongoose.model('Autor', autorSchema);

export default Autor;