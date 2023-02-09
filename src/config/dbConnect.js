import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:1234@cluster0.hnsfwva.mongodb.net/?retryWrites=true&w=majority");

const db = mongoose.connection;

export default db