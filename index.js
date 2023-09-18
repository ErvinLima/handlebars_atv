const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const produtos = [
  { id: 1, nome: "teclado mecanino", descricao: "teclado hyperx mecanico alloy", preço: 250},
  { id: 2, nome: "mouse gamer", descricao: "mouse redragon cobra", preço: 90},
  { id: 3, nome: "headset", descricao: "fone headset redragon ", preço: 150}
]

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/main', (req, res) => {
    res.render('produtos', { produtos })
})

app.get('/produto/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(prod => prod.id === id);
  res.render('produto', { produto });
})

app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000")
})