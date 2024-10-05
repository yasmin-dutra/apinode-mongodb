const express = require("express");
const mongoose = require("mongoose");
const rotaLivro = require("./routes/livro.route.js");
const app = express();




app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/Livros", rotaLivro)

app.get("/", (req, res) => {
    res.send("Hello from Node");
})

mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch(() => {
    console.log("Falha na conexão ao banco de dados!");
  });
