function printTextThroughTime(text, milliseconds) {
	setTimeout(() => {
		console.log(text);
	}, milliseconds);
}

printTextThroughTime('Hello', 2000);
