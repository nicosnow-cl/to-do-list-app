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

export const patchDoneToDos = async ( selected = [] ) => {
    const baseUrl = 'http://localhost:3004/todos/';
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { isDone: true } )
    };

    selected.forEach( async( id ) => {
        await fetch( baseUrl + id, requestOptions );
    } );
} 

export const putToDo = async ( toDo ) => {
    const url = 'http://localhost:3004/todos/' + toDo.id;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { ...toDo } )
    };
    const response = await fetch( url, requestOptions );
    const data = await response.json();

    return data;
}

export const deleteToDos = async ( selected = [] ) => {
    const baseUrl = 'http://localhost:3004/todos/';
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };

    selected.forEach( async ( id ) => {
        await fetch( baseUrl + id, requestOptions );
    } );
}