const number = 7;

if (number <= 0 || number >= 10) {
	throw new Error('Введіть число від 1 до 9 включно!');
}

// for

for (let start = 1; start <= 10; start++) {
	let result = number * start;
	console.log(`${number} * ${start} = ${result}`);
}

// while

let start = 1;

while (start <= 10) {
	let result = number * start;
	console.log(`${number} * ${start} = ${result}`);
	start++;
}

// do ... while

start = 1;

do {
	let result = number * start;
	console.log(`${number} * ${start} = ${result}`);
	start++;
} while (start <= 10);
