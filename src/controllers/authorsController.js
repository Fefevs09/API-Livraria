import authors from "../models/Author.js";

class AuthorController {
  static listAuthors = (req, res) => {
    authors.find((err, authors) => {
      if(!err) {
        res.status(200).json(authors);
      }
      else {
        res.status(500).send({message: `${err.message} - falha ao encontrar autor`});
      }
    });
  }

  static findAuthor = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if(!err) {
        res.status(200).json(authors);
      }
      else {
        res.status(400).send({message: `${err.message} - falha ao encontrar autor`});
      }
    });  
  }

  static registerAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar autor`});
      } 
      else {
        res.status(201).send(author.toJSON());
      }
    });
  }

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      }
      else {
        res.status(500).send({message: `${err.message} - falha ao alterar autor` });
      }
    });
  }

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: "Autor deletado com sucesso"});
      }
      else {
        res.status(500).send({message: `${err.message} - falha ao deletar autor` });
      }
    });
  }
}

export default AuthorController;
