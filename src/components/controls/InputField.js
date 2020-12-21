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
            variant={varient}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />

    )
}

export default InputField
