interface Point {
  x: number;
  y: number;
}
const pt: Point = { x: 123, y: 567 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  //   sayHi(): string
}

const thomas: Person = {
  id: 1234,
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  sayHi: () => {
    return 'Hi';
  },
};

// readonly 프로퍼티는 수정 불가능
thomas.first = 'sdfsdf';
// thomas.id = 1234

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue sneakers',
  price: 100,
  applyDiscount(discount) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// interface property adding on
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

// interface끼리 합쳐지기때문에(추가), 모든 property가 다 존재해야 한다.
const nuri: Dog = {
  name: 'Nuri',
  age: 12,
  breed: 'sigor jabjong',
  bark() {
    return 'wang wang';
  },
};

// interface expanding
interface ServiveDog extends Dog {
  job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiveDog = {
  name: 'Chewy',
  age: 4.5,
  breed: 'Lab',
  bark() {
    return 'bark!';
  },
  job: 'guide dog',
};

// interface multiple inheritance
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const yeonee: Engineer = {
  name: 'yeonee',
  id: 1234,
  email: 'sfsd@mail.com',
  level: 'junior',
  languages: ['js'],
};

