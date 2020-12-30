import { TextField } from '@material-ui/core'
import React from 'react'

function InputField({
    varient,
    label,
    name,
    value,
    onChange,
    error = null
}) {

    return (
        <TextField
            variant={'outlined' || varient}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />

    )
}

export default InputField
