import { useState } from 'react';
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const Filters = ( { handleChange, handleFreeSelected, handleDeleteSelected, selected } ) => {
    const [ sortSelect, setSortSelect ] = useState( 0 );
 
    const handleSortSelect = ( { target } ) => {
        const type = target.value 
        setSortSelect( type );
        handleChange( type );
    }

    return (
        <Box>
            <Card sx={ { display: 'flex', justifyContent: 'space-between', p: 2 } }>
                <Box sx={ { display: 'flex' } }>
                    <Button 
                        variant="outlined" 
                        sx={ { mr: 2 } }
                        onClick={ handleFreeSelected }
                        disabled={ selected.length === 0 }
                    > 
                        Liberar seleccionadas 
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="warning"
                        onClick={ handleDeleteSelected }
                        disabled={ selected.length === 0 }
                    > 
                        Borrar seleccionadas 
                    </Button>
                </Box>

                <div>
                    <FormControl sx={ { mr: 2 } }>
                        <InputLabel id="ordenar-select-label"> Ordenar </InputLabel>
                        <Select
                            labelId="ordenar-select-label"
                            id="ordenar-aelect"
                            value={ sortSelect }
                            label="Age"
                            onChange={ handleSortSelect }
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
