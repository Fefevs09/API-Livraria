import mongoose from "mongoose";

mongoose.connect("<Conexão com o banco de dados>");

let db = mongoose.connection;

export default db;

