import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core'
import React from 'react'

function Select({
    name,
    label,
    value,
    onChange,
    options,
    error = null
}) {
    return (
        <FormControl
            variant='outlined'
            {...(error && { error: true })}
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {options.map(option => (
                    <MenuItem value={option.id} key={option.id}>{option.title}</MenuItem>
                ))}
            </MuiSelect>
            {error && <FormHelperText >{error}</FormHelperText>}

        </FormControl>
    )
}

export default Select
