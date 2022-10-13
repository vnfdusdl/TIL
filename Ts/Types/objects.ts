function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: 'cho', last: 'kim' });
// 객체 리터럴로 전달할 때는 지정된 프로퍼티만 전달할 수 있지만, 다른 변수로 할당하는 선과정을 거치면 필요 프로퍼티가 존재하는지만 확인하고 다른 프로퍼티는 부수적인 것으로 취급한다.
// printName({ first: 'cho', last: 'kim', age: 7 });
const cho = { first: 'cho', last: 'kim', age: 7 };
printName(cho);

let coordinate: { x: number; y: number } = { x: 1, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// Type Alias

type Point = {
  x: number;
  y: number;
};

function prinNUM(point: Point): Point {
  return {
    x: point.x,
    y: point.y,
  };
}

let numbers: Point = { x: 12, y: 45 };

const callName = (name: string): void => {
  console.log(`this is ${name}`);
  console.log('이름');
};

// 중첩 객체 - type alias
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: 'asdg',
  artist: ' sfsdf',
  numStreams: 1232134,
  credits: {
    producer: 'sdfsdf',
    writer: 'cfsdf',
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// 선택적 프로퍼티 생성
type Points = {
  x: number;
  y: number;
  z?: number; //?를 붙여주면 optional 한 프로퍼티를 생성할 수 있다.
};

const myPoints = { x: 1, y: 2 };

// readonly 키워드
type User = {
  readonly id: number;
  name: string;
};

const user: User = {
  id: 12345,
  name: 'catty',
};

user.id;
// 읽기 전용이므로 새로운 값을 할당하면 에러가 뜸
// user.id = 2231;

// 교차타입(intersection type)
// 타입끼리 합쳐서 새로운 타입을 만들 수 있다.
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle &
  Colorful & {
    isHappy: boolean;
  };

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
  isHappy: true,
};
