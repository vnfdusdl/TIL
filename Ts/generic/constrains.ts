interface Employee {
  pay: () => void;
}

class FulltimeEmployee implements Employee {
  pay() {
    console.log('Fulltime!');
  }
  workFulltime() {
    console.log('work fulltime');
  }
}

class ParttimeEmployee implements Employee {
  pay() {
    console.log('Parttime!');
  }
  workParttime() {
    console.log('work parttime');
  }
}

// function pay(employee: Employee): Employee {
//   employee.pay(); //employee의 poy 함수를 실행시킨 뒤에 employee를 반환
//   return employee;
// }

function pay<T extends Employee>(employee: T): T {
  employee.pay(); //employee의 poy 함수를 실행시킨 뒤에 employee를 반환
  return employee;
}

const cho = new FulltimeEmployee();
const yan = new ParttimeEmployee();

//pay 함수를 실행시킨 뒤에 타입을 잃어버림
const afterPayCho = pay(cho);
const afterPayYan = pay(yan);

afterPayCho.workFulltime();

const obj = {
  name: 'cho',
  age: 20,
};

const obj2 = {
  animal: '🐕‍🦺',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getValue(obj, 'name'));
