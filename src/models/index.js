const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");

Movie.belongsToMany(Actor, {through: 'moviesActors'})
Actor.belongsToMany(Movie, {through: 'moviesActors'})

Movie.belongsToMany(Director, {through: 'moviesActors'})
Director.belongsToMany(Movie, {through: 'moviesActors'})

Movie.belongsToMany(Genre, {through: 'moviesActors'})
Genre.belongsToMany(Movie, {through: 'moviesActors'})