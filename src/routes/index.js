const movieRouter = require('./movie');
function route(app){
    app.use('/movie', movieRouter);
}
module.exports = route;