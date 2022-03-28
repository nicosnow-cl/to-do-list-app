import { Box } from "@mui/system";

import { ToDoCard } from "../to-do-card/ToDoCard";

export const ToDoGrid = ( { toDos, todayDate, handleEditDialogOpen, handleSelected } ) => {
    return (
        <Box sx={ { mt: 4 } }>
            {
                toDos.map( ( toDo ) => (
                    <ToDoCard
                        key={ toDo.id }
                        todayDate={ todayDate }
                        handleEditDialogOpen={ handleEditDialogOpen }
                        handleSelected={ handleSelected }
                        { ...toDo }
                    />
                ) ) 
            }           
        </Box>
    )
}
