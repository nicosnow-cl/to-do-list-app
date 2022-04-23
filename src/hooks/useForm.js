import { useState } from 'react';

export const useForm = ( initialState ) => {
    const [ formValues, setformValues ] = useState( initialState );

    const reset = ( form ) => {
        ( !form ) ? setformValues( initialState ) : setformValues( form );
    }

    const handleInputChange = ( { target } ) => {
        setformValues( {
            ...formValues,
            [ target.name ]: target.value
        } );
    }

    return { formValues, handleInputChange, reset };
}
