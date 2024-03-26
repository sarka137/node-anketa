const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Webová anketa'});
});

app.post('/submit', (req, res) => {
    res.redirect('/results');
});

