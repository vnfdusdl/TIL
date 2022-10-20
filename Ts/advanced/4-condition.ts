//Condition이 string 타입을 상속받는다면 boolean 타입, 아니라면 number 타입
type Condition<T> = T extends string ? boolean : number;

// type Type = Condition<string>; //Type은 boolean 타입
//이렇게 바로 쓸 수도 있음
const boal: Condition<string> = true;

type TypeName<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends Function
  ? Function
  : object;

type NameType = TypeName<string>; //string
type Type2 = TypeName<() => void>; //Function
type Type3 = TypeName<'a'>; //string
