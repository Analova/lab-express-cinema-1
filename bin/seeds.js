const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose
    .connect('mongodb://localhost/lab-express-cinema', {
        useMongoClient: true
    })
    .then(() => {
        console.log('Connected to Mongo!')
    }).catch(err => {
        console.error('Error connecting to mongo', err)
    });


const movies = require("../data/movies");
const Movie = require("../models/Movie");



console.log(movies);

Movie.create(movies)
    .then(moviesFromDb => {
        console.log(moviesFromDb.length + "movies")
    })