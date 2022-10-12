function square(num: number): number {
  return num * num;
}
square(3);

function greet(person: string = 'stranger'): string {
  return `Hi ${person}`;
}
// greet(3)
greet();
greet('Sonny');

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething('ME', 8, true);

function random(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

// map 함수에서는 문맥상 타입을 추론할 수 있음
const colors = ['red', 'oragne', 'yellow'];
colors.map((color) => {
  return color.toUpperCase();
});

// void
// void를 반환하는 함수로 undefined 상태로 반환된다.
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// never
// 함수가 아무것도 반환해서는 안된다는 걸 나타내기 위해 씀.
// 어떤 루프에서 연속적으로 실행되는 함수

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log('GAME LOOP RUNNIG');
  }
}
