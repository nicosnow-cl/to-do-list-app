import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/system";

import { ToDoCard } from "../to-do-card/ToDoCard";

export const ToDoGrid = () => {
    // @ts-ignore
    const { toDoList } = useSelector( ( state ) => state.toDo );   

    return (
        <Box sx={ { mt: 4 } }>
            {
                toDoList.map( ( toDo ) => (
                    <ToDoCard
                        key={ toDo.id }
                        { ...toDo }
                    />
                ) ) 
            }           
        </Box>
    )
}
