const { getAll, create, getOne, remove, update, setGenrestoMovies, setActorsToMovies, setDirectors } = require('../controllers/movie.controllers');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id/genres')
    .post( setGenrestoMovies )

routerMovie.route('/:id/genres')
    .post( setActorsToMovies )

routerMovie.route('/:id/genres')
    .post( setDirectors )

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerMovie;