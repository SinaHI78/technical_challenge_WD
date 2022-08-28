'use strict';

const data = require('../data/phones.json');
// import phones from `../data/phones.json` assert { type: `json` };
const express = require('express');
const router = express.Router();

router.get('/phones', (req, res, next) => {
  res.json(data);
});

module.exports = router;
