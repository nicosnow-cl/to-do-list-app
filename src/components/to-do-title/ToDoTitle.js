import React from 'react'
import { Box } from '@mui/system'

export const ToDoTitle = ( { todayDate } ) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <h1> COSAS POR HACER </h1>

            <h2> Hoy: { todayDate.parsed } </h2>
        </Box>
    );
}
