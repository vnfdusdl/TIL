var movieTitle = 'exit';
movieTitle = 'harry porter';
// movieTitle = 0;
movieTitle.toUpperCase();
var numcatLives = 9;
numcatLives += 1;
// numcatLives = 'zero';
var gameOver = false;
gameOver = true;
// gameOver = 'true';
// Type Inference(타입 추론)
var tvShow = 'Running man';
// tvShow = false;
var isFunny = true;
// isFunny = 'true';
// any type
var thing = 'hello';
thing = 0;
thing = false;
thing();
thing.toUpperCase();
var movies = ['Arrivals', 'the thing', 'Aliens'];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === 'Aliens') {
        foundMovie = 'Aliens';
    }
}
