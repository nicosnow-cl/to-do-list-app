import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'

export const Filters = ( { handleChange } ) => {
    return (
        <Box>
            <Card sx={ { display: 'flex', justifyContent: 'space-between', p: 2 } }>
                <Box sx={ { display: 'flex' } }>
                    <Button variant="outlined" sx={ { mr: 2 } }> Liberar seleccionadas </Button>
                    <Button variant="outlined" color="warning"> Borrar seleccionadas </Button>
                </Box>

                <div>
                    <FormControl sx={ { mr: 2 } }>
                        <InputLabel id="ordenar-select-label"> Ordenar </InputLabel>
                        <Select
                            labelId="ordenar-select-label"
                            id="ordenar-aelect"
                            value={10}
                            label="Age"
                            onChange={ handleChange }
                        >
                            <MenuItem value={10}> Fecha creación </MenuItem>
                            <MenuItem value={20}> Fecha vencimiento </MenuItem>
                            <MenuItem value={20}> Estado </MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="filtrar-select-label"> Filtrar </InputLabel>
                        <Select
                            labelId="filtrar-select-label"
                            id="filtrar-select"
                            value={10}
                            label="Age"
                            onChange={ handleChange }
                        >
                            <MenuItem value={10}> Todas </MenuItem>
                            <MenuItem value={20}> Liberada </MenuItem>
                            <MenuItem value={20}> A tiempo </MenuItem>
                            <MenuItem value={20}> Atrasada </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Card>
            
        </Box>
    )
}
