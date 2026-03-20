function square(width, height) {
	return width * height;
}

const square2 = function (width, height) {
	return width * height;
};

const square3 = (width, height) => width * height;

console.log(square(5, 10));
console.log(square2(5, 10));
console.log(square3(5, 10));
