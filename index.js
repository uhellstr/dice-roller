// index.js
const express = require('express');
const path = require('path');
const rollDice = require('./diceRoller');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/roll', (req, res) => {
  const { diceInput } = req.body;
  const result = rollDice(diceInput);
  res.render('result', { diceInput, result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
