import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { startLoading } from '../../actions/ui';
import { toDoStartDeleteSelecteds, toDoStartFreeSelecteds, toDoChangeSortingType } from '../../actions/toDo';

export const Filters = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { selectedToDos, sortingType: actualSortingType } = useSelector( ( state ) => state.toDo );

    const handleFreeSelecteds = () => {
        dispatch( startLoading() );
        dispatch( toDoStartFreeSelecteds( selectedToDos ) );
    }

    const handleDeleteSelecteds = () => {
        dispatch( startLoading() );
        dispatch( toDoStartDeleteSelecteds( selectedToDos ) );
    }

    const handleChangeSortingType = ( evt ) => {
        const sortingType = evt.target.value;

        if ( actualSortingType !== sortingType ) dispatch( toDoChangeSortingType( sortingType ) );
    }

    return (
        <Box>
            <Card sx={ { display: 'flex', justifyContent: 'space-between', p: 2 } }>
                <Box sx={ { display: 'flex' } }>
                    <Button 
                        variant="outlined" 
                        sx={ { mr: 2 } }
                        onClick={ handleFreeSelecteds }
                        disabled={ selectedToDos.length === 0 }
                    > 
                        Liberar seleccionadas 
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="warning"
                        onClick={ handleDeleteSelecteds }
                        disabled={ selectedToDos.length === 0 }
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
                            onChange={ handleChangeSortingType }
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
