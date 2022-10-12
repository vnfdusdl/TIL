let movieTitle: string = 'exit';
movieTitle = 'harry porter';
// movieTitle = 0;
movieTitle.toUpperCase();

let numcatLives: number = 9;
numcatLives += 1;
// numcatLives = 'zero';

let gameOver: boolean = false;
gameOver = true;
// gameOver = 'true';

// Type Inference(타입 추론)
let tvShow = 'Running man';
// tvShow = false;

let isFunny = true;
// isFunny = 'true';

// any type
let thing: any = 'hello';
thing = 0;
thing = false;
thing();
thing.toUpperCase();

const movies = ['Arrivals', 'the thing', 'Aliens'];
let foundMovie: string;
for (let movie of movies) {
  if (movie === 'Aliens') {
    foundMovie = 'Aliens';
  }
}
