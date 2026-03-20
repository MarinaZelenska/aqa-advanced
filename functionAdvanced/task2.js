function reduceNumToZero(num) {
	console.log(num);
	if (num <= 0) {
		return;
	}
	num = num - 1;
	reduceNumToZero(num);
}

reduceNumToZero(5);
