function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Numerator and denominator should be numbers");
  }

  if (denominator === 0) {
    throw new Error("Denominator can't be zero");
  }

  return numerator / denominator;
}

let num1 = 10;
let divider = 0;

try {
  console.log(divide(num1, divider));
} catch (err) {
  console.log(err.message);
} finally {
  console.log("Робота завершена");
}
