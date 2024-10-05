const mongoose = require ("mongoose")

const LivroSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Por favor coloque um nome para seu livro"]
        },
        author:{
            type: String,
            required:true
        },
        lancamento:{
            type:String,
            required:true
        },
        sinopse:{
            type:String,
            required: true
        },
        img_url:{
            type:String,
            required:true
        }
    }
);

const Livro = mongoose.model("Livro", LivroSchema);

module.exports = Livro;