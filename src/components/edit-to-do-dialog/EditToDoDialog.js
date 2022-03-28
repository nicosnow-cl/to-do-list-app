import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { putToDo } from '../../helpers/dbHelper';

const formDefault = {
    id: null,
    creationDate: null,
    dueDate: new Date(),
    description: '',
    isDone: false
}

export const EditToDoDialog = ( { setReload, editDialogState, handleClose } ) => {
    const { dialogState, editToDo } = editDialogState;
    
    const [ formError, setFormError ] = useState( false );
    const [ formValues, setFormValues ] = useState( editToDo );

    const handleInputChange = ( evt ) => {
        const { name, value } = evt.target;
        
        setFormValues( {
            ...formValues,
            [ name ]: value,
        } );
    }

    const handleDueDateChange = ( newValue ) => {
        setFormValues( {
            ...formValues,
            dueDate: newValue
        } )
    }

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        setFormError( false );

        const { description } = formValues;
        if ( description.trim().length < 10 ) {
            setFormError( true );
            return;
        }

        formValues.creationDate = new Date();
        putToDo( formValues ).then( ( data ) => {
            if ( data ) {
                setFormValues( formDefault );
                setReload( ( c ) => !c );
                handleClose();
            }
        } );
    }

    return (
        <Dialog open={ dialogState } onClose={ handleClose }>
            <form onSubmit={ handleSubmit }>
                <DialogTitle> Editar una tarea </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para editar una nueva tarea, por favor modifique los siguientes campos.
                    </DialogContentText>

                    <Box sx={ { display: 'flex', flexDirection: 'column' } }>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="description"
                            label="Descripción"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={ { mb: 4 } }
                            value={ formValues.description }
                            onChange={ handleInputChange }
                        />

                        <LocalizationProvider dateAdapter={ DateAdapter }>
                            <DesktopDatePicker
                                label="Fecha de vencimiento"
                                inputFormat="DD/MM/yyyy"
                                value={ formValues.dueDate }
                                onChange={ handleDueDateChange }
                                renderInput={ (params) => <TextField {...params} /> }
                            />
                        </LocalizationProvider>
                    </Box>

                    {
                        ( formError ) && <Box sx={ { mt: 2, textAlign: 'center', color: 'error.main' } }> <span> Asegurese de haber escrito una descripción. El largo mínimo es de 10 caracteres. </span> </Box>
                    }                 
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleClose }> Cancelar </Button>
                    <Button variant="contained" color="primary" type="submit"> Editar </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
