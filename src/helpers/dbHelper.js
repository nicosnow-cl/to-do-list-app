export const getToDos = async () => {
    const url = 'http://localhost:3004/todos';
    const response = await fetch( url );
    const data = await response.json();

    return data;
}

export const postToDo = async ( toDo ) => {
    const url = 'http://localhost:3004/todos';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { ...toDo } )
    };
    const response = await fetch( url, requestOptions );
    const data = await response.json();

    return data;
}