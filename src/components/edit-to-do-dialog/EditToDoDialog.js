import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import { useForm } from '../../hooks/useForm';

import { toDoStartEditSelected, toDoStartUnselect } from '../../actions/toDo';
import { editDialogIsClose, startLoading } from '../../actions/ui';

const formDefault = {
    dueDate: new Date().getTime(),
    description: ''
};

export const EditToDoDialog = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { editDialogIsOpen:dialogState } = useSelector( ( state ) => state.ui );
    // @ts-ignore
    const { selectedToDo } = useSelector( ( state ) => state.toDo );
    
    const [ formError, setFormError ] = useState( false );
    const { formValues:{ dueDate, description }, handleInputChange, reset } = useForm( formDefault );

    const activeId = useRef( selectedToDo?.id );

    useEffect( () => {
        if ( ( selectedToDo ) && selectedToDo.id !== activeId.current ) {
            reset( { dueDate: selectedToDo.dueDate, description: selectedToDo.description } );
            activeId.current = selectedToDo.id;
        }
    }, [ selectedToDo, reset ] );

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
            id: selectedToDo.id,
            creationDate: selectedToDo.id,
            dueDate,
            description,
            isDone: selectedToDo.isDone
        };

        dispatch( startLoading() );
        const res = dispatch( toDoStartEditSelected( toDo ) );
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
        activeId.current = null;
        reset();
        dispatch( toDoStartUnselect() );
        dispatch( editDialogIsClose() );
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
                    <Button variant="contained" color="primary" type="submit"> Editar </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
