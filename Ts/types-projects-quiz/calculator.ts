/**
 * Let's make a calculator 🧮
 */

type CalcMethod = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(calcMethod: CalcMethod, param1: number, param2: number): number {
  switch (calcMethod) {
    case 'add':
      return param1 + param2;
    case 'substract':
      return param1 - param2;
    case 'multiply':
      return param1 * param2;
    case 'divide':
      return param1 / param2;
    case 'remainder':
      return param1 % param2;
    default:
      throw new Error('unknown error');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
