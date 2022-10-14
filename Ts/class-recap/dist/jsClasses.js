class Player {
  //클래스 필드
  static description = 'Players In Our Game!';
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }
  static randomPlayer() {
    return new Player('Adam', 'Samberg'); //랜덤으로 이름을 부여하는 로직이 있다고 생각하기
  }
  taunt() {
    console.log('뿌얌');
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive!');
    }
    this.#score = newScore;
  }
  set fullname(newName) {
    const [first, last] = newName.split(' ');
    this.first = first;
    this.last = last;
  }
  loseLife() {
    this.numLives -= 1;
  }
  #secret() {
    console.log('this is secret!');
  }
}

class AdminPlayer extends Player {
  constructor(first, last, power) {
    super(first, last);
    this.power = power;
  }
  isAdmin = true;
}

// const player1 = new Player('blue', 'steele');
// player1.taunt();
// console.log(player1);
// console.log(player1.last);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// const player2 = new Player('red', 'morning');
// player2.taunt();
// console.log(player2.last);

// console.log(player1.score);
// player1.score = 123;
// console.log(player1.score);
// console.log(player1);
// player1.fullname = 'adam colt';
// console.log(player1);

// const player3 = Player.randomPlayer();
// console.log(player3);

const admin = new AdminPlayer('admin', 'mCadmin', ['delete', 'restore']);
