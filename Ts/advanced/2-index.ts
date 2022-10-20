// type도 index 접근방법을 기반으로 하여 정의할 수 있다. => 다른 타입의 key 에 접근하여 value의 type을 그대로 정의할 수 있다.
{
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; //Name은 string 타입
  const text: Name = 'only string'; //text는 string 타입만 가질 수 있다

  type Gender = Animal['gender']; //Gender는 'male' | 'female' 타입을 갖는다

  type Keys = keyof Animal; //Key는 'name' | 'age' | 'gender'
  const key: Keys = 'age'; //key의 value는 셋 중에 하나만 가질 수 있기 때문에 자동완성이 됨

  type Person = {
    name: string;
    gender: Animal['gender']; //'male' | 'female'
  };

  const person: Person = {
    name: 'cho',
    gender: 'femalef',
  };
}
