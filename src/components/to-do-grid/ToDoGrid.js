import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/system";

import { ToDoCard } from "../to-do-card/ToDoCard";

import { getSortedToDos } from "../../helpers/sortsHelper";

export const ToDoGrid = () => {
    // @ts-ignore
    const { toDoList, sortingType } = useSelector( ( state ) => state.toDo );   

    const sortedToDoList = getSortedToDos( toDoList, sortingType );

    return (
        <Box sx={ { mt: 4 } }>
            {
                sortedToDoList.map( ( toDo ) => (
                    <ToDoCard
                        key={ toDo.id }
                        { ...toDo }
                    />
                ) ) 
            }           
        </Box>
    )
}
