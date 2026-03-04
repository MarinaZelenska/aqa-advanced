

const customArray = [1, 2, 3, 4, 5];

const newArray = customArray.map((number) => number * customArray.indexOf(number));
console.log(newArray);