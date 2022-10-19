/**
 * Let's make a calculator 🧮
 */
function calculate(calcMethod, param1, param2) {
    switch (calcMethod) {
        case 'add':
            console.log(param1 + param2);
        case 'substract':
            console.log(param1 - param2);
        case 'multiply':
            console.log(param1 * param2);
        case 'divide':
            console.log(param1/param2);
        case 'remainder':
            console.log(param1 % param2);
    }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
