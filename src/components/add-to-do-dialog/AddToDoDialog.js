import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export const AddToDoDialog = ( { dialogState, handleClose } ) => {
    return (
        <Dialog open={ dialogState } onClose={ handleClose }>
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
                        label="Descripción"
                        type="text"
                        fullWidth
                        variant="standard"
                        sx={ { mb: 4 } }
                    />

                    <LocalizationProvider dateAdapter={ DateAdapter }>
                        <DesktopDatePicker
                            label="Fecha de vencimiento"
                            inputFormat="MM/dd/yyyy"
                            value={ '03/27/2022' }
                            onChange={() => {  } }
                            renderInput={ (params) => <TextField {...params} /> }
                        />
                    </LocalizationProvider>
                </Box>                
            </DialogContent>
            <DialogActions>
                <Button onClick={ handleClose }> Cancelar </Button>
                <Button onClick={ handleClose }> Agregar </Button>
            </DialogActions>
        </Dialog>
    );
}
