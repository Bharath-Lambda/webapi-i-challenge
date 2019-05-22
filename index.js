// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();

server.use(express.json());

//POST
server.post('/api/users', (req, res) => {
  const newUser = req.body;

  db.insert(newUser)
  .then(newUser => {
    res.status(201).json({
      success: true,
      newUser
    });
  })
  .catch(err => {
    res.status(500).json({
      success: false,
      err
    });
  });
});

//GET
server.get('/', (req, res) => {
  res.send('Hello World!');
})

server.get('/api/users', (req, res) => {
  db.find()
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    res.status(500).json({
      success: false,
      err
    })
  })
})

server.listen(4000, () => {
  console.log(`\n--- Server running on -- \n`)
})