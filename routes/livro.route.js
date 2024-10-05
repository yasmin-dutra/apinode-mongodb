const express = require("express");
const rota = express.Router();
const {lerLivros, lerLivro, cadastrarLivro, atualizarLivro, excluirLivro} = require("../controllers/livro.controller.js")


//mostrar todos os livros
rota.get("/",lerLivros);

//mostrar um livro especifico a partir do seu id 
rota.get("/:id",lerLivro);

//Cadastrar um livro
rota.post("/",cadastrarLivro);

//Atualizar um livro
rota.put("/:id",atualizarLivro);

//Excluir um livro
rota.delete("/:id",excluirLivro);


module.exports = rota;
