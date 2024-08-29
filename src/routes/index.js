const express = require('express');
const routerGenre = require('./genre.router');
const routerActor = require('./actor.router');
const routerDirector = require('./director.router');
const routerMovie = require('./movie.router');
const router = express.Router();

// put the routes here
router.use('/genres', routerGenre)
router.use('/actors', routerActor)
router.use('/directors', routerDirector)
router.use('/movies', routerMovie)


module.exports = router;