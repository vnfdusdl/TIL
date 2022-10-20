type PositionType = {
  x: number;
  y: number;
};

interface PosiotionInterface {
  x: number;
  y: number;
}

// both : object 형태로 만들 수 있음
const obj1: PositionType = {
  x: 1,
  y: 2,
};

const obj2: PosiotionInterface = {
  x: 1,
  y: 2,
};

// both : class 사용 가능(구현 가능)
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PosiotionInterface {
  x: number;
  y: number;
}

// both : extends 가능
type zPositionType = PositionType & { z: number };

interface zPositionInterface extends PosiotionInterface {
  z: number;
}

//✨Only interface can be merged!
interface PosiotionInterface {
  z: number;
}

//✨Only type can use computed properties!
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; //string type

type NumberType = number; 
type direction = 'left' | 'right'; //union 타입
