const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db')

app.use(bodyParser.json());

app.use('/user', require('./controllers/user'));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ status: 200 });
});

app.post('/', (req, res) => {
  let id = req.body.id;
  res.json(id);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
