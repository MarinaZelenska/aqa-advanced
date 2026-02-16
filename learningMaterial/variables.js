let test; // block scope
var test1 = 1; // functional scope
const test2 = 1; // block scope


/*

hoisting - це коли при ініціалізації модуля оголошення змінних піднімається вгору
Приклад коду:

console.log(x)  - > undefined 
var x = 0;


Тобто по факту під капотом виконання буде таким чином:
var x; -> оголошення змінної і присвоєння їй значення undefined
console.log(x)
x = 0;


З let працює по іншому -> Має hoisting, але з TDZ

console.log(x)  - > ReferenceError -> Temporal Dead Zone (TDZ) — змінна існує, але недоступна до оголошення.
let x = 0;

*/