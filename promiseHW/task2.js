function fetchTODO() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json());
}

const allData = Promise.all([fetchTODO(), fetchUser()]);

const raceData = Promise.race([fetchTODO(), fetchUser()]);

allData.then((data) => console.log('Promise.all:', data)).catch((error) => console.error(error));

raceData.then((data) => console.log('Promise.race:', data)).catch((error) => console.error(error));
