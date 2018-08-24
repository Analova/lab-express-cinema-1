const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log(movies[0])
      console.log("Array should be here")
      res.render('movies', {
        movies:movies
      });
    })
    .catch(err => {throw err})
});

router.get("/movies/:id", (req,res,next)=>{
  let id=req.params.id;
  Movie.findOne({"_id": id})
  .then(movie=>{
    res.render("movie-detail", {movie:movie})
  })
})


module.exports = router;
