import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

import { addDialogIsOpen } from "../../actions/ui";

export const AddToDo = () => {
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        dispatch( addDialogIsOpen() );
    }

    return (
        <Box sx={ { display: 'flex', justifyContent: 'center' } }>
            <Button onClick={ handleClickOpen } >
                <FontAwesomeIcon icon={ faSquarePlus } size="6x" />
            </Button>
        </Box>
    );
}
