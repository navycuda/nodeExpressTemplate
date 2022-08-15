'use strint';
const express = require('express');
const TemplateVars = require('../TemplateVars');
let router = express.Router();

router
  .route('/cars')
  .get((req, res) => {
    res.send('hi get /things/cars/');
  })
  .post((req, res) => {

  });

router
  .route('/starships')
  .get((req, res) => {
    const templateVars = new TemplateVars('starships');
    res.render('index', templateVars);
  });

module.exports = router;