
const sortToDosByCreationDate = ( toDos ) => {
    return toDos.sort( ( toDo1, toDo2 ) => toDo1.creationDate - toDo2.creationDate );
}

const sortToDosByDueDate = ( toDos ) => {
    return toDos.sort( ( toDo1, toDo2 ) => toDo1.dueDate - toDo2.dueDate );
}

const sortToDosByEstado = ( toDos ) => {
    return toDos;
}

export const getSortedToDos = ( toDos, type ) => {
    switch ( type ) {
        case 0: {
            return sortToDosByCreationDate( toDos );
        }
        case 1: {
            return sortToDosByDueDate( toDos );;
        }
        case 2: {
            return sortToDosByEstado( toDos );
        }
        default: {
            return sortToDosByCreationDate( toDos );
        }
    }
}