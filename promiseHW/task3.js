

async function fetchTODO(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
}


async function fetchUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
}


async function getAllData() {
    try {
        const [todo, user] = await Promise.all([
            fetchTODO(),
            fetchUser()
        ]);

        console.log(todo);
        console.log(user);

    } catch (error) {
        console.error(error);
    }
}




async function getRaceData() {
    try {
        const data = await Promise.race([
            fetchTODO(),
            fetchUser()
        ]);

        console.log(data);


    } catch (error) {
        console.error(error);
    }
}


getAllData();
getRaceData();