import { useEffect, useState } from "react";

import  { getToDos } from '../helpers/dbHelper';

export const useGetFetchToDos = ( reload ) => {
    const [ toDosData, setToDosData ] = useState( {
        data: [],
        loading: true
    } );

    useEffect( () => {
        setTimeout( () => {
            getToDos().then( ( toDos ) => {                
                setToDosData( {
                    data: toDos.map( ( toDo ) => {
                        return {
                            ...toDo,
                            creationDate: new Date( toDo.creationDate ),
                            dueDate: new Date( toDo.dueDate )
                        }
                    } ),
                    loading: false
                } )
            } )
        }, 1000 );
    }, [ reload ] );
    

    return { toDosData, setToDosData };
}