import { Box } from "@mui/system";

import { ToDoCard } from "../to-do-card/ToDoCard";

export const ToDoGrid = ( { toDos, todayDate, handleEditDialogOpen } ) => {
    return (
        <Box sx={ { mt: 4 } }>
            {
                toDos.map( ( toDo ) => (
                    <ToDoCard
                        key={ toDo.id }
                        todayDate={ todayDate }
                        handleEditDialogOpen={ handleEditDialogOpen }
                        { ...toDo }
                    />
                ) ) 
            }           
        </Box>
    )
}
