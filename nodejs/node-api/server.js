const express = require('express');
const mongoose = require('mongoose');

const app = express();

// iniciando banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// primeira rota
app.get('/', (req, res) => {
  res.send('hello asdasdsad');
});

app.listen(3001);