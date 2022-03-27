import { Button, Card, Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { isFirstDateMoreThanSecondDate, parseDate } from "../../helpers/dateHelper";

import './ToDoCard.css';

export const ToDoCard = ( { 
    todayDate,
    handleEditDialogOpen,
    id,
    creationDate,
    dueDate,
    description,
    isDone
} ) => {
    const dueDateParsed = parseDate( dueDate , '/' );

    const statusIcon = <FontAwesomeIcon icon={ 
            ( isDone ) ? faCircleCheck : ( isFirstDateMoreThanSecondDate( dueDate, todayDate.date ) ) ? faClock : faCircleXmark
        } size="3x" className={
            ( isDone ) ? 'status-done' : ( isFirstDateMoreThanSecondDate( dueDate, todayDate.date ) ) ? 'status-on-time' : 'status-late'
        }     
    />;

    return (
        <Card variant="outlined" sx={ { p: 3, mb: 2 } } className={ ( isDone ) ? 'card-done' : ( isFirstDateMoreThanSecondDate( dueDate, todayDate.date ) ) ? 'card-on-time' : 'card-late' }> 

            <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
                <Box sx={ { display: 'flex', justifyContent: 'flex-start' } }>
                    <Checkbox  />

                    <p>
                        { description }
                    </p>
                </Box>
                
                <Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
                    <Box sx={ { display: 'flex', alignItems: 'center' } }>
                        <TextField id="standard-basic" label={ dueDateParsed } variant="standard" disabled sx={ { mr: 4 } } />
                        <FontAwesomeIcon icon={ faCalendarDays } size="2x" className="mr-4" />
                    </Box>

                    {
                        statusIcon
                    }

                    <Button sx={ { ml: 2 } } onClick={ handleEditDialogOpen }>
                        Editar
                    </Button>
                </Box>
            </Box>
            
    
        </Card>
    );
}