console.log(5 + "10");  // "510" додавання числа та стрінги дасть конкатенацію стрінг
console.log(5 - "10");  // -5 віднімання стрінги від числа приведе всі оператори до чисел
console.log(5 * "10");  // 50  множення до числе
console.log(5 / "10");  // 0.5  ділення до чисел
console.log(5 + null);  // 5    
console.log(5 + undefined);  // NaN

console.log(5 + true);  // 6
console.log(5 - false);  // 5
console.log(5 * true);  // 5
console.log(5 / false);  // Infinity

console.log("5" + true);  // "5true"
console.log("5" - false);  // 5
console.log("5" * false);  // 0
console.log("5" / true);  // 5