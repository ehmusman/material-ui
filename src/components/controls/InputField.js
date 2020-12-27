import { TextField } from '@material-ui/core'
import React from 'react'

function InputField({
    varient,
    label,
    name,
    value,
    onChange
}) {


    return (
        <TextField
            variant='outlined'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            error
            helperText='this field is required'

        />

    )
}

export default InputField
