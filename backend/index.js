const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // allow universal acess

let items = [
  { item: 'Rice', price: '30' },
  { item: 'Bean', price: '10' },
  { item: 'Coffee', price: '20' }
];


// routes
app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  items.push(req.body)
})

app.delete('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  items.splice(id, 1);
  res.status(200).json({ message: 'Item removido' });
});

app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id)
  if (id >= 0 && id < items.length) {
    items[id] = req.body
    res.status(200).json({ message: 'Item atualizado' });
  } else {
    res.status(404).json({ message: 'Índice inválido' });
  }
})


app.listen(3000, () => {
  console.log('Server running in http://localhost:3000');
});
