import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export const AddToDo = ( { handleClickOpen } ) => {
    return (
        <Box sx={ { display: 'flex', justifyContent: 'center' } }>
            <Button onClick={ handleClickOpen } >
                <FontAwesomeIcon icon={ faSquarePlus } size="6x" />
            </Button>
        </Box>
    );
}
