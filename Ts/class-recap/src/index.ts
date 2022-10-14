// class Player {
//   //ts에 알리지 않고 프로퍼티와 생성자를 초기화할 수 없다. 어떤 값이 어떤 타입으로 올지 먼저 정의해야 한다.
//   readonly first: string;
//   readonly last: string;
//   score: number = 0; //타입추론 되기 때문에 타입을 밝히지 않아도 된다.
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secret();
//   }
//   private secret() {
//     console.log('this is secret!!');
//   }
// }
class Player {
  //ts에 알리지 않고 프로퍼티와 생성자를 초기화할 수 없다. 어떤 값이 어떤 타입으로 올지 먼저 정의해야 한다.
  // readonly first: string;
  // readonly last: string;
  //   score: number = 0; //타입추론 되기 때문에 타입을 밝히지 않아도 된다.
  constructor(public first: string, public last: string, protected _score: number) {
    this.secret();
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error('SCORE CANNOT BE NEGATIVE!');
    }
    this._score = newScore;
  }

  private secret() {
    console.log('this is secret!!');
  }
}

class SuperPlayer extends Player {
  isAdmin: boolean = true;
  maxScore() {
    this._score = 999999;
  }
}

const elton = new Player('elton', 'steel', 10);
console.log(elton.fullName);
elton.score = 1234;
console.log(elton.score);

interface Colorful {
  color: string;
}
interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public color: string, public brand: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike('red');
const jacket1 = new Jacket('black', 'prada');
jacket1.print();

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log(`Hi I am ${this.first}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const fullTime1 = new FullTimeEmployee('c', 'kim', 30000000);
const partTime1 = new PartTimeEmployee('y', 'kim', 10000, 300);
console.log(fullTime1.getPay());
console.log(partTime1.getPay());
