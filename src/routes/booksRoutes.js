import express from "express";
import BookController from "../controllers/booksController.js";


const router = express.Router();

// em questão de rotas, deve-se ordernar da menos especifica -> mais especifica 
router
  .get("/books", BookController.listBooks)
  // caso o get por id fosse colocado primeiro ocasionaria um erro ao procurar o get/search
  .get("/books/search", BookController.listBooksByPublisher)
  .get("/books/:id", BookController.findBook)
  .post("/books", BookController.registerBooks)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook)


export default router;





