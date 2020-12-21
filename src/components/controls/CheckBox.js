import React from 'react'
import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } from '@material-ui/core';

function CheckBox({ name, label, value, onChange }) {
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color='primary'
                    checked={value}
                    onChange={onChange}
                />}
                label={label}
            />
        </FormControl>
    )
}

export default CheckBox
