const express = require('express');
const router = express.Router();
 
const movieController = require('../app/controllers/MovieController');

router.use('/', movieController.index)

module.exports =router;