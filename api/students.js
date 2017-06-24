const express = require('express');

const router = express.Router();

const queries = require('../queries.js');

router.get('/', (req,res)=>{
  queries.getAll().then(students=>{
    res.json(students);
  });
});

router.post('/sms', (req,res)=>{
  queries.postOne().then(students=>{
    res.json(req.body);
  });
});

module.exports = router;
