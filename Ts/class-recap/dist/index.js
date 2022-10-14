"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.secret();
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('SCORE CANNOT BE NEGATIVE!');
        }
        this._score = newScore;
    }
    secret() {
        console.log('this is secret!!');
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const elton = new Player('elton', 'steel', 10);
console.log(elton.fullName);
elton.score = 1234;
console.log(elton.score);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('black', 'prada');
jacket1.print();
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hi I am ${this.first}`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTime1 = new FullTimeEmployee('c', 'kim', 30000000);
const partTime1 = new PartTimeEmployee('y', 'kim', 10000, 300);
console.log(fullTime1.getPay());
console.log(partTime1.getPay());
