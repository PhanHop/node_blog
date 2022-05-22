const Movie = require('../models/movies')
class MovieController {
    index(req, res, next) {
        Movie.find({})
            .then(movie => res.json(movie))
            .catch(next)
    }
}
module.exports = new MovieController;