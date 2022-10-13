let age: string | number = '';
age = 27;

type Position = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  log: number;
};

let coordinates: Position | Loc = { x: 12, y: 67 };
coordinates = { lat: 123, log: 134 };

// Type Narrowing
function calcualtorText(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
}

// 배열 union
// [] 안에 여러 타입을 담고싶을 때
// let stuff: (number | string)[] = [];
// stuff = [1, 2, 'asfds'];

let coord: (Position | Loc)[] = [{ x: 12, y: 67 }];
coord.push({ lat: 123, log: 134 });

// 리터럴 타입 => 유니언 타입과 결합하여 사용하면 유용하다
// 변수가 정해놓은 리터럴 타입만 될 수 있도록 할 수 있다.
let todayMood: ('Happy' | 'Sad' | 'Enjoy' | 'Tired') = 'Happy'
todayMood = 'Tired'
// todayMood = 'Tierd' //오류가 난다