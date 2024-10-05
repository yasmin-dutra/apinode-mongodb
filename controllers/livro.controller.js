const Livro = require("../models/livro.model.js");

const lerLivros = async (req,res) =>{
    try{
        const livros = await Livro.find();
        res.status(200).json(livros)
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

const lerLivro = async (req,res) => {
    try{
        const { id } = req.params;
        const livros = await Livro.findById(id);
        res.status(200).json(livros)
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const cadastrarLivro = async (req,res) => {
    try{
        const livros = await Livro.create(req.body);
        res.status(200).json(livros)
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const atualizarLivro = async (req,res) => {
    try{
        const { id } = req.params;
        const livros = await Livro.findByIdAndUpdate(id,req.body);
        
        const livroAtualizado = await Livro.findById(id);
        res.status(200).json(livroAtualizado);
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

const excluirLivro = async (req,res) => {
    try{
        const { id } = req.params;
        await Livro.findByIdAndDelete(id,req.body);
        res.status(200).json({ message: "Livro excluído com sucesso" });
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    lerLivros,
    lerLivro,
    cadastrarLivro,
    atualizarLivro,
    excluirLivro,
};

