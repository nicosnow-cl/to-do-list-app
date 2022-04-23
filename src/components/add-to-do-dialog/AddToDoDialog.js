import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import { useForm } from '../../hooks/useForm';

import { toDoAddNew } from '../../actions/toDo';
import { addDialogIsClose, startLoading } from '../../actions/ui';

// const formDefault = {
//     id: null,
//     creationDate: null,
//     dueDate: new Date(),
//     description: '',
//     isDone: false
// }

const formDefault = {
    dueDate: new Date().getTime(),
    description: ''
};

export const AddToDoDialog = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { addDialogIsOpen:dialogState } = useSelector( ( state ) => state.ui );
    
    const [ formError, setFormError ] = useState( false );
    const { formValues:{ dueDate, description }, handleInputChange, reset } = useForm( formDefault );

    const handleDueDateChange = ( date ) => {
        handleInputChange( { target: { name: 'dueDate', value: date.toDate().getTime() } } );
    }

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        setFormError( false );

        if ( !isFormValid() ) {
            return;
        } 

        const toDo = {
            id: new Date().getTime(),
            creationDate: new Date().getTime(),
            dueDate,
            description,
            isDone: false
        };

        dispatch( startLoading() );
        const res = dispatch( toDoAddNew( toDo ) );
        if ( res.payload ) handleClose();
    }

    const isFormValid = () => {
        if ( description.trim().length < 10 ) {
            setFormError( true );
            return false;
        }

        return true;
    }

    const handleClose = () => {
        reset();
        dispatch( addDialogIsClose() );
    }

    return (
        <Dialog open={ dialogState } onClose={ handleClose }>
            <form onSubmit={ handleSubmit }>
                <DialogTitle> Agregar una nueva tarea </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para agregar una nueva tarea, por favor rellene los siguientes campos.
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
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <LocalizationProvider dateAdapter={ DateAdapter }>
                            <DesktopDatePicker
                                label="Fecha de vencimiento"
                                inputFormat="DD/MM/yyyy"
                                value={ dueDate }
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
                    <Button variant="contained" color="primary" type="submit"> Agregar </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
