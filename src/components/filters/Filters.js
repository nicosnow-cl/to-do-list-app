import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { startLoading } from '../../actions/ui';
import { toDoStartFreeSelecteds } from '../../actions/toDo';

export const Filters = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { selectedToDos } = useSelector( ( state ) => state.toDo );

    const handleFreeSelecteds = () => {
        dispatch( startLoading() );
        dispatch( toDoStartFreeSelecteds( selectedToDos ) );
    }

    return (
        <Box>
            <Card sx={ { display: 'flex', justifyContent: 'space-between', p: 2 } }>
                <Box sx={ { display: 'flex' } }>
                    <Button 
                        variant="outlined" 
                        sx={ { mr: 2 } }
                        onClick={ handleFreeSelecteds }
                    > 
                        Liberar seleccionadas 
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="warning"
                    > 
                        Borrar seleccionadas 
                    </Button>
                </Box>

                <div
                    style={ { width: '200px' } }
                >
                    <FormControl sx={ { mr: 2 } } style={ { width: '100%' } }>
                        <InputLabel id="ordenar-select-label"> Ordenar </InputLabel>
                        <Select
                            labelId="ordenar-select-label"
                            id="ordenar-aelect"
                            label="Age"
                            defaultValue={ 0 }
                        >
                            <MenuItem value={ 0 }> Fecha creación </MenuItem>
                            <MenuItem value={ 1 }> Fecha vencimiento </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Card>
            
        </Box>
    )
}
