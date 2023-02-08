import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    title: {type: String, required: true},
    // String -> referência de Id de um outro objeto
    author: {type: mongoose.Schema.Types.ObjectId, ref:'authors', required: true},
    publishingCompany: {type: String, required: true},
    numberPages: {type: Number}
  }
);


const books = mongoose.model('books', bookSchema);

export default books;
